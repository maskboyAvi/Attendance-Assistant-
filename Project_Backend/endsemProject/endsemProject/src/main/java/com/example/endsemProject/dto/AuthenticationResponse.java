package com.example.endsemProject.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class AuthenticationResponse {
	private String jwtToken;

	// public AuthenticationResponse(String jwt) {
	// 	this.jwtToken=jwt; 
	// }

	public String getJwtToken() {
		return jwtToken;
	}

	public void setJwtToken(String jwtToken) {
		this.jwtToken = jwtToken;
	}
	
}
