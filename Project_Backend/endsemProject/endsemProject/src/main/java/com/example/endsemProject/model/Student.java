package com.example.endsemProject.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Student {
	@Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private String rollno;
    private String  code;
    private String email;
    private float latitude;
    private float longitude;
	
	public float getLatitude() {
		return latitude;
	}
	public Student(int id, String rollno, String code, String email, float latitude, float longitude) {
		this.id = id;
		this.rollno = rollno;
		this.code = code;
		this.email = email;
		this.latitude = latitude;
		this.longitude = longitude;
	}
	public void setLatitude(float latitude) {
		this.latitude = latitude;
	}
	public float getLongitude() {
		return longitude;
	}
	public void setLongitude(float longitude) {
		this.longitude = longitude;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getRollno() {
		return rollno;
	}
	public void setRollno(String rollno) {
		this.rollno = rollno;
	}
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	
   public Student() {
	   
   }
     
     
	
     
}
