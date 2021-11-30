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
        <nav className="navbar navbar-light">
          <a className="nav-link" href="#">
            Link
          </a>
          <a className="nav-text" href="#">
            HH
          </a>
        </nav>
      </>
    );
  }
}
