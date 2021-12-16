import React, { Component } from "react";
import Filter from "./Filter";
import Footer from "./Footer";
import Navbar from "./Navbar";
import axios from "axios";

const BooksUrl = "http://localhost:4001/BooksByKilo/Books";

export default class Books extends Component {
  state = {
    selected1: false,
    selected2: false,
    selected3: false,
    selected4: false,
    selected5: false,
    selected6: false,
    selected7: false,
    selected8: false,
    selected9: false,
    selected10: false,
    selected11: false,
    selected12: false,
    books: [],
  };

  componentDidMount() {
    axios
      .get(BooksUrl)
      .then((response) => {
        console.log(response);
        this.setState({ books: response.data });
      })
      .catch();
  }

  render() {
    var { books } = this.state;
    return (
      <div>
        <Navbar />
        <div className="row">
          <div className="col-md-3">
            <Filter data={this.state} />
          </div>
          <div className="col-md-9">
            <div className="row">
              {books.map((book, key) => {
                return (
                  <div
                    className="card"
                    style={{
                      marginLeft: "20px",
                      height: "500px",
                      marginBottom: "20px",
                    }}
                  >
                    <div className="card-body">
                      <img
                        style={{ width: "100%", height: "50%" }}
                        src={book.thumbnail}
                      />
                      <h5 style={{ textAlign: "left" }}>{book.name}</h5>
                      <br />
                      <div className="row">
                        <div className="col-md-8">
                          <p style={{ textAlign: "left" }}>{book.weight}</p>
                          <p style={{ textAlign: "left" }}>{book.price}</p>
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
                );
              })}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
