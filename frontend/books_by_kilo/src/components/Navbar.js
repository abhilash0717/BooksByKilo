import React from "react";
import { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <div style={{ backgroundColor: "red" }}>
          <i
            className="fa fa-question-circle"
            style={{ marginLeft: "900px", color: "#d4cac9" }}
          ></i>
          <a style={{ marginLeft: "5px", color: "#d4cac9" }}>FAQ |</a>
          <i
            className="fa fa-phone"
            style={{ marginLeft: "10px", color: "#d4cac9" }}
          ></i>
          <a style={{ marginLeft: "5px", color: "#d4cac9" }}>Contact us |</a>
          <i
            className="fa fa-sign-in"
            style={{ marginLeft: "10px", color: "#d4cac9" }}
          ></i>
          <a style={{ marginLeft: "5px", color: "#d4cac9" }}>Sign in</a>
        </div>

        <nav className="navbar navbar-dark">
          <img src="https://www.booksbykilo.in/media/staticimages/logo_t_5k.png?quality=68" />
          <a className="nav-link" style={{ color: "black" }} href="#">
            New Books
          </a>
          <a className="nav-link" style={{ color: "black" }} href="#">
            Premium Collection
          </a>
          <a className="nav-link" style={{ color: "black" }} href="#">
            Classic Collection
          </a>
          <a className="nav-link" style={{ color: "black" }} href="#">
            Standard Collection
          </a>
          <a className="nav-link" href="#">
            <i
              className="fa fa-shopping-cart"
              style={{ marginLeft: "400px", color: "black" }}
            ></i>
          </a>
          <a className="nav-link" href="#">
            <i
              className="fa fa-search"
              style={{ marginLeft: "10px", color: "black" }}
            ></i>
          </a>
        </nav>
      </>
    );
  }
}
