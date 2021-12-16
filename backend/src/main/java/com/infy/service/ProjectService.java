package com.infy.service;

import java.util.List;

import com.infy.model.Data;

public interface ProjectService {

	List<Data> getNewBooks();

	List<Data> getPremiumBooks();

	List<Data> getClassicBooks();

	List<Data> getStandardBooks();

	List<Data> getBooks();

	List<Data> getBooksUnder100(String collection, String weight);

}
