package engine

import "os"

type Engine struct{}

func New() *Engine {

	return &Engine{

	}
}

func (e *Engine) Upload(path string) error {

	file ,  err := os.Open(path)

	if err != nil {
		return err
	}

	defer file.Close()

	return fileChunking(file)
	
}