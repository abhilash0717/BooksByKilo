import { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
export default class Faq extends Component {
  state = { toggle: false, toggle2: false, toggle3: false, toggle4: false };

  plusClick1 = () => {
    console.log("clicked");
    this.setState({
      toggle: !this.state.toggle,
      toggle2: false,
      toggle3: false,
      toggle4: false,
    });
  };
  plusClick2 = () => {
    console.log("clicked");
    this.setState({
      toggle: false,
      toggle2: !this.state.toggle2,
      toggle3: false,
      toggle4: false,
    });
  };
  plusClick3 = () => {
    console.log("clicked");
    this.setState({
      toggle: false,
      toggle2: false,
      toggle3: !this.state.toggl3,
      toggle4: false,
    });
  };
  plusClick4 = () => {
    console.log("clicked");
    this.setState({
      toggle: false,
      toggle2: false,
      toggle3: false,
      toggle4: !this.state.toggle4,
    });
  };
  render() {
    return (
      <>
        <Navbar />
        <h1>Frequently Asked Questions</h1>
        <br />
        <div className="container">
          <div
            id="plus"
            onClick={() => this.plusClick1()}
            style={{
              border: "1px solid #edd5d5",
              width: "90%",
              marginLeft: "70px",
            }}
          >
            <div className="row">
              <div className="col-md-8">
                <p style={{ paddingTop: "10px", marginLeft: "-210px" }}>
                  Where can I find book information not listed booksbykilo ?
                </p>
              </div>

              <div className="col-md-4">
                {this.state.toggle ? (
                  <p style={{ paddingTop: "10px", marginLeft: "150px" }}>
                    {" "}
                    <i
                      className="fa fa-minus"
                      onClick={() => this.plusClick1()}
                    ></i>
                  </p>
                ) : (
                  <p style={{ paddingTop: "10px", marginLeft: "150px" }}>
                    {" "}
                    <i
                      className="fa fa-plus"
                      onClick={() => this.plusClick1()}
                    ></i>
                  </p>
                )}
              </div>
            </div>
            {this.state.toggle ? (
              <div>
                <p>
                  "Please follow the below mentioned steps: · Click clear images
                  of the product showing damages. · Email us the images. ·
                  Explain the exact detail of the damage/defect and the status
                  of the package that you received. · The complaint and the
                  images should be sent to us within 24 hours of the delivery.
                  Failing to do so, we will not be able to serve the claim for
                  you. · If necessary, we will arrange a pickup of the product
                  through our logistic partner. If we are unable to do so, we
                  will request you to send the product back to us. · Once the
                  product reaches us, our Quality Analysts will evaluate your
                  returned product to ensure adherence to our Returns
                  Guidelines."
                </p>
              </div>
            ) : null}{" "}
          </div>
          <br />
          <div
            id="plus"
            onClick={() => this.plusClick2()}
            style={{
              border: "1px solid #edd5d5",
              width: "90%",
              marginLeft: "70px",
            }}
          >
            <div className="row">
              <div className="col-md-8">
                <p style={{ paddingTop: "10px", marginLeft: "-430px" }}>
                  How good are the books ?
                </p>
              </div>

              <div className="col-md-4">
                {this.state.toggle2 ? (
                  <p style={{ paddingTop: "10px", marginLeft: "150px" }}>
                    {" "}
                    <i
                      className="fa fa-minus"
                      onClick={() => this.plusClick2()}
                    ></i>
                  </p>
                ) : (
                  <p style={{ paddingTop: "10px", marginLeft: "150px" }}>
                    {" "}
                    <i
                      className="fa fa-plus"
                      onClick={() => this.plusClick2()}
                    ></i>
                  </p>
                )}
              </div>
            </div>
            {this.state.toggle2 ? (
              <div>
                <p>
                  All products sold on Booksbykilo checked for quality, though
                  they are not brand new every possible measure have been taken
                  to make sure they are readable and of desirable quality. We
                  ensure to provide best quality books to our buyers. Books
                  listed on our website are in good condition, most of them can
                  be even added to your collection.
                </p>
              </div>
            ) : null}{" "}
          </div>
          <br />
          <div
            id="plus"
            onClick={() => this.plusClick3()}
            style={{
              border: "1px solid #edd5d5",
              width: "90%",
              marginLeft: "70px",
            }}
          >
            <div className="row">
              <div className="col-md-8">
                <p style={{ paddingTop: "10px", marginLeft: "-430px" }}>
                  Are these books genuine ?
                </p>
              </div>

              <div className="col-md-4">
                {this.state.toggle3 ? (
                  <p style={{ paddingTop: "10px", marginLeft: "150px" }}>
                    {" "}
                    <i
                      className="fa fa-minus"
                      onClick={() => this.plusClick3()}
                    ></i>
                  </p>
                ) : (
                  <p style={{ paddingTop: "10px", marginLeft: "150px" }}>
                    {" "}
                    <i
                      className="fa fa-plus"
                      onClick={() => this.plusClick3()}
                    ></i>
                  </p>
                )}
              </div>
            </div>
            {this.state.toggle3 ? (
              <div>
                <p>
                  Yes, we do not believe in piracy. All books sold by us have
                  been procured by legitimate vendor against legitamate billing.
                  Worry about so much you haven't read, leave the rest to us.
                </p>
              </div>
            ) : null}{" "}
          </div>
          <br />

          <div
            id="plus"
            onClick={() => this.plusClick4()}
            style={{
              border: "1px solid #edd5d5",
              width: "90%",
              marginLeft: "70px",
            }}
          >
            <div className="row">
              <div className="col-md-8">
                <p style={{ paddingTop: "10px", marginLeft: "-330px" }}>
                  How can I check the status of my order ?
                </p>
              </div>

              <div className="col-md-4">
                {this.state.toggle4 ? (
                  <p style={{ paddingTop: "10px", marginLeft: "150px" }}>
                    {" "}
                    <i
                      className="fa fa-minus"
                      onClick={() => this.plusClick4()}
                    ></i>
                  </p>
                ) : (
                  <p style={{ paddingTop: "10px", marginLeft: "150px" }}>
                    {" "}
                    <i
                      className="fa fa-plus"
                      onClick={() => this.plusClick4()}
                    ></i>
                  </p>
                )}
              </div>
            </div>
            {this.state.toggle4 ? (
              <div>
                <p>
                  Once you place an order with us we will keep you informed
                  about your order status via SMS and Email used while placing
                  an order. You can always call us for further details
                </p>
              </div>
            ) : null}{" "}
          </div>
        </div>
        <br />
        <Footer />
      </>
    );
  }
}
