import React from "react";
import { Component } from "react";
import "../App.css"


export default class Navbar extends Component {
  faq=()=> {
    console.log('clicked');
    window.location="/faq"
  }
  signin=()=> {
    console.log('clicked');
    window.location="/login"
  }
  contact=()=> {
    console.log('clicked');
    window.location="/contactUs"
  }
  render() {
    return (
      <>
        <div style={{ backgroundColor: "red" }}>         
          <span style={{ marginLeft: "950px",color: "#d4cac9" }} onClick={()=>this.faq()}> 
          <i className="fa fa-question-circle"
            style={{ color: "#d4cac9" }}
          >FAQ </i>&nbsp;&nbsp;|</span>
          
          <span style={{ marginLeft: "5px", color: "#d4cac9" }}><i
            className="fa fa-phone"
            style={{ marginLeft: "10px", color: "#d4cac9" }}onClick={()=>this.contact()}
          >Contact us </i>&nbsp;&nbsp;|</span>
         
          <span style={{ marginLeft: "5px", color: "#d4cac9" }} onClick={()=>this.signin()}> <i
            className="fa fa-sign-in"
            style={{ marginLeft: "5px", color: "#d4cac9" }}
            > Sign in</i></span>
        </div>

        <nav className="navbar navbar-dark">
          <img src="https://www.booksbykilo.in/media/staticimages/logo_t_5k.png?quality=68" />
          <span className="nav-link" style={{ color: "black" }}>
            New Books
          </span>
          <span className="nav-link" style={{ color: "black" }}>
            Premium Collection
          </span>
          <span className="nav-link" style={{ color: "black" }}>
            Classic Collection
          </span>
          <span className="nav-link" style={{ color: "black" }}>
            Standard Collection
          </span>
          <span className="nav-link" >
            <i
              className="fa fa-shopping-cart"
              style={{ marginLeft: "400px", color: "black" }}
            ></i>
          </span>
          <span className="nav-link">
            <i
              className="fa fa-search"
              style={{ marginLeft: "10px", color: "black" }}
            ></i>
          </span>
        </nav>
      </>
    );
  }
}
