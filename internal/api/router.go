package api

import (
	"net/http"

	"github.com/DeepSystems/deepfs/internal/api/routes"
)

func Router() *http.ServeMux{
	mux:= http.NewServeMux();

	routes.RegisterUsersRoute(mux)
	routes.AuthRoutes(mux)
	
	return mux
}