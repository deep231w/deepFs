package handlers

import (
	"fmt"
	"net/http"

	"github.com/DeepSystems/deepfs/internal/api/config"
)

func GoogleLogin(w http.ResponseWriter , r * http.Request){
	url:= config.AppConfig.GoogleLoginConfig.AuthCodeURL("randomstate")
	fmt.Printf("app config = %v", config.AppConfig)
	http.Redirect(w , r , url , http.StatusTemporaryRedirect)
}
