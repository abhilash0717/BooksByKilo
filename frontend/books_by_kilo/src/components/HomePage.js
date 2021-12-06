import React from "react";
import { Component } from "react";
import Navbar from "./Navbar";
import "../App.css"
export default class HomePage extends Component {
  render() {
    return (
      <>
      <Navbar/>
        <h1>Home Page</h1>
        <div className="container">
    <div className="card col-md-3">
      <div className="card-body">
        <img src="https://www.booksbykilo.in/media/staticimages/HomepageNewBooks.png"/>
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn">Explore</a>
    </div>
    <div className="card">
      <div className="card-body">
        <img src="https://www.booksbykilo.in/media/staticimages/HomepageNewBooks.png"/>
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn">Go somewhere</a>
    </div></div>
  </div>
</div></>
  );
}
}