package routes

import (
	"net/http"

	"github.com/DeepSystems/deepfs/internal/api/handlers"
)

func LogOut(mux *http.ServeMux){
	mux.HandleFunc("POST /api/v1/logout" , handlers.LogOut)
}