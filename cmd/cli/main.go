package main

import (
	"fmt"
	"os"
	"github.com/DeepSystems/deepfs/internal/engine"
)

func main() {
	fmt.Println("DeepFS CLI")
	
	if len(os.Args) < 2{
		fmt.Println("Please provide a file path")
		return 
	}

	filepath := os.Args[1];
	
	e:= engine.New()

	err:=e.Upload(filepath)

	if err != nil{
		fmt.Println(err);
	}
}