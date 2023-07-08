package com.example.endsemProject.service.auth;

import com.example.endsemProject.dto.SignUpDTO;
import com.example.endsemProject.dto.TeacherDTO;
import com.example.endsemProject.dto.UserDTO;

public interface AuthService {

	UserDTO createUser(SignUpDTO signUpDTO);

	TeacherDTO createTeacher(SignUpDTO signUpDTO);

}
