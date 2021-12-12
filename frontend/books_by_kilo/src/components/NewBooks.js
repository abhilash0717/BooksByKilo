import { Component } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Filter from "./Filter";
import { AiOutlineShoppingCart } from "react-icons";
export default class NewBooks extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="row">
          <div className="col-md-3">
            <Filter id={window.localStorage.getItem("selected1")} />
          </div>
          <div className="col-md-9">
            <div className="card">
              <div className="card-body">
                <img
                  style={{ width: "100%" }}
                  src="https://www.booksbykilo.in/media/staticimages/Homepage-informative-activity-Books.jpg"
                />
                <h5 style={{ textAlign: "left" }}>Title</h5>
                <br />
                <div className="row">
                  <div className="col-md-8">
                    <p style={{ textAlign: "left" }}>220 gm</p>
                    <p style={{ textAlign: "left" }}>220 Rs</p>
                  </div>
                  <div className="col-md-4">
                    <div className="button5">
                      <button
                        className="btn button5"
                        onClick={() => this.newBooks()}
                      >
                        {" "}
                        <i className="fa fa-shopping-cart fa-xl"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
