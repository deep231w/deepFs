package routes

import (
	"database/sql"
	"net/http"

	"github.com/DeepSystems/deepfs/internal/api/handlers"
)

func AddGoogleStorageAccount(mux *http.ServeMux, db *sql.DB){
	mux.HandleFunc("GET /api/v1/storage/addgoogleaccount", handlers.GoogleStorageLogin)
	mux.HandleFunc("GET /api/v1/storage/addgoogleaccount_callback",func(w http.ResponseWriter, r *http.Request) {
		handlers.GoogleStorageLoginCallback(w,r, db)
	})
}