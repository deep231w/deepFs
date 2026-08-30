package engine

import (
	"fmt"
	"io"
	"os"
	"path/filepath"
)


func fileChunking(file *os.File) error {
	buffer:= make([]byte , 5*1024*1024) //5mb
	c:=0
	outputFolder:="../../uploads/chunks"
	err := os.MkdirAll(outputFolder, 0755)
	if err != nil {
		panic(err)
	}

	for{
		n, err := file.Read(buffer)

		if err != nil {
			if err == io.EOF{
				break
			}
			return  err
		}
		// fmt.Println(string(buffer[:n]))

		fileName:= fmt.Sprintf("chunk_%d", c)
		fullpath:=filepath.Join(outputFolder, fileName)
		// file, err:= os.Create(fileName)
		c++
		err= os.WriteFile(fullpath , buffer[:n],0644)
		if err!= nil {
			return err
		}
		fmt.Printf("file created %v", fullpath)
	}

	return nil
}