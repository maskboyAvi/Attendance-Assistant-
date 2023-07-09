package com.example.endsemProject.controller;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.endsemProject.model.Student;
import com.example.endsemProject.service.AAServiceinImpl;
import com.example.endsemProject.model.Asheet;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class MyControllerAA {

@Autowired
private AAServiceinImpl serimpl;


@GetMapping("/check")
public List<String>checkA(){
	return serimpl.checkAttendace();
}

@PostMapping("/mark")
public void markA(@RequestBody Student s) {
	
	
	serimpl.markAttendance(s);

	
}
@PostMapping("/newday")
public void addNewday() {
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
