package com.example.endsemProject.service;

import com.example.endsemProject.model.SignUpModel.StudentModel;
import com.example.endsemProject.repository.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentService {
    private final StudentRepo studentRepository;

    @Autowired
    public StudentService(StudentRepo studentRepository) {
        this.studentRepository = studentRepository;
    }
    
    public StudentModel loginUser(String email, String password) {
        return studentRepository.findByEmailAndPassword(email, password);
    }
}