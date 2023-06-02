package com.example.endsemProject.service;

import com.example.endsemProject.model.SignUpModel.StudentModel;
import com.example.endsemProject.model.SignUpModel.TeacherModel;

public interface MyService {
	boolean addUser(StudentModel newUser);
	boolean addUser(TeacherModel newUser);
}
