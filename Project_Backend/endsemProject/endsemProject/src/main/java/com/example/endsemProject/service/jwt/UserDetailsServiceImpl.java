package com.example.endsemProject.service.jwt;
import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.endsemProject.model.SignUpModel.StudentModel;
import com.example.endsemProject.repository.StudentRepo;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
	
		@Autowired
		private StudentRepo studentRepository;
	
	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		StudentModel user = studentRepository.findFirstByEmail(email);
	        if(user == null){
	            throw new UsernameNotFoundException("User not found",null);
	        }
	        return new org.springframework.security.core.userdetails.User(user.getEmail(), user.getPassword(), new ArrayList<>());
	}

}
