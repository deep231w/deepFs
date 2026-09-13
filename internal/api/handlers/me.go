package handlers

import (
	"database/sql"
	"encoding/json"
	"net/http"

	"github.com/DeepSystems/deepfs/internal/api/dto"
	"github.com/DeepSystems/deepfs/internal/api/service"
)

func Me(w http.ResponseWriter, r *http.Request, db *sql.DB){
	jwtToken, err:= r.Cookie("auth_token")
	if err != nil{
		http.Error(w,"Unauthorised no tkoen found", http.StatusUnauthorized)
		return
	}
	claims, err:=service.VerifyJwt(jwtToken.Value)
	if err != nil {
		http.Error(w, "Token Verification failed / token expired" , http.StatusUnauthorized)
		return
	}
	var user dto.User
	err=db.QueryRow(`
		SELECT 
			id,
			name,
			email,
			picture,
			verified_email,
			created_at,
			google_id 
		FROM users WHERE id=$1
		`,claims.UserId).Scan(
			&user.ID,
			&user.Name,
			&user.Email,
			&user.Picture,
			&user.VerifiedEmail,
			&user.CreatedAt,
			&user.Google_id,
		)

	if err != nil {
		if err == sql.ErrNoRows{
			http.Error(w,"User Not Found", http.StatusNotFound)
			return
		}
		http.Error(w, "Database Operation failed!", http.StatusInternalServerError)
		return
	}

	res:=struct{
		User dto.User `json:"user"`
		Message string `json:"message"`
	}{
		User: user,
		Message: "User Authorised",
	}

	w.Header().Set("Content-Type","application/json")
	w.WriteHeader(http.StatusOK)
	if err:=json.NewEncoder(w).Encode(res) ; err != nil {
		return
	}
}