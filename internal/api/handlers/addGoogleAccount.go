package handlers

import (
	"context"
	"database/sql"
	"fmt"
	"net/http"
	"github.com/DeepSystems/deepfs/internal/api/config"
	"github.com/DeepSystems/deepfs/internal/api/service"
)

func GoogleStorageLogin(w http.ResponseWriter, r *http.Request){
	rstate, err := service.GenerateRandomState(32)
	if err != nil {
		http.Error(w ,"Server Error !!", http.StatusInternalServerError)
		return
	}

	http.SetCookie(w, &http.Cookie{
		Name: "google_storage",
		Value: rstate,
		Path: "/",
		MaxAge: 300,
		HttpOnly: true,
		Secure: false,
		SameSite: http.SameSiteLaxMode,
	})

	url:= config.GoogleAppConfig.GoogleLoginConfig.AuthCodeURL(rstate)
	http.Redirect(w, r, url, http.StatusTemporaryRedirect)
}

func GoogleStorageLoginCallback(w http.ResponseWriter, r *http.Request, db *sql.DB){
	state:= r.URL.Query().Get("state")
	cookie, err:= r.Cookie("google_storage") 
	if err != nil || state != cookie.Value {
		fmt.Println("err in cllback storage- ", err)
		http.Error(w , "State mismatch or cookie expired !!",  http.StatusBadRequest)
		return
	}

	// Delete state cookie right away
	http.SetCookie(w, &http.Cookie{Name: "oauth_state", Value: "", Path: "/", MaxAge: -1})

	//get jwt token from oauth for verify user 
	code:= r.URL.Query().Get("code")
	googlecon:=config.GoogleAppConfig.GoogleLoginConfig
	token, err:=googlecon.Exchange(context.Background() , code)
	if err != nil {
		http.Error(w , "Code exchane failed !!",  http.StatusBadRequest)
		return
	}

	fmt.Println("token: ", (token))
}