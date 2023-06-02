package com.example.endsemProject.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.endsemProject.model.SignUpModel.StudentModel;
import com.example.endsemProject.model.SignUpModel.TeacherModel;
import com.example.endsemProject.repository.StudentRepo;
import com.example.endsemProject.repository.TeacherRepo;

@Service
public class MyServiceImpl implements MyService{
	@Autowired
	StudentRepo StudentRepo;
	@Override
	public boolean addUser(StudentModel newUser) {
		try {
			StudentModel savedUser = StudentRepo.save(newUser);
			if(savedUser!=null) {
				return true;
			}else {
				return false;
			}
		}catch(Exception e) {
			System.out.println("Exception "+e +" has occured.");
		}
		return false;
	}

	@Autowired
	TeacherRepo TeacherRepo;
	@Override
	public boolean addUser(TeacherModel newUser) {
		try {
			TeacherModel savedUser = TeacherRepo.save(newUser);
			if(savedUser!=null) {
				return true;
			}else {
				return false;
			}
		}catch(Exception e) {
			System.out.println("Exception "+e +" has occured.");
		}
		return false;
	}

}
