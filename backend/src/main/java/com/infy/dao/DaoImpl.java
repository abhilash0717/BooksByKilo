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
		List<Data> booksList = new ArrayList<>();
		Data data = null;
		if (list.size() > 0) {
			for (DataEntity book : list) {
				data = new Data();
				System.out.println(book.getName());
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
