package routes

import (
	"database/sql"
	"net/http"

	"github.com/DeepSystems/deepfs/internal/api/handlers"
)

func AddGoogleAccount(mux *http.ServeMux, db *sql.DB){
	mux.HandleFunc("GET //api/v1/addgoogleaccount_callback", handlers.AddGoogleAccount)
	mux.HandleFunc("GET /api/v1/addgoogleaccount_callback",func(w http.ResponseWriter, r *http.Request) {
		handlers.AddGoogleAccountCallback(w,r, db)
	})
}