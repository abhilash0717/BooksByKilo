package com.infy.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.infy.dao.Dao;
import com.infy.model.Data;

@Service
@Transactional
public class ServiceImpl implements ProjectService {

	@Autowired
	private Dao dao;

	@Override
	public List<Data> getNewBooks() {
		// TODO Auto-generated method stub
		return dao.getNewBooks();
	}

	@Override
	public List<Data> getPremiumBooks() {
		// TODO Auto-generated method stub
		return dao.getPremiumBooks();
	}

	@Override
	public List<Data> getClassicBooks() {
		// TODO Auto-generated method stub
		return dao.getClassicBooks();
	}

	@Override
	public List<Data> getStandardBooks() {
		// TODO Auto-generated method stub
		return dao.getStandardBooks();
	}

}
