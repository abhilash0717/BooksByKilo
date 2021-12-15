import { Component } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Filter from "./Filter";
import { AiOutlineShoppingCart } from "react-icons";
import axios from "axios";

const NewBooksUrl = "http://localhost:4000/BooksByKilo/NewBooks";

export default class NewBooks extends Component {
  state = {
    selected1: true,
    selected2: false,
    selected3: false,
    selected4: false,
    books: [],
  };

  componentDidMount() {
    axios
      .get(NewBooksUrl)
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
            <Filter data={this.state} />
          </div>
          <div className="col-md-9">
            <div className="row">
              <div className="col-md-3">
                {books.map((book, key) => {
                  return (
                    <div key={key} className="card">
                      <div className="card-body">
                        <img style={{ width: "100%" }} src={book.thumbnail} />
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
        </div>
        <Footer />
      </>
    );
  }
}
