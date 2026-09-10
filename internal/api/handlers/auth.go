package handlers

import (
	"context"
	"crypto/rand"
	"database/sql"
	"encoding/base64"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"time"

	"github.com/DeepSystems/deepfs/internal/api/config"
	"github.com/DeepSystems/deepfs/internal/api/dto"
	"github.com/DeepSystems/deepfs/internal/api/service"
)

func generateRandomState(len int)(string, error){
	b:= make([]byte, len)
	_ , err:= rand.Read(b)
	if err != nil {
		return "", err
	}

	return base64.URLEncoding.EncodeToString(b), nil
}

func GoogleLogin(w http.ResponseWriter , r * http.Request){
	rstate, err := generateRandomState(32)
	if err != nil {
		http.Error(w, "State generation faoiled!!", http.StatusInternalServerError)
		return
	}

	// save crypto state in httponly cookie
	http.SetCookie(w, &http.Cookie{
		Name: "oauth_state",
		Value: rstate,
		Path: "/",
		MaxAge: 300,
		HttpOnly: true,
		Secure: false,
		SameSite: http.SameSiteLaxMode,
	})

	url:= config.AppConfig.GoogleLoginConfig.AuthCodeURL(rstate)
	fmt.Printf("app config = %v", config.AppConfig)
	http.Redirect(w , r , url , http.StatusTemporaryRedirect)
}

func GoogleCallBack(w http.ResponseWriter, r *http.Request , db *sql.DB){
	state:= r.URL.Query().Get("state")
	cookie, err:= r.Cookie("oauth_state")
	if err != nil || state != cookie.Value {
		http.Error(w , "State mismatch or cookie expired !!",  http.StatusBadRequest)
		return
	}
	// Delete state cookie right away
	http.SetCookie(w, &http.Cookie{Name: "oauth_state", Value: "", Path: "/", MaxAge: -1})

	code:= r.URL.Query().Get("code")
	googlecon:=config.AppConfig.GoogleLoginConfig
	token, err:=googlecon.Exchange(context.Background() , code)
	if err != nil {
		http.Error(w , "Code exchane failed !!",  http.StatusBadRequest)
		return
	}
	res, err:=http.Get("https://www.googleapis.com/oauth2/v2/userinfo?access_token=" + token.AccessToken)
	if err!= nil{
		http.Error(w, "Fetch data failed", http.StatusBadRequest)
		return
	}
	defer res.Body.Close()


	body, err := io.ReadAll(res.Body)
	if err != nil {
		http.Error(w, "Failed reading Google response", http.StatusBadRequest)
		return
	}

	var userData dto.User
	err = json.Unmarshal(body, &userData)
	if err != nil{
		http.Error(w , "User Data reading failed !!",  http.StatusBadRequest)
		return
	}

	sqlSatatement := `INSERT INTO users (name,email,picture,verified_email) VALUES ($1,$2,$3,$4) ON CONFLICT (email) DO NOTHING`
	result,err:=db.Exec(sqlSatatement , userData.Name,userData.Email,userData.Picture,userData.VerifiedEmail)

	fmt.Println("insert into db result:= ",result)
	if err != nil{
		http.Error(w, "Inserting / skipping into db failed ", http.StatusInternalServerError)
		return
	}
	jwtToken, err:= service.GeneRateJwt(userData)
	if err != nil {
		http.Error(w, "jwt token generation failed !! / server error", http.StatusInternalServerError)
		return
	}

	http.SetCookie(w, &http.Cookie{
		Name: "auth_token",
		Value: jwtToken,
		Expires: time.Now().Add(24 * time.Hour),
		Path: "/",
		HttpOnly: true,
		Secure: false,
		SameSite: http.SameSiteLaxMode,
	})
	http.Redirect(w,r,"http://localhost:5173/dashboard",http.StatusTemporaryRedirect)
}