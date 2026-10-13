package routes

import (
	"database/sql"
	"net/http"

	"github.com/DeepSystems/deepfs/internal/api/handlers"
	"github.com/DeepSystems/deepfs/internal/api/middleware"
)

func AddGoogleStorageAccount(mux *http.ServeMux, db *sql.DB){
	mux.Handle("GET /api/v1/storage/addgoogleaccount", 
		middleware.AuthMiddleware(http.HandlerFunc(
			handlers.GoogleStorageLogin,
		)),
	)

	mux.Handle("GET /api/v1/storage/addgoogleaccount_callback",
		middleware.AuthMiddleware(http.HandlerFunc(
				func(w http.ResponseWriter, r *http.Request) {
					handlers.GoogleStorageLoginCallback(w,r, db)
				},
			),
		),
	)
}