import react from "react";
import { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default class ContactUs extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div class="row">
          <div class="col-md-3">
            <b>
              <p>
                <i className="fa fa-phone">Get in touch</i>
              </p>
            </b>
            <span> Mobile : +91 88286 87287</span> <br />
            {/* <span> Email : support@booksbykilo.co</span> */}
          </div>
          <div class="col-md-3" style={{ marginLeft: "600px" }}>
            <b>
              {" "}
              <p>
                <i className="fa fa-location-arrow">Location</i>
              </p>
            </b>
            <p>
              BooksByKilo, Bhoomi Sagar, Shop No 6, Sec 22, Plot No: 112/113,
              Opp: Imperial Heights, Kamothe, Navi Mumbai: 410209
            </p>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
