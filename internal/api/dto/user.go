package dto

type User struct{
	ID				int `json:"id"`
  	Email 			string `json:"email"`
  	VerifiedEmail 	bool `json:"verified_email"`
  	Name 			string `json:"name"`
  	Picture 		string `json:"picture"`
}