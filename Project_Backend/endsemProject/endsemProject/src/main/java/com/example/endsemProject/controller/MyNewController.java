package com.example.endsemProject.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.endsemProject.model.SignUpModel.StudentModel;
import com.example.endsemProject.model.SignUpModel.TeacherModel;
import com.example.endsemProject.service.MyService;

@CrossOrigin(origins="http://127.0.0.1:5500")
@RestController
public class MyNewController {
	@Autowired
     MyService myService;
	
	@GetMapping("/")
	public String test() {
		return "I am working fine dude!";
	}

	@PostMapping("/student")
	public String addUser(@RequestBody StudentModel newUser) {
		if(myService.addUser(newUser)) {
			return "User added to database succesfully.";
		}else {
			return "Error!! Occured while saving the user to the database.";
		}
	}
	
	@PostMapping("/teacher")
	public String addUser(@RequestBody TeacherModel newUser) {
		if(myService.addUser(newUser)) {
			return "User added to database succesfully.";
		}else {
			return "Error!! Occured while saving the user to the database.";
		}
	}
}
