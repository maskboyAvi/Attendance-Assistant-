package com.example.endsemProject.controller;

import com.example.endsemProject.model.SignUpModel.*;
import com.example.endsemProject.service.StudentService;
import com.example.endsemProject.service.TeacherService;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class LoginController {
    private final StudentService studentService;
    private final TeacherService teacherService;

    @Autowired
    public LoginController(StudentService studentService, TeacherService teacherService) {
        this.studentService = studentService;
        this.teacherService = teacherService;
    }

    @PostMapping("/login/student")
    public ResponseEntity<Map<String, String>> studentLogin(@RequestBody LoginRequest loginRequest) {
        StudentModel student = studentService.loginUser(loginRequest.getEmail(), loginRequest.getPassword());
        if (student != null) {
            return ResponseEntity.ok().body(createResponse("status", "Successfull login!"));
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(createResponse("status", "error", "message", "Invalid credentials"));
        }
    }

    @PostMapping("/login/teacher")
    public String teacherLogin(@RequestBody LoginRequest loginRequest) {
        TeacherModel teacher = teacherService.loginUser(loginRequest.getEmail(), loginRequest.getPassword());
        if (teacher != null) {
            return "Teacher login successful!";
        } else {
            return "Invalid email or password.";
        }
    }

    private Map<String, String> createResponse(String key1, String value1, String key2, String value2) {
        Map<String, String> response = new HashMap<>();
        response.put(key1, value1);
        response.put(key2, value2);
        return response;
    }

    private Map<String, String> createResponse(String key, String value) {
        Map<String, String> response = new HashMap<>();
        response.put(key, value);
        return response;
    }
}
