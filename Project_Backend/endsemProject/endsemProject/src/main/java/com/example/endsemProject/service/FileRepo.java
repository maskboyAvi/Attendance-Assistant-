package com.example.endsemProject.service;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.endsemProject.model.File;

public interface FileRepo extends JpaRepository<File, Integer> {
		
		@Query(value = "select * from file where email =?1",nativeQuery = true)
		File findByname(String email);
		
	}

