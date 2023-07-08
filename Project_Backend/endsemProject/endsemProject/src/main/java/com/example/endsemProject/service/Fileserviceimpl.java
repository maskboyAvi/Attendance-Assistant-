package com.example.endsemProject.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.endsemProject.model.File;
@Service
public class Fileserviceimpl implements Fileservice{
	@Autowired
	private FileRepo fileRepo;

	@Override
	public File uploadFile(File file) {
		// TODO Auto-generated method stub
		return fileRepo.save(file);
	}

	@Override
	public Optional<File> downloadFile(int id) {
		// TODO Auto-generated method stub
		return fileRepo.findById(id);
	}

	@Override
	public Optional<File> downloadFile(String email) {
		// TODO Auto-generated method stub
		return Optional.ofNullable(fileRepo.findByname(email));
	}

	

}
