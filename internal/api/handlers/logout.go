package handlers

import "net/http"

func LogOut(w http.ResponseWriter , r *http.Request){
	http.SetCookie(w, &http.Cookie{
		Name: "auth_token",
		Value: "",
		Path: "/",
		MaxAge: -1,
		HttpOnly: true,
		Secure: false,
		SameSite: http.SameSiteLaxMode,
	})

	w.WriteHeader(http.StatusNoContent)
}