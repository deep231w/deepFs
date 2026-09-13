package service

import (
	"crypto/rand"
	"encoding/base64"
)

func GenerateRandomState(len int)(string, error){
	b:= make([]byte, len)
	_ , err:= rand.Read(b)
	if err != nil {
		return "", err
	}

	return base64.URLEncoding.EncodeToString(b), nil
}
