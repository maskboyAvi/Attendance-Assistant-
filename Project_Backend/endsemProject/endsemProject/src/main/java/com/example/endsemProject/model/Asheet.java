package com.example.endsemProject.model;



import jakarta.persistence.*;

@Entity
public class Asheet {
@Id
@GeneratedValue(strategy = GenerationType.SEQUENCE)
private Long id;
@Column(unique = true)
private String rollNo;
@Column(name = "Longitude")
private Float longitude;
@Column(name = "Latitude")
private Float latitude;

private int _29_09_2023;

public int get_29_09_2023() {
	return _29_09_2023;
}

public void set_29_09_2023(int _29_09_2023) {
	this._29_09_2023 = _29_09_2023;
}

public Asheet(Long id, String rollNo, int _29_09_2023) {
	this.id = id;
	this.rollNo = rollNo;
	this._29_09_2023 = _29_09_2023;
}

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

public Float getLongitude() {
	return longitude;
}

public void setLongitude(Float longitude) {
	this.longitude = longitude;
}

public Float getLatitude() {
	return latitude;
}

public void setLatitude(Float latitude) {
	this.latitude = latitude;
}

}
