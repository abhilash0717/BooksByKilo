package com.infy.service;

import java.util.List;

import com.infy.model.Data;

public interface ProjectService {

	List<Data> getNewBooks();

	List<Data> getPremiumBooks();

	List<Data> getClassicBooks();

	List<Data> getStandardBooks();

	List<Data> getBooks();

	List<Data> getBooksBasedOnWeight(String collection, String weight);

	List<Data> getBooksBasedOnPrice(String collection, String price);

}
