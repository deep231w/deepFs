package main

import (
	"fmt"
	"os"
	"github.com/DeepSystems/deepfs/internal/engine"
)

func upload(){
	if len(os.Args) < 2{
		fmt.Println("Please provide a file path")
		return 
	}

	filepath := os.Args[2];
	
	e:= engine.New()

	err:=e.Upload(filepath)

	if err != nil{
		fmt.Println(err);
	}

}

func play(){
	fmt.Println("Playing ......")
}
func main() {
	fmt.Println("DeepFS CLI")
	arg:=os.Args[1]
	fmt.Printf("args = %v\n", arg)
	
	switch arg{
	case "upload":
		upload()
	case "play":
		play()
	default:
		fmt.Println("Command doesnt exist : ", arg)
	}
}