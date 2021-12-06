import React from "react";
import { Component } from "react";
import Navbar from "./Navbar";
import "../App.css";
export default class HomePage extends Component {
  newBooks = () => {
    console.log("clicked");
    window.location = "/newBooks";
  };
  premiumCollection = () => {
    console.log("clicked");
    window.location = "/premiumCollection";
  };
  classicCollection = () => {
    console.log("clicked");
    window.location = "/classicCollection";
  };
  standardCollection = () => {
    console.log("clicked");
    window.location = "/standardCollection";
  };
  render() {
    return (
      <>
        <Navbar />
        <div className="row">
          <div className="col-md-4" style={{ marginLeft: "30px" }}>
            <div className="card">
              <div className="card-body">
                <img src="https://www.booksbykilo.in/media/staticimages/HomepageNewBooks.png" />
                <h4 style={{ marginRight: "140px" }}>New books</h4>
                <div className="row">
                  <div className="col-md-8">
                    <h6>Discount up to 80%</h6>
                    <p>Hot new best-selling releases</p>
                  </div>
                  <div className="col-md-4">
                    <div className="button2">
                      <button className="btn button2" onClick={() => this.newBooks()}>Explore</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <img src="https://www.booksbykilo.in/media/staticimages/HomepagePremium.png" />
                <h5 style={{ marginRight: "140px" }}>Premium Books</h5>
                <div className="row">
                  <div className="col-md-8">
                    <h6>Books at ₹499/kg</h6>
                    <p>Dive into the world of best sellers</p>
                  </div>
                  <div className="col-md-4">
                    <div className="button2">
                      <button className="btn button2" onClick={() => this.premiumCollection()}>Explore</button>
                    </div>
                  </div>
                  </div>
              </div>
            </div>
          </div>
          <div className="col-md-3" style={{ marginLeft: "100px" }}>
            <div className="card">
              <div className="card-body">
                <img src="https://www.booksbykilo.in/media/staticimages/HomepageClassic.jpg" />
                <h5 style={{ marginRight: "140px" }}>Classic Books</h5>
                <div className="row">
                  <div className="col-md-8">
                    <h6>Books at ₹399/kg</h6>
                    <p>Explore books and get hooked to reading</p>
                  </div>
                  <div className="col-md-4">
                    <div className="button2">
                      <button className="btn button2" onClick={() => this.classicCollection()}>Explore</button>
                    </div>
                  </div>
                  </div>
                  </div>
                  </div>
                  </div>
                  

        <div className="col-md-3" style={{marginLeft:"30px", marginTop:"30px"}}>
            <div className="card">
              <div className="card-body">
                <img src="https://www.booksbykilo.in/media/staticimages/HomepageStandard.jpg" />
                <h5 style={{ marginRight: "140px" }}>Standard Books</h5>
                <div className="row">
                  <div className="col-md-8">
                    <h6>Books at ₹299/kg</h6>
                    <p>Rediscover reading with our books</p>
                  </div>
                  <div className="col-md-4">
                    <div className="button2">
                      <button className="btn button2"  onClick={() => this.standardCollection()}>Explore</button>
                    </div>
                  </div>
                  </div>
                  </div>
                  </div>
                  </div>
              </div>
      </>
    );
  }
}
