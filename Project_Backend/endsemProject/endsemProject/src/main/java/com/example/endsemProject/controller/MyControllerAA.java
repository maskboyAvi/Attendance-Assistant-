package com.example.endsemProject.controller;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.endsemProject.model.Student;
import com.example.endsemProject.model.SignUpModel.StudentModel;
import com.example.endsemProject.model.SignUpModel.TeacherModel;
import com.example.endsemProject.repository.StudentRepo;
import com.example.endsemProject.repository.TeacherRepo;
import com.example.endsemProject.service.AAServiceinImpl;
import com.example.endsemProject.util.jwtUtil;
import com.example.endsemProject.model.Asheet;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class MyControllerAA {

@Autowired
private AAServiceinImpl serimpl;

 @Autowired
    private StudentRepo studentRepo;
 
 @Autowired
    private TeacherRepo teacherRepo;
@Autowired 
 private AAServiceinImpl aaServiceinImpl;

@Autowired
private jwtUtil jwtUtil;

@GetMapping("/check")
public List<String>checkA(){
	return serimpl.checkAttendace();
}

@PostMapping("/mark")
public void markA(@RequestBody Student s) {
	 
	StudentModel sc=studentRepo.findByRollNo(s.getRollno());
    TeacherModel teach=teacherRepo.findByRollNo(s.getEmail());
    sc.setCode(s.getCode());
    serimpl.markAttendance(s);
   if((sc.getCode()).equalsIgnoreCase(teach.getCode())){
     Asheet as= serimpl.getByRollNo(s.getRollno());
     as.set_10_07_2023(1);
     aaServiceinImpl.markAttendance1(as);
     System.out.println(as.get_10_07_2023()); 
   }else{
    System.out.println("aks");
   }

	

	
}
@PostMapping("/addcode")
public void addNewday(@RequestBody  Student s ) {
    
    TeacherModel teach=teacherRepo.findByRollNo(s.getRollno());
    
    teach.setCode(s.getCode());
    
     serimpl.markAttendance(s);
	   LocalDate currentDate = LocalDate.now();

     // Create a formatter for the desired output format
     DateTimeFormatter outputFormatter = DateTimeFormatter.ofPattern("dd_MM_yyyy");
      
     // Format the current date using the output formatter
     String formattedDate = currentDate.format(outputFormatter);
    formattedDate=" "+formattedDate;
    serimpl.addDynamicColumn(formattedDate);
    
}

@GetMapping("/table")
public List<Asheet> gettable()
{
	return serimpl.getAll();
}


}