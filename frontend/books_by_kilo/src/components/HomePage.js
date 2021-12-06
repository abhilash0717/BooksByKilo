import React from "react";
import { Component } from "react";
import Navbar from "./Navbar";
import "../App.css";
export default class HomePage extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="row">
          <div className="col-md-3" style={{ marginLeft: "30px" }}>
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
                      <button className="btn button2">Explore</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <img src="https://www.booksbykilo.in/media/staticimages/HomepageNewBooks.png" />
                <h5 className="card-title">Card title</h5>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
