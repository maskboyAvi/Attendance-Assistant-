package com.example.endsemProject.controller;

import java.io.IOException;
import org.springframework.http.MediaType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import com.example.endsemProject.model.File;
import com.example.endsemProject.service.Fileserviceimpl;
import com.example.endsemProject.util.Utility;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;


@RestController
@RequestMapping("/fileresource")
@CrossOrigin(origins="http://localhost:3000")
public class FileController {
	@Autowired 
	private Fileserviceimpl fileserviceimpl ;
	
	
	   @GetMapping("/home")
	    public String home(){
	        return "Ready to Go!!";
	    }
	  @PostMapping("/upload/{email}")
	  
	public  String upload(@RequestParam("file") MultipartFile file,@PathVariable String email) throws IOException{
		     try {  File f = new File();
		       f.setFileName(file.getOriginalFilename());
		       f.setFileType(file.getContentType());
		       f.setFileData(Utility.compressFile(file.getBytes()));
		       f.setemail(email);
		        this.fileserviceimpl.uploadFile(f);
		    		 return "sucessful";}
		     catch (Exception e) {
		    	 e.printStackTrace();
		    	 return "Unsucessful";
		     }
}
	  @GetMapping("/download1/{id}")
	  public ResponseEntity<Resource> getFile(@PathVariable int id) {
		    File file = fileserviceimpl.downloadFile(id).orElse(null);
		    if (file == null) {
		        // Handle file not found case
		        return ResponseEntity.notFound().build();
		    }

		    // Convert the file data to a ByteArrayResource
		    ByteArrayResource resource = new ByteArrayResource(Utility.decompressFile(file.getFileData()));

		    // Set the appropriate Content-Type header
		    HttpHeaders headers = new HttpHeaders();
		    headers.setContentType(MediaType.IMAGE_JPEG);

		    // Return the file as a response with the appropriate headers
		    return ResponseEntity.ok()
		            .headers(headers)
		            .body(resource);
		}
	  
	  @GetMapping("/download/{email}")
	  public  ResponseEntity<Resource> getFilebyemail(@PathVariable String email) {
		    File file = fileserviceimpl.downloadFile(email).orElse(null);
		    if (file == null) {
		        // Handle file not found case
		        return ResponseEntity.notFound().build();
		    }

		    // Convert the file data to a ByteArrayResource
		    ByteArrayResource resource = new ByteArrayResource(Utility.decompressFile(file.getFileData()));

		    // Set the appropriate Content-Type header
		    HttpHeaders headers = new HttpHeaders();
		    headers.setContentType(MediaType.IMAGE_JPEG);

		    // Return the file as a response with the appropriate headers
		    return ResponseEntity.ok()
		            .headers(headers)
		            .body(resource);
		}

	  @PutMapping("/upload/{email}")
	  public String updateemail(@PathVariable String email, @RequestParam("file") MultipartFile file) {
	      try {
	          File f = fileserviceimpl.downloadFile(email).orElse(null); // Assuming you have a method to retrieve the file using the photo ID
	          
	          if (f != null) {
	              f.setemail(email);
	              f.setFileData(Utility.compressFile(file.getBytes()));
	              fileserviceimpl.uploadFile(f);
	              return "Successful";
	          } else {
	              return "File not found";
	          }
	      } catch (Exception e) {
	          e.printStackTrace();
	          return "Unsuccessful";
	      }
	  }
}
