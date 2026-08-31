package main

import (
	"fmt"
	"os"
	"path/filepath"

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

func play() error{
	fmt.Println("Converting to file ......")
	output, err := os.Create("../../uploads/reconstructed.mp4")
	if err != nil {
		return err
	}
	defer output.Close()
	for i := 0; ; i++ {
		path := filepath.Join(
			"../../uploads/chunks",
			fmt.Sprintf("chunk_%d", i),
		)

		chunk, err := os.ReadFile(path)

		if err != nil {
			if os.IsNotExist(err) {
				break
			}
			return err
		}

		_, err = output.Write(chunk)
		if err != nil {
			return err
		}
	}
	fmt.Println("Converted successfully to file !!!")
	return nil
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