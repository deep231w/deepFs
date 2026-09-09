package routes

import (
	"net/http"
	"github.com/DeepSystems/deepfs/internal/api/handlers"
)

func Me(mux *http.ServeMux){
	mux.HandleFunc("GET /api/v1/me",handlers.Me)
}