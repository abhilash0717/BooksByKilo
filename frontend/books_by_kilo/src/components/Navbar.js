import React from "react";
import { Component } from "react";
import "../App.css";

export default class Navbar extends Component {
  state = {
    searchToggle: false,
  };

  search = () => {
    console.log("clicked");
    this.setState({ searchToggle: !this.state.searchToggle });
  };

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
              style={{ color: "black", marginLeft: "-70px" }}
              onClick={() => this.newBooks()}
            >
              New Books
            </span>
          </a>
          <a>
            {" "}
            <span
              className="nav-link"
              style={{ color: "black", marginLeft: "-130px" }}
              onClick={() => this.premiumCollection()}
            >
              Premium Collection
            </span>
          </a>
          <a>
            <span
              className="nav-link"
              style={{ color: "black", marginLeft: "-130px" }}
              onClick={() => this.classicCollection()}
            >
              Classic Collection
            </span>
          </a>
          <a>
            <span
              className="nav-link"
              style={{ color: "black", marginLeft: "-130px" }}
              onClick={() => this.standardCollection()}
            >
              Standard Collection
            </span>
          </a>
          <p id="cart">
            <p className="nav-link">
              <i
                className="fa fa-shopping-cart"
                style={{ marginRight: "-250px", color: "black" }}
              >
                {" "}
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
          </p>{" "}
          <div id="search">
            <p className="nav-link">
              <input
                className="form-control input"
                style={{ width: "160px", marginRight: "-140px" }}
                type="text"
              ></input>
            </p>
          </div>
          <button
            style={{
              marginTop: "-19px",
              backgroundColor: "#de1013",
              color: "white",
              fontWeight: "bold",
            }}
            className="btn"
          >
            Go
          </button>
        </nav>
      </>
    );
  }
}
