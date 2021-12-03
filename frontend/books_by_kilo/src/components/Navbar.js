import React from "react";
import { Component } from "react";
import "../App.css";

export default class Navbar extends Component {
  faq = () => {
    console.log("clicked");
    window.location = "/faq";
  };
  signin = () => {
    console.log("clicked");
    window.location = "/login";
  };
  contact = () => {
    console.log("clicked");
    window.location = "/contactUs";
  };
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
        <div style={{ backgroundColor: "#de1013" }}>
          <span
            style={{ marginLeft: "950px", color: "#d4cac9" }}
            onClick={() => this.faq()}
          >
            <i className="fa fa-question-circle" style={{ color: "#d4cac9" }}>
              FAQ{" "}
            </i>
            &nbsp;&nbsp;|
          </span>

          <span style={{ marginLeft: "5px", color: "#d4cac9" }}>
            <i
              className="fa fa-phone"
              style={{ marginLeft: "10px", color: "#d4cac9" }}
              onClick={() => this.contact()}
            >
              Contact us{" "}
            </i>
            &nbsp;&nbsp;|
          </span>

          <span
            style={{ marginLeft: "5px", color: "#d4cac9" }}
            onClick={() => this.signin()}
          >
            {" "}
            <i
              className="fa fa-sign-in"
              style={{ marginLeft: "5px", color: "#d4cac9" }}
            >
              {" "}
              Sign in
            </i>
          </span>
        </div>

        <nav className="navbar navbar-dark">
          <img src="https://www.booksbykilo.in/media/staticimages/logo_t_5k.png?quality=68" />
          <a>
            {" "}
            <span
              className="nav-link"
              style={{ color: "black" }}
              onClick={() => this.newBooks()}
            >
              New Books
            </span>
          </a>
          <a>
            {" "}
            <span
              className="nav-link"
              style={{ color: "black" }}
              onClick={() => this.premiumCollection()}
            >
              Premium Collection
            </span>
          </a>
          <a>
            <span
              className="nav-link"
              style={{ color: "black" }}
              onClick={() => this.classicCollection()}
            >
              Classic Collection
            </span>
          </a>
          <a>
            <span
              className="nav-link"
              style={{ color: "black" }}
              onClick={() => this.standardCollection()}
            >
              Standard Collection
            </span>
          </a>
          <p id="cart">
            <p className="nav-link">
              <i
                className="fa fa-shopping-cart"
                style={{ marginLeft: "400px", color: "black" }}
              >
                <p
                  style={{
                    display: "block",
                    marginTop: "-28px",
                    fontSize: "13px",
                    backgroundColor: "#de1013",
                    borderRadius: "2px",
                    color: "white",
                  }}
                >
                  30
                </p>
              </i>
            </p>
          </p>
          <a>
            {" "}
            <span className="nav-link">
              <i
                className="fa fa-search"
                style={{ marginLeft: "10px", color: "black" }}
              ></i>
            </span>
          </a>
        </nav>
      </>
    );
  }
}
