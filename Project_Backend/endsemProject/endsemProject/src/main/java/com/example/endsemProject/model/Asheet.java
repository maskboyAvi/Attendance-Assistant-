package com.example.endsemProject.model;



import jakarta.persistence.*;

@Entity
public class Asheet {
@Id
@GeneratedValue(strategy = GenerationType.SEQUENCE)
private Long id;
@Column(unique = true)
private String rollNo;

public Asheet(String rollNo) {
	this.rollNo = rollNo;
}

public Asheet() {
	
}

public Long getId() {
	return id;
}

public void setId(Long id) {
	this.id = id;
}

public String getRollNo() {
	return rollNo;
}

public void setRollNo(String rollNo) {
	this.rollNo = rollNo;
}
}