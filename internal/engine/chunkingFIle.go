package engine

import (
	"fmt"
	"io"
	"os"
)


func fileChunking(file *os.File) error {
	buffer:= make([]byte , 5*1024*1024) //5mb

	for{
		n, err := file.Read(buffer)

		if err != nil {
			if err == io.EOF{
				break
			}
			return  err
		}

		fmt.Println(buffer[:n])

	}

	return nil
}