import React from "react";
import { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
export default class Login extends Component {
  Register = () => {
    console.log("clicked");
    window.location = "/register";
  };
  render() {
    return (
      <>
        <Navbar />
        <div>
  <h1>Login to your account</h1><br/>
  <input className="form-control input" type="text" placeholder="Phone Number" style={{width:"600px", marginLeft:"350px"}}/><br/>
  <button className="btn button2">Send OTP</button><br/><br/>
  </div>
  <div>
    <label>New customer register here?</label>
    <d><span style={{color:"red"}} onClick={()=>this.Register()} >&nbsp;Register Here</span></d>
  </div>
        <Footer />
      </>
    );
  }
}
