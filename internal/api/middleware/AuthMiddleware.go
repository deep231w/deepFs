package middleware

import (
	"context"
	"fmt"
	"net/http"

	"github.com/DeepSystems/deepfs/internal/api/service"
)

func AuthMiddleware(next http.Handler) http.Handler{
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
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

		userId:= claims.User.ID
		ctx:= context.WithValue(
			r.Context(),
			"userId",
			userId,
		)
		
		next.ServeHTTP(w, r.WithContext(ctx))
	})
	
    // w.WriteHeader(http.StatusOK)
    // fmt.Fprintln(w, "token received")
}