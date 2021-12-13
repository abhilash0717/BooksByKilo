import React from "react";
import { Component } from "react";
import "../App.css";
import "react-pro-sidebar/dist/css/styles.css";

export default class Navbar extends Component {
  state = {
    searchToggle: false,
    cart: false,

    // selected1: false,
    // selected2: false,

    // selected1: true,
    // selected2: true,
  };

  cart = () => {
    window.location = "/cart";
  };
  search = () => {
    this.setState({ searchToggle: !this.state.searchToggle });
  };

  faq = () => {
    window.location = "/faq";
  };
  signin = () => {
    window.location = "/login";
  };
  contact = () => {
    window.location = "/contactUs";
  };
  homePage = () => {
    window.location = "/";
  };
  newBooks = () => {
    console.log("clicked");
    window.location = "/newBooks";
  };
  premiumCollection = (event) => {
    event.preventDefault();
    window.location = "/premiumCollection";
  };
  classicCollection = () => {
    window.location = "/classicCollection";
  };
  standardCollection = () => {
    window.location = "/standardCollection";
  };
  render() {
    return (
      <>
        <div>
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
          <navbar className="navbar navbar navbar-fixed-top">
            <span>
              <img
                onClick={() => this.homePage()}
                src="https://www.booksbykilo.in/media/staticimages/logo_t_5k.png?quality=68"
              />
            </span>
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
                onClick={(event) => this.premiumCollection(event)}
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
                  onClick={() => this.cart()}
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
                  placeholder="Search for book"
                ></input>
              </p>
            </div>
            <div id="go">
              <button
                style={{
                  marginTop: "-19px",
                  backgroundColor: "#f25050",
                  color: "white",
                  fontWeight: "bold",
                }}
                className="btn"
              >
                Go
              </button>
            </div>
          </navbar>
          <br />
        </div>
        <div></div>
      </>
    );
  }
}
