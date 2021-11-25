package com.infy.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.infy.model.Data;
import com.infy.service.ProjectService;

@CrossOrigin
@RestController
@RequestMapping(value = "/ApiTesting")
public class Api {
	
	@Autowired
	private ProjectService projectService;
	
	@Autowired
	private Environment environment;
	
	@GetMapping(value = "/find")
	public ResponseEntity<List<String>> validUser() throws Exception{
		try {
			List<String> s = projectService.find();
			ResponseEntity<List<String>> response = new ResponseEntity<List<String>>(s,HttpStatus.CREATED);
			return response;
		}catch(Exception e) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, environment.getProperty(e.getMessage()));
		}
	}
}
