package service

import (
	"errors"
	"fmt"
	"os"
	"time"

	"github.com/DeepSystems/deepfs/internal/api/dto"
	"github.com/golang-jwt/jwt/v5"
)

type userClaims struct{
	User dto.User `json:"user"`
	jwt.RegisteredClaims
}

func GeneRateJwt(user dto.User)(string , error){
	jwtKey := os.Getenv("JWT_SECRET")
	if jwtKey == ""{
		return "" , fmt.Errorf("NO secret key given")
	}
	claims:= userClaims{
		User: user,
		RegisteredClaims: jwt.RegisteredClaims{
			ExpiresAt: jwt.NewNumericDate(time.Now().Add(24 * time.Hour)),
			IssuedAt: jwt.NewNumericDate(time.Now()),
			Issuer: "go-backend",
		},
	}

	token:=jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	tokenString, err:=token.SignedString([]byte(jwtKey))
	if err != nil {
		return "" , err
	}

	return tokenString, nil
}

func VerifyJwt(tokenString string)(*userClaims, error){
	jwtKey := os.Getenv("JWT_SECRET")
	// Parse the token using the custom claims structure
	token, err := jwt.ParseWithClaims(tokenString, &userClaims{}, func(token *jwt.Token) (interface{}, error) {
		// Ensure the signing method is what we expect (HMAC / HS256)
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("unexpected signing method: %v", token.Header["alg"])
		}
		return jwtKey, nil
	})

	if err != nil {
		return nil, err
	}

	// Extract the claims if the token is valid
	if claims, ok := token.Claims.(*userClaims); ok && token.Valid {
		return claims, nil
	}

	return nil, errors.New("invalid token")
}