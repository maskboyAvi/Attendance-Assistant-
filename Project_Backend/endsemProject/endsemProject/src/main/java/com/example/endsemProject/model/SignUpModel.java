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
		private String fullName;
		private String email;
		private String profession;
		private String password;

		public StudentModel(Long id, String fullName, String email, String profession, String password) {
			super();
			this.id = id;
			this.fullName = fullName;
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

		public String getFullName() {
			return fullName;
		}

		public void setFullName(String fullName) {
			this.fullName = fullName;
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
	}

	@Entity
	@Table(name = "TeacherModel")
	public static class TeacherModel extends SignUpModel {
		@Id
		@GeneratedValue(strategy = GenerationType.AUTO)
		private Long id;
		private String fullName;
		private String email;
		private String profession;
		private String password;

		public TeacherModel(Long id, String fullName, String email, String profession, String password) {
			super();
			this.id = id;
			this.fullName = fullName;
			this.email = email;
			this.profession = profession;
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

		public String getFullName() {
			return fullName;
		}

		public void setFullName(String fullName) {
			this.fullName = fullName;
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
	}

}
