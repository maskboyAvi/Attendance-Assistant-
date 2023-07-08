package com.example.endsemProject.service;

import java.util.Optional;

import com.example.endsemProject.model.File;

public interface Fileservice {
	public File uploadFile(File file);
	Optional<File> downloadFile(int id);
    Optional<File> downloadFile(String email);
}
