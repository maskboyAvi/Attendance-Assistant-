package com.example.endsemProject.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.endsemProject.model.Student;
import com.example.endsemProject.model.Asheet;


@Service
public class AAServiceinImpl {

	@Autowired 
	private Servicein servicein;
	@Autowired 
	private Servicein1 servicein1;
	
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
	
	public Optional<Asheet> getbyid(LocalDate date) {
		return servicein1.findById(date);
	}

	public List<Asheet> getAll() {
		List<Asheet> li= new ArrayList<Asheet>() ;
		servicein1.findAll().forEach(a->{
			li.add(a);
		});
		return li;
	}
	

}
