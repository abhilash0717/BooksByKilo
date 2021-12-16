package com.infy.dao;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.stereotype.Repository;

import com.infy.entity.DataEntity;
import com.infy.model.Data;

@Repository
public class DaoImpl implements Dao {

	// Gets the books from DB and to return to Front end
	public List<Data> gettingBooksFromDb(List<DataEntity> list) {
		ArrayList<Data> booksList = new ArrayList<>();
		if (list.size() > 0) {
			for (DataEntity book : list) {
				Data data = new Data();
				data.setId(book.getId());
				data.setName(book.getName());
				data.setAuthor(book.getAuthor());
				data.setCategory(book.getCategory());
				data.setCollection(book.getCollection());
				data.setPrice(book.getPrice());
				data.setThumbnail(book.getThumbnail());
				data.setWeight(book.getWeight());

				booksList.add(data);
			}
		}
		return booksList;
	}

	@PersistenceContext
	private EntityManager entityManager;

	// For returning the books from DB, only those books having the collection as
	// "New"
	@Override
	public List<Data> getNewBooks() {
		String s = "select b from DataEntity b where b.collection =: tag";
		Query q = entityManager.createQuery(s);
		q.setParameter("tag", "New");
		List<DataEntity> list = q.getResultList();
		return gettingBooksFromDb(list);

	}

	// For returning the books from DB, only those books having the collection as
	// "Premium"
	@Override
	public List<Data> getPremiumBooks() {
		String s = "select b from DataEntity b where b.collection=: tag";
		Query q = entityManager.createQuery(s);
		q.setParameter("tag", "Premium");
		List<DataEntity> list = q.getResultList();
		return gettingBooksFromDb(list);
	}

	// For returning the books from DB, only those books having the collection as
	// "Classic"
	@Override
	public List<Data> getClassicBooks() {
		String s = "select b from DataEntity b where b.collection=: tag";
		Query q = entityManager.createQuery(s);
		q.setParameter("tag", "Classic");
		List<DataEntity> list = q.getResultList();
		return gettingBooksFromDb(list);
	}

	// For returning the books from DB, only those books having the collection as
	// "Standard"
	@Override
	public List<Data> getStandardBooks() {
		String s = "select b from DataEntity b where b.collection=: tag";
		Query q = entityManager.createQuery(s);
		q.setParameter("tag", "Standard");
		List<DataEntity> list = q.getResultList();
		return gettingBooksFromDb(list);
	}

	// For returning all the books in the DB when we hit on the clear button in
	// Filter component
	@Override
	public List<Data> getBooks() {
		String s = "select b from DataEntity b";
		Query q = entityManager.createQuery(s);
		List<DataEntity> list = q.getResultList();
		return gettingBooksFromDb(list);
	}

	@Override
	public List<Data> getBooksUnder100(String collection, String weight) {
		// TODO Auto-generated method stub
		int value = 0;
		if (weight.equalsIgnoreCase("hundred")) {
			value = 100;
		} else {
			value = 0;
		}
		String s = "select b from DataEntity b where b.collection=: tag and b.weight<=100";
		Query q = entityManager.createQuery(s);
		q.setParameter("tag", collection);
		List<DataEntity> list = q.getResultList();
		List<Data> booksList = new ArrayList<>();
		if (list.size() > 0) {
			for (DataEntity book : list) {
				Data data = new Data();
				data.setId(book.getId());
				data.setName(book.getName());
				data.setAuthor(book.getAuthor());
				data.setCategory(book.getCategory());
				data.setCollection(book.getCollection());
				data.setPrice(book.getPrice());
				data.setThumbnail(book.getThumbnail());
				data.setWeight(book.getWeight());

				booksList.add(data);
			}
		}
		return booksList;
	}

}
