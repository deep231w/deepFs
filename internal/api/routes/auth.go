package routes

import (
	"database/sql"
	"net/http"

	"github.com/DeepSystems/deepfs/internal/api/handlers"
)

func AuthRoutes(mux *http.ServeMux, db *sql.DB ){
	mux.HandleFunc("GET /google_login", handlers.GoogleLogin)
	mux.HandleFunc("GET /google_callback", func (w http.ResponseWriter , r *http.Request){
		handlers.GoogleCallBack(w,r,db)
	})
}