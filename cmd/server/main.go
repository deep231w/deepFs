package main

import (
	"fmt"
	"log"

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
}