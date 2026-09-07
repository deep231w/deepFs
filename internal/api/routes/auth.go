package routes

import (
	"net/http"

	"github.com/DeepSystems/deepfs/internal/api/handlers"
)

func AuthRoutes(mux *http.ServeMux ){
	mux.HandleFunc("GET /google_login", handlers.GoogleLogin)
}