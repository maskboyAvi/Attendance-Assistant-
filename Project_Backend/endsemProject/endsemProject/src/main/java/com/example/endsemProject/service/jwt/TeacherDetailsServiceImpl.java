package com.example.endsemProject.service.jwt;

import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.endsemProject.model.SignUpModel.TeacherModel;
import com.example.endsemProject.repository.TeacherRepo;

@Service
public class TeacherDetailsServiceImpl implements UserDetailsService {
	
		@Autowired
		private TeacherRepo teacherRepository;
	
	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		TeacherModel user = teacherRepository.findFirstByEmail(email);
	        if(user == null){
	            throw new UsernameNotFoundException("User not found",null);
	        }
	        return new org.springframework.security.core.userdetails.User(user.getRollNo(), user.getEmail(), new ArrayList<>());
	}

}
