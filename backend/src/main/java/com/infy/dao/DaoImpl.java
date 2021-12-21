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
	public List<Data> getBooksBasedOnWeight(String collection, String weight) {
		List<DataEntity> dummy = null;
		// TODO Auto-generated method stub
		if (weight.equalsIgnoreCase("hundred")) {
			String s = "select b from DataEntity b where b.collection=: tag and b.weight<100";
			Query q = entityManager.createQuery(s);
			q.setParameter("tag", collection);
			List<DataEntity> list = q.getResultList();
			return gettingBooksFromDb(list);
		} else if (weight.equalsIgnoreCase("100TO200")) {
			String s = "select b from DataEntity b where b.collection=: tag and b.weight between 100 and 200";
			Query q = entityManager.createQuery(s);
			q.setParameter("tag", collection);
			List<DataEntity> list = q.getResultList();
			return gettingBooksFromDb(list);
		} else if (weight.equalsIgnoreCase("201TO500")) {
			String s = "select b from DataEntity b where b.collection=: tag and b.weight between 201 and 500";
			Query q = entityManager.createQuery(s);
			q.setParameter("tag", collection);
			List<DataEntity> list = q.getResultList();
			return gettingBooksFromDb(list);
		} else if (weight.equalsIgnoreCase("Over500")) {
			String s = "select b from DataEntity b where b.collection=: tag and b.weight > 500";
			Query q = entityManager.createQuery(s);
			q.setParameter("tag", collection);
			List<DataEntity> list = q.getResultList();
			return gettingBooksFromDb(list);
		}

		return gettingBooksFromDb(dummy);
	}

	@Override
	public List<Data> getBooksBasedOnPrice(String collection, String price) {
		List<DataEntity> dummy = null;
		// TODO Auto-generated method stub
		if (price.equalsIgnoreCase("hundred")) {
			String s = "select b from DataEntity b where b.collection=: tag and b.price<100";
			Query q = entityManager.createQuery(s);
			q.setParameter("tag", collection);
			List<DataEntity> list = q.getResultList();
			return gettingBooksFromDb(list);
		} else if (price.equalsIgnoreCase("100TO200")) {
			String s = "select b from DataEntity b where b.collection=: tag and b.price between 100 and 200";
			Query q = entityManager.createQuery(s);
			q.setParameter("tag", collection);
			List<DataEntity> list = q.getResultList();
			return gettingBooksFromDb(list);
		} else if (price.equalsIgnoreCase("201TO500")) {
			String s = "select b from DataEntity b where b.collection=: tag and b.price between 201 and 500";
			Query q = entityManager.createQuery(s);
			q.setParameter("tag", collection);
			List<DataEntity> list = q.getResultList();
			return gettingBooksFromDb(list);
		} else if (price.equalsIgnoreCase("Over500")) {
			String s = "select b from DataEntity b where b.collection=: tag and b.price > 500";
			Query q = entityManager.createQuery(s);
			q.setParameter("tag", collection);
			List<DataEntity> list = q.getResultList();
			return gettingBooksFromDb(list);
		}

		return gettingBooksFromDb(dummy);
	}

	@Override
	public List<Data> getSearchResult(String SearchResult) {
		String word = SearchResult;
		System.out.println(word);
		String s = "select b from DataEntity b where b.name LIKE :tag ";
		Query q = entityManager.createQuery(s);
		q.setParameter("tag", '%' + word + '%');
		List<DataEntity> list = q.getResultList();
		return gettingBooksFromDb(list);
	}

}
