package com.infy.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.stereotype.Repository;

import com.infy.entity.DataEntity;
import com.infy.model.Data;



@Repository
public class DaoImpl implements Dao{
	
	@PersistenceContext
	private EntityManager entityManager;

	@Override
	public List<String> find() {
		String s = "select t.title from DataEntity t";
		Query q = entityManager.createQuery(s);
//		q.setParameter("name", temp);
		List<String> results = q.getResultList();
		
		if(results.size() > 0) {
			System.out.println(results.size());
			return results;
		}
		return null;
		
	}

	
	
}
