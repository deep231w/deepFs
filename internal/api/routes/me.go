package routes

import (
	"net/http"

	"github.com/DeepSystems/deepfs/internal/api/middleware"
)

func Me(mux *http.ServeMux){
	mux.HandleFunc("GET /api/v1/me",middleware.Middleware)
}