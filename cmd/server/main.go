package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/DeepSystems/deepfs/internal/api"
	"github.com/DeepSystems/deepfs/internal/api/config"
	"github.com/DeepSystems/deepfs/internal/database"
	"github.com/joho/godotenv"
)

func CORSMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		// 1. Explicitly allow your frontend domain (DO NOT use "*" if sending cookies)
		w.Header().Set("Access-Control-Allow-Origin", "http://localhost:5173")
		
		// 2. Allow credentials (required since your OAuth flow sets a cookie)
		w.Header().Set("Access-Control-Allow-Credentials", "true")
		
		// 3. Define allowed methods and headers
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")

		// 4. Handle preflight (OPTIONS) requests immediately
		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusOK)
			return
		}

		// Pass down to the actual handler
		next.ServeHTTP(w, r)
	})
}

func main() {
	fmt.Println("DeepFS Server")
	err:= godotenv.Load()
	if err != nil {
		log.Fatal(err, ", error loading env")
	}
	config.GoogleAuthConfig()
	db , err := database.ConnectDB()
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()
	router:= api.Router(db)
	server :=  &http.Server{
		Addr: ":8080",
		Handler: CORSMiddleware(router),
	}

	fmt.Println("Server started at port: 8080")
	err=server.ListenAndServe()
	if err != nil {
		log.Fatalf("Error %v" , err)
	}	
}