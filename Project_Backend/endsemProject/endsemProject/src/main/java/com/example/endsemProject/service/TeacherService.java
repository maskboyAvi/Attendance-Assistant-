package com.example.endsemProject.service;

import com.example.endsemProject.model.SignUpModel.TeacherModel;
import com.example.endsemProject.repository.TeacherRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TeacherService {
    private final TeacherRepo teacherRepository;

    @Autowired
    public TeacherService(TeacherRepo teacherRepository) {
        this.teacherRepository = teacherRepository;
    }

    public TeacherModel loginUser(String email, String password) {
        return teacherRepository.findByEmailAndPassword(email, password);
    }
}
