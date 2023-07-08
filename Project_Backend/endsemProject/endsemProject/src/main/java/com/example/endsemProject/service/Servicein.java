package com.example.endsemProject.service;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

import com.example.endsemProject.model.Student;

@Service
public interface Servicein extends CrudRepository<Student,Integer>  {


}

