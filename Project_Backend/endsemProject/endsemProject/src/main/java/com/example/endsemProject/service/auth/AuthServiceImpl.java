package com.example.endsemProject.service.auth;

import org.springframework.beans.factory.annotation.Autowired;
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
		user.setname(signUpDTO.getName());
		user.setEmail(signUpDTO.getEmail());
		user.setRollNo(signUpDTO.getRollNo());
		user.setProfession(signUpDTO.getProfession());
		// user.setPassword(new BCryptPasswordEncoder().encode(signUpDTO.getPassword()));
		user.setPassword(signUpDTO.getPassword());
		StudentModel createdUser = userRepository.save(user);
		UserDTO userDTO = new UserDTO();
		userDTO.setEmail(createdUser.getEmail());
		userDTO.setName(createdUser.getname());
		userDTO.setRollNo(createdUser.getRollNo());
		userDTO.setProfession(createdUser.getProfession());
		return userDTO;
	}

	@Override
	public TeacherDTO createTeacher(SignUpDTO signUpDTO) {
		TeacherModel teacher = new TeacherModel();
		teacher.setname(signUpDTO.getName());
		teacher.setEmail(signUpDTO.getEmail());
		teacher.setRollNo(signUpDTO.getRollNo());
		teacher.setProfession(signUpDTO.getProfession());
		// teacher.setPassword(new BCryptPasswordEncoder().encode(signUpDTO.getPassword()));
		teacher.setPassword(signUpDTO.getPassword());
		TeacherModel createdTeacher = teacherRepository.save(teacher);
		TeacherDTO teacherDTO = new TeacherDTO();
		teacherDTO.setEmail(createdTeacher.getEmail());
		teacherDTO.setName(createdTeacher.getname());
		teacherDTO.setRollNo(createdTeacher.getRollNo());
		teacherDTO.setProfession(createdTeacher.getProfession());
		return teacherDTO;
	}

	
}
