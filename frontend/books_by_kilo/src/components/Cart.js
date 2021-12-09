import React, { Component } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "../App.css";

export default class Cart extends Component {
  home = () => {
    window.location = "/";
  };

  render() {
    return (
      <>
        <Navbar />
        <div className="row">
          <div className="col-md-6">
            <h1>Shopping Cart</h1>
          </div>
          <div className="col-md-6">
            <input
              style={{ width: "160px", marginLeft: "150px" }}
              type="text"
              className="form-control input"
              placeHolder="pincode"
            ></input>{" "}
            <div id="go1">
              <button className="btn button4"> CHECK AVAILABILITY</button>
            </div>
          </div>
        </div>
        <br />
        <div className="container">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>Books</th>
                <th>Price</th>
                <th>MRP</th>
                <th>Weight</th>
                <th>Quantity</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              <td>dfsdsfs</td>
              <td>dfsdsfs</td>
              <td>dfsdsfs</td>
              <td>dfsdsfs</td>
              <td>dfsdsfs</td>
              <td>dfsdsfs</td>
            </tbody>
          </table>
          <br />
        </div>
        <br />
        <hr />
        <br />
        <hr />
        <br />
        <div className="row">
          <div className="col-md-7"></div>
          <div className="col-md-5">
            <div>
              <button
                id="continue"
                onClick={() => this.home()}
                className="btn button3"
              >
                CONTINUE SHOPPING
              </button>{" "}
              &nbsp;
              <button
                id="checkout"
                onClick={() => this.home()}
                className="btn button3"
              >
                CHECKOUT
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
