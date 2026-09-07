package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/DeepSystems/deepfs/internal/api"
	"github.com/DeepSystems/deepfs/internal/database"
	"github.com/joho/godotenv"
)

func main() {
	fmt.Println("DeepFS Server")
	err:= godotenv.Load()
	if err != nil {
		log.Fatal(err, ", error loading env")
	}
	db , err := database.ConnectDB()
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()
	router:= api.Router()
	server :=  &http.Server{
		Addr: ":8080",
		Handler: router,
	}

	fmt.Println("Server started at port: 8080")
	err=server.ListenAndServe()
	if err != nil {
		log.Fatalf("Error %v" , err)
	}
	
}