package routes

import (
	"net/http"

	"github.com/DeepSystems/deepfs/internal/api/handlers"
)

func RegisterUsersRoute(mux *http.ServeMux){
	mux.HandleFunc("GET /users",handlers.GetUsers)
}