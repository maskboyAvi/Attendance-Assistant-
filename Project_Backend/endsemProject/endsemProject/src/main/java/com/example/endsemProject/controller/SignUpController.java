package com.example.endsemProject.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.endsemProject.dto.SignUpDTO;
import com.example.endsemProject.dto.TeacherDTO;
import com.example.endsemProject.dto.UserDTO;
import com.example.endsemProject.service.auth.AuthService;

@RestController
public class SignUpController {
	@Autowired
	private AuthService authService;
	
	@PostMapping("/signup")
	public ResponseEntity<?> signUpUser(@RequestBody SignUpDTO signUpDTO){
		UserDTO createdUser = authService.createUser(signUpDTO);
		if(createdUser == null) {
			return new ResponseEntity<>("User not created, Try again Later!!!",HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<>(createdUser,HttpStatus.CREATED);
	}

	@PostMapping("/signupTeacher")
	public ResponseEntity<?> signUpTeacher(@RequestBody SignUpDTO signUpDTO){
		TeacherDTO createdTeacher = authService.createTeacher(signUpDTO);
		if(createdTeacher == null) {
			return new ResponseEntity<>("Teacher not created, Try again Later!!!",HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<>(createdTeacher,HttpStatus.CREATED);
	}
}
