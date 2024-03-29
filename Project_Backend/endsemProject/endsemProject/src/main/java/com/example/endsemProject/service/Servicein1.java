package com.example.endsemProject.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.endsemProject.model.Asheet;

@Service
public interface Servicein1 extends CrudRepository<Asheet,Long> {
    
     Asheet getByRollNo(String rollno);
}
