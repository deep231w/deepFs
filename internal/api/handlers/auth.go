package handlers

import (
	"context"
	"crypto/rand"
	"encoding/base64"
	"encoding/json"
	"fmt"
	"io"
	"net/http"

	"github.com/DeepSystems/deepfs/internal/api/config"
)

func generateRandomState(len int)(string, error){
	b:= make([]byte, len)
	_ , err:= rand.Read(b)
	if err != nil {
		return "", nil
	}

	return base64.URLEncoding.EncodeToString(b), nil
}

func GoogleLogin(w http.ResponseWriter , r * http.Request){
	rstate, err := generateRandomState(32)
	if err != nil {
		http.Error(w, "State generation faoiled!!", http.StatusInternalServerError)
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

func GoogleCallBack(w http.ResponseWriter, r *http.Request){
	state:= r.URL.Query().Get("state")
	cookie, err:= r.Cookie("state")
	if err != nil || state != cookie.Value {
		http.Error(w , "State mismatch or cookie expired !!",  http.StatusBadRequest)
		return
	}
	// Delete state cookie right away
	http.SetCookie(w, &http.Cookie{Name: "oauth_state", Value: "", Path: "/", MaxAge: -1})

	code:= r.URL.Query().Get("code")
	googlecon:=config.GoogleAuthConfig()
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

	userData, err:=io.ReadAll(res.Body)

	if err != nil{
		http.Error(w , "User Data reading failed !!",  http.StatusBadRequest)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusFailedDependency)
	json.NewEncoder(w).Encode(userData)
}