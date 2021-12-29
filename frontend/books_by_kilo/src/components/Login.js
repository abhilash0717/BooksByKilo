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
          <h1>Login to your account</h1>
          <br />
          <form
            className="col-4 offset-4"
            style={{ border: "1px solid #f0ece1" }}
          >
            <input
              className="form-control input"
              type="text"
              placeholder="Username"
              style={{ marginTop: "40px" }}
            />
            <br />
            <input
              className="form-control input"
              type="password"
              placeholder="Password"
            />
            <br />
            <button className="btn button2">Login</button>
            <br />
            <br />

            <div>
              <label>New customer register here?</label>
              <d>
                <span style={{ color: "red" }} onClick={() => this.Register()}>
                  &nbsp;Register Here
                </span>
              </d>
            </div>
            <br />
          </form>
        </div>
        <Footer />
      </>
    );
  }
}
