package com.infy.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.infy.model.Data;
import com.infy.service.ProjectService;

@CrossOrigin
@RestController
@RequestMapping(value = "/BooksByKilo")
public class Api {

	@Autowired
	private ProjectService projectService;

	@Autowired
	private Environment environment;

	@GetMapping(value = "/NewBooks")
	public ResponseEntity<List<Data>> getNewBooks() throws Exception {
		try {
			List<Data> books = projectService.getNewBooks();
			ResponseEntity<List<Data>> response = new ResponseEntity<List<Data>>(books, HttpStatus.CREATED);
			return response;
		} catch (Exception e) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, environment.getProperty(e.getMessage()));
		}
	}

	@GetMapping(value = "/PremiumBooks")
	public ResponseEntity<List<Data>> getPremiumBooks() throws Exception {
		try {
			List<Data> books = projectService.getPremiumBooks();
			ResponseEntity<List<Data>> response = new ResponseEntity<List<Data>>(books, HttpStatus.CREATED);
			return response;
		} catch (Exception e) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, environment.getProperty(e.getMessage()));
		}
	}

	@GetMapping(value = "/ClassicBooks")
	public ResponseEntity<List<Data>> getClassicBooks() throws Exception {
		try {
			List<Data> books = projectService.getClassicBooks();
			ResponseEntity<List<Data>> response = new ResponseEntity<List<Data>>(books, HttpStatus.CREATED);
			return response;
		} catch (Exception e) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, environment.getProperty(e.getMessage()));
		}
	}

	@GetMapping(value = "/StandardBooks")
	public ResponseEntity<List<Data>> getStandardBooks() throws Exception {
		try {
			List<Data> books = projectService.getStandardBooks();
			ResponseEntity<List<Data>> response = new ResponseEntity<List<Data>>(books, HttpStatus.CREATED);
			return response;
		} catch (Exception e) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, environment.getProperty(e.getMessage()));
		}
	}

	@GetMapping(value = "/Books")
	public ResponseEntity<List<Data>> getBooks() throws Exception {
		try {
			List<Data> books = projectService.getBooks();
			ResponseEntity<List<Data>> response = new ResponseEntity<List<Data>>(books, HttpStatus.CREATED);
			return response;
		} catch (Exception e) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, environment.getProperty(e.getMessage()));
		}
	}

	@GetMapping(value = "/Filter/weight/{collection}/{weight}")
	public ResponseEntity<List<Data>> getBooksBasedOnWeight(@PathVariable String collection,
			@PathVariable String weight) throws Exception {
		try {
			List<Data> books = projectService.getBooksBasedOnWeight(collection, weight);
			ResponseEntity<List<Data>> response = new ResponseEntity<List<Data>>(books, HttpStatus.CREATED);
			return response;
		} catch (Exception e) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, environment.getProperty(e.getMessage()));
		}
	}

	@GetMapping(value = "/Filter/price/{collection}/{price}")
	public ResponseEntity<List<Data>> getBooksBasedOnPrice(@PathVariable String collection, @PathVariable String price)
			throws Exception {
		try {
			List<Data> books = projectService.getBooksBasedOnPrice(collection, price);
			ResponseEntity<List<Data>> response = new ResponseEntity<List<Data>>(books, HttpStatus.CREATED);
			return response;
		} catch (Exception e) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, environment.getProperty(e.getMessage()));
		}
	}

	@GetMapping(value = "/{SearchResult}")
	public ResponseEntity<List<Data>> getSearchResult(@PathVariable String SearchResult) throws Exception {
		try {
			List<Data> books = projectService.getSearchResult(SearchResult);
			ResponseEntity<List<Data>> response = new ResponseEntity<List<Data>>(books, HttpStatus.CREATED);
			return response;
		} catch (Exception e) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, environment.getProperty(e.getMessage()));
		}
	}

}
