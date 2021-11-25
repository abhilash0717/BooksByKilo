package com.infy.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "mytable")
public class DataEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private int bookID;              
	private String title;             
	private String authors;          
	private String average_rating;    
	private String isbn;               
	private String isbn13;            
	private String language_code;      
	private String num_pages;         
	private int ratings_count;      
	private int text_reviews_count; 
	private String publication_date;   
	private String publisher;          
	private String FIELD13;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getBookID() {
		return bookID;
	}
	public void setBookID(int bookID) {
		this.bookID = bookID;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getAuthors() {
		return authors;
	}
	public void setAuthors(String authors) {
		this.authors = authors;
	}
	public String getAverage_rating() {
		return average_rating;
	}
	public void setAverage_rating(String average_rating) {
		this.average_rating = average_rating;
	}
	public String getIsbn() {
		return isbn;
	}
	public void setIsbn(String isbn) {
		this.isbn = isbn;
	}
	public String getIsbn13() {
		return isbn13;
	}
	public void setIsbn13(String isbn13) {
		this.isbn13 = isbn13;
	}
	public String getLanguage_code() {
		return language_code;
	}
	public void setLanguage_code(String language_code) {
		this.language_code = language_code;
	}
	public String getNum_pages() {
		return num_pages;
	}
	public void setNum_pages(String num_pages) {
		this.num_pages = num_pages;
	}
	public int getRatings_count() {
		return ratings_count;
	}
	public void setRatings_count(int ratings_count) {
		this.ratings_count = ratings_count;
	}
	public int getText_reviews_count() {
		return text_reviews_count;
	}
	public void setText_reviews_count(int text_reviews_count) {
		this.text_reviews_count = text_reviews_count;
	}
	public String getPublication_date() {
		return publication_date;
	}
	public void setPublication_date(String publication_date) {
		this.publication_date = publication_date;
	}
	public String getPublisher() {
		return publisher;
	}
	public void setPublisher(String publisher) {
		this.publisher = publisher;
	}
	public String getFIELD13() {
		return FIELD13;
	}
	public void setFIELD13(String fIELD13) {
		FIELD13 = fIELD13;
	}      
}
