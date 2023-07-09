package com.example.endsemProject.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.endsemProject.model.Student;

import jakarta.persistence.EntityManager;

import com.example.endsemProject.model.Asheet;


@Service
public class AAServiceinImpl {

	@Autowired 
	private Servicein servicein;
	@Autowired 
	private Servicein1 servicein1;
	@Autowired
	private EntityManager entityManager;

	
	public List<String> checkAttendace(){
		List<Student> emp = new ArrayList<>();
		 servicein.findAll().forEach(emp::add);
		 List<String> emp1 = new ArrayList<>();
		for( Student s:emp) {
			emp1.add(s.getRollno());
		}
		return emp1;
	}
	
	public void markAttendance(Student s) {
		servicein.save(s);
		
	}
	
	public void markAttendance1(Asheet asheet) {
		servicein1.save(asheet);
	}

	public List<Asheet> getAll() {
		List<Asheet> li= new ArrayList<Asheet>() ;
		servicein1.findAll().forEach(a->{
			li.add(a);
		});
		return li;
	}
	
	@Transactional
    public void addDynamicColumn(String columnName) {
    String alterTableQuery = "ALTER TABLE asheet ADD " + columnName + " VARCHAR(255)";
    entityManager.createNativeQuery(alterTableQuery).executeUpdate();
    }

	public Asheet getByRollNo(String rollno) {
		return servicein1.getByRollNo(rollno);
	 }

    
	
	

}
