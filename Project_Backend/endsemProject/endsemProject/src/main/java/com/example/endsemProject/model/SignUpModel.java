package com.example.endsemProject.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

public class SignUpModel {

	@Entity
	@Table(name = "StudentModel")
	public static class StudentModel extends SignUpModel {
		@Id
		@GeneratedValue(strategy = GenerationType.AUTO)
		private Long id;
		private String name;
		private String rollNo;
		private String email;
		private String profession;
		private String code;
		private String location;
		private String password;

		public StudentModel(Long id, String name, String email,String rollNo, String profession, String password, String code, String location) {
			super();
			this.id = id;
			this.name = name;
			this.rollNo=rollNo;
			this.location=location;
			this.code=code;
			this.email = email;
			this.profession = profession;
			this.password = password;
		}

		public StudentModel() {
			super();
			// TODO Auto-generated constructor stub
		}

		public Long getId() {
			return id;
		}

		public void setId(Long id) {
			this.id = id;
		}

		public String getname() {
			return name;
		}

		public void setname(String name) {
			this.name = name;
		}
		public String getRollNo() {
			return rollNo;
		}

		public void setRollNo(String rollNo) {
			this.rollNo = rollNo;
		}

		public String getEmail() {
			return email;
		}

		public void setEmail(String email) {
			this.email = email;
		}

		public String getProfession() {
			return profession;
		}

		public void setProfession(String profession) {
			this.profession = profession;
		}

		public String getPassword() {
			return password;
		}

		public void setPassword(String password) {
			this.password = password;
		}
		public String getCode() {
			return code;
		}
		public void setCode(String code) {
			this.code = code;
		}
		public String getLocation() {
			return location;
		}
		public void setLocation(String location) {
			this.location = location;
		}
	}

	@Entity
	@Table(name = "TeacherModel")
	public static class TeacherModel extends SignUpModel {
		@Id
		@GeneratedValue(strategy = GenerationType.AUTO)
		private Long id;
		private String name;
		private String rollNo;
		private String email;
		private String profession;
		private String code;
		private String location;
		private String password;

		public TeacherModel(Long id, String name,String rollNo,String location,String code, String email, String profession, String password) {
			super();
			this.id = id;
			this.name = name;
			this.email = email;
			this.profession = profession;
			this.rollNo=rollNo;
			this.location=location;
			this.code=code;
			this.password = password;
		}

		public TeacherModel() {
			super();
			// TODO Auto-generated constructor stub
		}

		public Long getId() {
			return id;
		}

		public void setId(Long id) {
			this.id = id;
		}

		public String getname() {
			return name;
		}

		public void setname(String name) {
			this.name = name;
		}
		public String getRollNo() {
			return rollNo;
		}

		public void setRollNo(String rollNo) {
			this.rollNo = rollNo;
		}

		public String getEmail() {
			return email;
		}

		public void setEmail(String email) {
			this.email = email;
		}

		public String getProfession() {
			return profession;
		}

		public void setProfession(String profession) {
			this.profession = profession;
		}

		public String getPassword() {
			return password;
		}

		public void setPassword(String password) {
			this.password = password;
		}
		public String getCode() {
			return code;
		}
		public void setCode(String code) {
			this.code = code;
		}
		public String getLocation() {
			return location;
		}
		public void setLocation(String location) {
			this.location = location;
		}
	}

}
