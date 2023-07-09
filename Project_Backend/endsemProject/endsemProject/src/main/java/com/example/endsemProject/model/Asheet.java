package com.example.endsemProject.model;



import jakarta.persistence.*;

@Entity
public class Asheet {
@Id
private String rollNo;

public String getRollNo() {
	return rollNo;
}

public void setRollNo(String rollNo) {
	this.rollNo = rollNo;
}
}