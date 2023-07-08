package com.example.endsemProject.controller;

import java.time.LocalDate;
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
	
	LocalDate date=LocalDate.now();
  Optional< Asheet> optionalAsheet = serimpl.getbyid(date);
  if (optionalAsheet.isPresent()) {
      Asheet asheet = optionalAsheet.get();
      if(s.getRollno().equals("LCS2022001")) {
    	  asheet.setLCS2022001(1);
      }else  if(s.getRollno().equals("LCS2022003")){
    	  asheet.setLCS2022003(1);
      }else  if(s.getRollno().equals("LCS2022002")) {
    	  asheet.setLCS2022002(1);
      }else  if(s.getRollno().equals("LCS2022004")) {
    	  asheet.setLCS2022004(1);
      }else  if(s.getRollno().equals("LCS2022005")) {
    	  asheet.setLCS2022005(1);
      }else  if(s.getRollno().equals("LCS2022006")) {
    	  asheet.setLCS2022006(1);
      }else  if(s.getRollno().equals("LCS2022007")) {
    	  asheet.setLCS2022007(1);
      }else  if(s.getRollno().equals("LCS2022008")) {
    	  asheet.setLCS2022008(1);
      }else  if(s.getRollno().equals("LCS2022009")) {
    	  asheet.setLCS2022009(1);
      }else  if(s.getRollno().equals("LCS2022010")) {
    	  asheet.setLCS2022010(1);
      }
  	serimpl.markAttendance1(asheet);
      System.out.println(asheet);
  } else {

  }
	serimpl.markAttendance(s);

	
}
@PostMapping("/newday")
public void addNewday() {
	  LocalDate date1=LocalDate.now();
	  Asheet as1 = new Asheet();
	  as1.setDate(date1);
	  serimpl.markAttendance1(as1);
}

@GetMapping("/table")
public List<Asheet> gettable()
{
	return serimpl.getAll();
}


}
