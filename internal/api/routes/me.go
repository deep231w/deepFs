package routes

import (
	"database/sql"
	"net/http"

	"github.com/DeepSystems/deepfs/internal/api/handlers"
)

func Me(mux *http.ServeMux, db *sql.DB){
	mux.HandleFunc("GET /api/v1/me",func(w http.ResponseWriter, r *http.Request) {
		handlers.Me(w, r, db)
	})
}