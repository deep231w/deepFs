package routes

import (
	"net/http"

	"github.com/DeepSystems/deepfs/internal/api/handlers"
)

func AddGoogleAccount(mux *http.ServeMux){
	mux.HandleFunc("POST /api/v1/addgoogleaccount",handlers.AddGoogleAccount)
}