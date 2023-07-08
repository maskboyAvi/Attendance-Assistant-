package com.example.endsemProject.model;

import jakarta.persistence.*;

@Entity
public class File {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int fileId;
	private String fileName;
	private String fileType;
	private String email;
	public String getemail() {
		return email;
	}
	public void setemail(String email) {
		this.email = email;
	}
	@Lob // for Binary format
	@Column(columnDefinition = "LONGBLOB")
	private byte[] fileData;

	public File() {
		super();
	}
	
	public File(int fileId, String fileName, String fileType, String email, byte[] fileData) {
		super();
		this.fileId = fileId;
		this.fileName = fileName;
		this.fileType = fileType;
		this.email = email;
		this.fileData = fileData;
	}
	public int getFileId() {
		return fileId;
	}
	public void setFileId(int fileId) {
		this.fileId = fileId;
	}
	public String getFileName() {
		return fileName;
	}
	public void setFileName(String fileName) {
		this.fileName = fileName;
	}
	public String getFileType() {
		return fileType;
	}
	public void setFileType(String fileType) {
		this.fileType = fileType;
	}
	public byte[] getFileData() {
		return fileData;
	}
	public void setFileData(byte[] fileData) {
		this.fileData = fileData;
	}

}