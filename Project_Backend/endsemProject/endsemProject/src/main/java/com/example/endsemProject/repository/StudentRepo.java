package com.example.endsemProject.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.endsemProject.model.SignUpModel.StudentModel;


@Repository
public interface StudentRepo extends JpaRepository<StudentModel,Long>{
    StudentModel findByEmailAndPassword(String email, String password);
    StudentModel findFirstByEmail(String email);
    StudentModel findByEmail(String email);
    StudentModel findByRollNo(String rollNo);
}