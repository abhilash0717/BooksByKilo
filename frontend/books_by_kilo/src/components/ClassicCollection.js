import { Component } from "react";
import "../App.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Filter from "./Filter";
import axios from "axios";

const ClassicBooksUrl = "http://localhost:4001/BooksByKilo/ClassicBooks";

export default class ClassicCollection extends Component {
  state = {
    selected1: false,
    selected2: false,
    selected3: true,
    selected4: false,
    books: [],
  };

  componentDidMount() {
    axios
      .get(ClassicBooksUrl)
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
        <div className="row">
          <div className="col-md-3">
            <div>
              <Filter data={this.state} />
            </div>
          </div>

          <div className="col-md-9">
            <div className="row">
              {books.map((book) => {
                return (
                  <div
                    className="card"
                    style={{
                      marginLeft: "20px",
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
                          <p style={{ textAlign: "left" }}>{book.weight} gm</p>
                          <p style={{ textAlign: "left" }}>{book.price} Rs</p>
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
      </>
    );
  }
}
