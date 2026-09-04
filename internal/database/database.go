package database

import (
	"database/sql"
	"fmt"
	"log"
	"os"

	_ "github.com/lib/pq"
)

func  ConnectDB()(* sql.DB , error){
	connStr:= os.Getenv("DATABASE_URI")

	fmt.Println("conn string - ", connStr)
	db , err:=sql.Open("postgres", connStr)
	if err != nil {
		fmt.Println("inside 1st")
		log.Fatal(err)
		return nil , err
	}
	if err:=db.Ping() ; err!= nil {
		fmt.Println("inside 2nd")
		log.Fatal(err)
		return nil , err
	}

	return  db , nil
}