import React from "react";
import { Component } from "react";
import "../App.css";

export default class Footer extends Component {
  contactUsPage = () => {
    window.location = "/contactUs";
  };

  FAQPage = () => {
    window.location = "/faq";
  };
  render() {
    return (
      <>
        <div
          style={{
            backgroundColor: "#de1013",
            color: "white",
            marginTop: "20px",
          }}
        >
          <div class="row">
            <div class="col-md-3" style={{ marginTop: "30px" }}>
              <h4>Books By Kilo</h4>
              <h5>Spend less. Read more.</h5>
              <br></br>
              <div>
                <span>
                  <i class="fa fa-twitter-square fa-2x"></i>
                </span>{" "}
                &nbsp;
                <span>
                  <i class="fa fa-facebook-square fa-2x"></i>
                </span>{" "}
                &nbsp;
                <span>
                  <i class="fa fa-envelope fa-2x "></i>
                </span>{" "}
                &nbsp;
                <span>
                  <i class="fa fa-instagram fa-2x"></i>
                </span>
              </div>
              <br />
              <br />
              <br />
              <br />
            </div>
            <div class="col-md-3" style={{ marginTop: "30px" }}>
              <div>
                <h4>Information</h4>
                <span>
                  <i>About Us</i>
                </span>{" "}
                <br />
                <span>
                  <i>Disclaimer</i>
                </span>{" "}
                <br />
                <span>
                  <i>Terms and Conditions</i>
                </span>{" "}
                <br />
                <span>
                  <i>Privacy Policy</i>
                </span>{" "}
                <br />
                <span>
                  <i>Cancellation Policy</i>
                </span>
              </div>
            </div>
            <div class="col-md-3" style={{ marginTop: "30px" }}>
              <div>
                <h4>Customer</h4>
                <span>
                  <i>My Orders</i>
                </span>{" "}
                <br />
                <span>
                  <i onClick={() => this.contactUsPage()}>Contact Us</i>
                </span>
              </div>
            </div>
            <div class="col-md-3" style={{ marginTop: "30px" }}>
              <div>
                <h4>Support Center</h4>
                <span>+91 8939254353</span> <br />
                <span>support@booksbykilo.co</span> <br />
                <span>
                  <i>Bulk Purchase</i>
                </span>{" "}
                <br />
                <span>
                  <i onClick={() => this.FAQPage()}>FAQ</i>
                </span>
              </div>
            </div>
          </div>
          <hr></hr>
          <p style={{ marginTop: "20px" }}>
            Books By Kilo. All Rights Reserved.
          </p>
          <br />
        </div>
      </>
    );
  }
}
