package database

import (
	"database/sql"
	"fmt"
	"log"
	"os"
	"time"

	_ "github.com/lib/pq"
)

func  ConnectDB()(* sql.DB , error){
	connStr:= os.Getenv("DATABASE_URI")
	db , err:=sql.Open("postgres", connStr)
	if err != nil {
		log.Fatal(err)
		return nil , err
	}
	db.SetMaxOpenConns(20)
	db.SetMaxIdleConns(20)
	db.SetConnMaxLifetime(5 * time.Minute)
	if err:=db.Ping() ; err!= nil {
		fmt.Println("inside 2nd")
		log.Fatal(err)
		return nil , err
	}
	return  db , nil
}