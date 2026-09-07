package handlers

import (
	"context"
	"encoding/json"
	"fmt"
	"io"
	"net/http"

	"github.com/DeepSystems/deepfs/internal/api/config"
)

func GoogleLogin(w http.ResponseWriter , r * http.Request){
	url:= config.AppConfig.GoogleLoginConfig.AuthCodeURL("randomstate")
	fmt.Printf("app config = %v", config.AppConfig)
	http.Redirect(w , r , url , http.StatusTemporaryRedirect)
}

func GoogleCallBack(w http.ResponseWriter, r *http.Request){
	state:= r.URL.Query().Get("state")
	if state != "randomstate" {
		http.Error(w , "status didnt match !!",  http.StatusBadRequest)
		return
	}
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