package service

import (
	"crypto/aes"
	"crypto/cipher"
	"crypto/rand"
	"fmt"
	"io"
)

func Encrypt(token []byte, key []byte)([]byte, error){
	block, err := aes.NewCipher(key)
	if err != nil {
		return  nil, err
	}

	gcm, err := cipher.NewGCM(block)
	if err != nil {
		return nil, err
	}

	nonce :=  make([]byte, gcm.NonceSize())
	if _, err := io.ReadFull(rand.Reader, nonce); err != nil {
		return nil, err
	}

	return gcm.Seal(nonce, nonce, token, nil), nil
}

func Decrypt(encriptedToken []byte, key []byte)([]byte, error){

	block, err := aes.NewCipher(key)
	if err != nil {
		return nil, err
	}

	gcm, err := cipher.NewGCM(block)
	if err != nil {
		return nil, err
	}

	nonceSize := gcm.NonceSize()
	if len(encriptedToken) < nonceSize {
		return nil, fmt.Errorf("encryption key is too small")
	}

	nonce, actualCipherText := encriptedToken[:nonceSize] , encriptedToken[nonceSize:]

	return gcm.Open(nil, nonce, actualCipherText, nil)
}