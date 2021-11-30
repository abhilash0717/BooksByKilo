import React from "react";
import { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
export default class Login extends Component {
  render() {
    return (
      <>
        <Navbar />
        <h1>Login page</h1>
        <Footer />
      </>
    );
  }
}
