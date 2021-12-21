package com.infy.dao;

import java.util.List;

import com.infy.model.Data;

public interface Dao {
	List<Data> getNewBooks();

	List<Data> getPremiumBooks();

	List<Data> getClassicBooks();

	List<Data> getStandardBooks();

	List<Data> getBooks();

	List<Data> getBooksBasedOnWeight(String collection, String weight);

	List<Data> getBooksBasedOnPrice(String collection, String price);

	List<Data> getSearchResult(String SearchResult);

}
