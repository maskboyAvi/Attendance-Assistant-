package com.example.endsemProject.service.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.endsemProject.dto.SignUpDTO;
import com.example.endsemProject.dto.TeacherDTO;
import com.example.endsemProject.dto.UserDTO;
import com.example.endsemProject.model.SignUpModel.StudentModel;
import com.example.endsemProject.model.SignUpModel.TeacherModel;
import com.example.endsemProject.repository.StudentRepo;
import com.example.endsemProject.repository.TeacherRepo;

@Service
public class AuthServiceImpl implements AuthService {
	
	@Autowired
	private StudentRepo userRepository;

	@Autowired
	private TeacherRepo	teacherRepository;

	@Override
	public UserDTO createUser(SignUpDTO signUpDTO) {
		StudentModel user = new StudentModel();
		user.setFullName(signUpDTO.getName());
		user.setEmail(signUpDTO.getEmail());
		// user.setPassword(new BCryptPasswordEncoder().encode(signUpDTO.getPassword()));
		user.setPassword(signUpDTO.getPassword());
		StudentModel createdUser = userRepository.save(user);
		UserDTO userDTO = new UserDTO();
		userDTO.setEmail(createdUser.getEmail());
		userDTO.setName(createdUser.getFullName());
		return userDTO;
	}

	@Override
	public TeacherDTO createTeacher(SignUpDTO signUpDTO) {
		TeacherModel teacher = new TeacherModel();
		teacher.setFullName(signUpDTO.getName());
		teacher.setEmail(signUpDTO.getEmail());
		// teacher.setPassword(new BCryptPasswordEncoder().encode(signUpDTO.getPassword()));
		teacher.setPassword(signUpDTO.getPassword());
		TeacherModel createdTeacher = teacherRepository.save(teacher);
		TeacherDTO teacherDTO = new TeacherDTO();
		teacherDTO.setEmail(createdTeacher.getEmail());
		teacherDTO.setName(createdTeacher.getFullName());
		return teacherDTO;
	}

	
}
