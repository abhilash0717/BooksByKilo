import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";

const searchResultsUrl = "http://localhost:4001/BooksByKilo/search";

export default class SearchResults extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    axios
      .get(searchResultsUrl.concat("/" + window.localStorage.getItem("word")))
      .then((response) => {
        console.log(response);
        this.setState({ books: response.data });
      })
      .catch();
  }

  render() {
    var { books } = this.state;
    return (
      <>
        <Navbar />
        {/* displaying cards */}
        <div className="col-md-11">
          <h1 style={{ textAlign: "left", marginLeft: "20px" }}>
            Search Results
          </h1>
          <div className="row">
            {books.map((book, key) => {
              return (
                <div
                  key={key}
                  className="card"
                  style={{
                    marginRight: "20px",
                    height: "450px",
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
        <Footer />
      </>
    );
  }
}
