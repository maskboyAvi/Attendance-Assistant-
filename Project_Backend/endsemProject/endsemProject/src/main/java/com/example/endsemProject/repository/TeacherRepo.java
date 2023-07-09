package com.example.endsemProject.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.endsemProject.model.SignUpModel.TeacherModel;

@Repository
public interface TeacherRepo extends JpaRepository<TeacherModel,Long>{
	TeacherModel findByEmailAndPassword(String email, String password);
	TeacherModel findFirstByEmail(String email);
	TeacherModel findByEmail(String email);
    TeacherModel findByRollNo(String rollno);
}