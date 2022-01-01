import axios from "axios";
import { Component } from "react";
import "../App.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

const url = "http://localhost:4001/BooksByKilo/Register"
export default class Register extends Component {
  state = {
    Username: "",
    Password: "",
    successMessage  : ""
  };
  signin = () => {
    console.log("clicked");
    window.location = "/login";
  };

  Register = () => {
    axios.post(url.concat("/" + this.state.Username + "/" + this.state.Password), {})
    .then((response)=>{
      this.setState({successMessage : response.data})
      console.log(this.state.successMessage);
    })
    .catch();
  }

  inputChangeUsername = (e) => {
    e.preventDefault();
    this.setState({ Username: e.target.value });
    console.log(this.state.Username);
    window.localStorage.setItem("Username", e.target.value);
  };
  inputChangePassword = (e) => {
    e.preventDefault();
    this.setState({ Password: e.target.value });
    console.log(this.state.Password);
    window.localStorage.setItem("Password", e.target.value);
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
              name="Username"
              value={this.state.Username}
              className="form-control input"
              onChange={(e) => this.inputChangeUsername(e)}
              type="text"
              placeholder="Username"
              style={{ marginTop: "40px" }}
            />
            <br />
            <input
              name="Password"
              value={this.state.Password}
              onChange={(e) => this.inputChangePassword(e)}
              className="form-control input"
              type="password"
              placeholder="Password"
            />
            <br />
            <br />
          </div>
          <div>
            <button className="btn button2" onclick={() => this.Register()}>
              Register
            </button>
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
