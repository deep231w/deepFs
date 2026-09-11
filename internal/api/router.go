package api

import (
	"database/sql"
	"net/http"

	"github.com/DeepSystems/deepfs/internal/api/routes"
)

func Router(db *sql.DB) *http.ServeMux{
	mux:= http.NewServeMux();
	
	routes.RegisterUsersRoute(mux)
	routes.AuthRoutes(mux , db)
	routes.Me(mux)
	routes.LogOut(mux)
	return mux
}