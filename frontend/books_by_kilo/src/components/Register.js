import { Component } from "react";
import "../App.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
export default class Register extends Component {
  signin = () => {
    console.log("clicked");
    window.location = "/login";
  };
  render() {
    return (
      <>
        <Navbar />
        <h1>Create new account</h1>
        <br />

        <form
          className="col-4 offset-4"
          style={{ border: "1px solid #f0ece1" }}
        >
          <div>
            <input
              className="form-control input"
              type="text"
              placeholder="Name"
              style={{ marginTop: "40px" }}
            />
            <br />
            <input
              className="form-control input"
              type="text"
              placeholder="Phone Number"
            />
            <br />
            <input
              className="form-control input"
              type="text"
              placeholder="Email"
            />
            <br />
          </div>
          <div>
            <button className="btn button2">Send OTP</button>
          </div>
          <br />

          <div>
            <label>Already registered?</label>
            <d>
              <span style={{ color: "red" }} onClick={() => this.signin()}>
                &nbsp; Login here
              </span>
            </d>
          </div>
        </form>
        <Footer />
      </>
    );
  }
}
