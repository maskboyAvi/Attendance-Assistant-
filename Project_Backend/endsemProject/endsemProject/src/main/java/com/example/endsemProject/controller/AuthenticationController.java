    // package com.example.endsemProject.controller;

// import java.io.IOException;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.security.authentication.AuthenticationManager;
// import org.springframework.security.authentication.BadCredentialsException;
// import org.springframework.security.authentication.DisabledException;
// import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
// import org.springframework.security.core.userdetails.UserDetails;
// import org.springframework.security.core.userdetails.UsernameNotFoundException;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RestController;

// import com.example.endsemProject.dto.AuthenticationDTO;
// import com.example.endsemProject.dto.AuthenticationResponse;
// import com.example.endsemProject.service.jwt.UserDetailsServiceImpl;
// import com.example.endsemProject.util.jwtUtil;

// import jakarta.servlet.http.HttpServletResponse;

// @RestController
// public class AuthenticationController {

//     @Autowired
//     private jwtUtil jwtUt;

//     @Autowired
//     private AuthenticationManager authenticationManager;

//     @Autowired
//     private UserDetailsServiceImpl userDetailsService;

//     @PostMapping("/authenticate")
//     public AuthenticationResponse createAuthenticationToken(@RequestBody AuthenticationDTO authenticationDTO, HttpServletResponse response) throws BadCredentialsException, DisabledException, UsernameNotFoundException, IOException {
//         try {
//             System.out.println("checking controller\n\n\n\n");
//             System.out.println(authenticationDTO.getEmail() + " " + authenticationDTO.getPassword());
//             authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authenticationDTO.getEmail(), authenticationDTO.getPassword()));
//         } catch (BadCredentialsException e) {
//             throw new BadCredentialsException("Incorrect username or password!");
//         } catch (DisabledException disabledException) {
//             response.sendError(HttpServletResponse.SC_NOT_FOUND, "User is not activated");
//             return null;
//         }

//         final UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationDTO.getEmail());

//         final String jwt = jwtUt.generateToken(userDetails.getUsername());

//         return new AuthenticationResponse(jwt);

//     }

// }


package com.example.endsemProject.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.endsemProject.dto.AuthenticationDTO;
import com.example.endsemProject.dto.AuthenticationResponse;
import com.example.endsemProject.model.SignUpModel.*;
import com.example.endsemProject.repository.*;
import com.example.endsemProject.util.jwtUtil;

import jakarta.servlet.http.HttpServletResponse;

@RestController
public class AuthenticationController {

    @Autowired
    private jwtUtil jwtUtil;

    @Autowired
    private StudentRepo studentRepo;

    @Autowired
    private TeacherRepo teacherRepo;

    @PostMapping("/authenticate")
    public AuthenticationResponse createAuthenticationToken(@RequestBody AuthenticationDTO authenticationDTO, HttpServletResponse response) throws BadCredentialsException, DisabledException, UsernameNotFoundException, IOException {
           try {
            System.out.println("Checking controller\n\n\n\n");
            System.out.println(authenticationDTO.getEmail() + " " + authenticationDTO.getPassword());
            StudentModel userOptional = studentRepo.findFirstByEmail(authenticationDTO.getEmail());
            if (userOptional != null) {
                if (userOptional.getPassword().equals(authenticationDTO.getPassword())) {
                    // Password matches, generate JWT token
                    final String jwt = jwtUtil.generateToken(userOptional.getEmail());
                    return new AuthenticationResponse(jwt);
                } else {
                    throw new BadCredentialsException("Incorrect password!");
                }
            } else {
                throw new UsernameNotFoundException("StudentModel not found!");
            }
        } catch (BadCredentialsException e) {
            throw new BadCredentialsException("Incorrect username or password!");
        } catch (DisabledException disabledException) {
            response.sendError(HttpServletResponse.SC_NOT_FOUND, "StudentModel is not activated");
            return null;
        }
    }

    @PostMapping("/authenticateTeacher")
    public AuthenticationResponse createAuthenticationTokenTeacher(@RequestBody AuthenticationDTO authenticationDTO, HttpServletResponse response) throws BadCredentialsException, DisabledException, UsernameNotFoundException, IOException {
        try {
            System.out.println("Checking controller\n\n\n\n");
            System.out.println(authenticationDTO.getEmail() + " " + authenticationDTO.getPassword());
            
            TeacherModel userOptional = teacherRepo.findFirstByEmail(authenticationDTO.getEmail());
            if (userOptional != null) {
                if (userOptional.getPassword().equals(authenticationDTO.getPassword())) {
                    // Password matches, generate JWT token
                    final String jwt = jwtUtil.generateToken(userOptional.getEmail());
                    return new AuthenticationResponse(jwt);
                } else {
                    throw new BadCredentialsException("Incorrect password!");
                }
            } else {
                throw new UsernameNotFoundException("User not found!");
            }
        } catch (BadCredentialsException e) {
            throw new BadCredentialsException("Incorrect username or password!");
        } catch (DisabledException disabledException) {
            response.sendError(HttpServletResponse.SC_NOT_FOUND, "User is not activated");
            return null;
        }
    }
}
