package handlers

import (
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/DeepSystems/deepfs/internal/api/service"
)

func Me(w http.ResponseWriter, r *http.Request){
	jwtToken, err:= r.Cookie("auth_token")
	if err != nil{
		fmt.Println("COOKIE ERROR:", err)
		http.Error(w,"Unauthorised no tkoen found", http.StatusUnauthorized)
		return
	}
	claims, err:=service.VerifyJwt(jwtToken.Value)
	if err != nil {
		http.Error(w, "Token Verification failed / token expired" , http.StatusUnauthorized)
	}

	w.Header().Set("Content-Type","application/json")
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(claims)
}