import { Component } from "react";
import "../App.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Filter from "./Filter";
import axios from "axios";

const ClassicBooksUrl = "http://localhost:4001/BooksByKilo/ClassicBooks";
const booksBasedOnWeight = "http://localhost:4001/BooksByKilo/Filter/weight";
const booksBasedOnPrice = "http://localhost:4001/BooksByKilo/Filter/price";

export default class ClassicCollection extends Component {
  state = {
    selected1: false,
    selected2: false,
    selected3: true,
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
      .get(ClassicBooksUrl)
      .then((response) => {
        console.log(response);
        this.setState({ books: response.data });
      })
      .catch();
  }

  newBooks = () => {
    this.setState({
      selected1: true,
      selected2: false,
      selected3: false,
      selected4: false,
    });

    window.location = "/newBooks";
  };
  premiumCollection = (event) => {
    event.preventDefault();
    this.setState({
      selected1: false,
      selected2: true,
      selected3: false,
      selected4: false,
    });
    window.location = "/premiumCollection";
  };
  classicCollection = () => {
    this.setState({
      selected1: false,
      selected2: false,
      selected3: true,
      selected4: false,
    });
    window.location = "/classicCollection";
  };
  standardCollection = () => {
    this.setState({
      selected1: false,
      selected2: false,
      selected3: false,
      selected4: true,
    });
    window.location = "/standardCollection";
  };

  under100 = () => {
    this.setState({
      selected5: true,
      selected6: false,
      selected7: false,
      selected8: false,
    });

    axios
      .get(booksBasedOnWeight.concat("/" + "Classic" + "/" + "hundred"))
      .then((response) => {
        console.log(response.data);
        this.setState({ books: response.data });
      })
      .catch();
  };

  Between100to200 = () => {
    this.setState({
      selected5: false,
      selected6: true,
      selected7: false,
      selected8: false,
    });

    axios
      .get(booksBasedOnWeight.concat("/" + "Classic" + "/" + "100TO200"))
      .then((response) => {
        console.log(response.data);
        this.setState({ books: response.data });
      })
      .catch();
  };

  Between200to500 = () => {
    this.setState({
      selected5: false,
      selected6: false,
      selected7: true,
      selected8: false,
    });
    axios
      .get(booksBasedOnWeight.concat("/" + "Classic" + "/" + "201TO500"))
      .then((response) => {
        console.log(response.data);
        this.setState({ books: response.data });
      })
      .catch();
  };
  over500 = () => {
    this.setState({
      selected5: false,
      selected6: false,
      selected7: false,
      selected8: true,
    });
    axios
      .get(booksBasedOnWeight.concat("/" + "Classic" + "/" + "Over500"))
      .then((response) => {
        console.log(response.data);
        this.setState({ books: response.data });
      })
      .catch();
  };
  price101to200 = () => {
    this.setState({
      selected9: false,
      selected10: true,
      selected11: false,
      selected12: false,
    });
    axios
      .get(booksBasedOnPrice.concat("/" + "Classic" + "/" + "100TO200"))
      .then((response) => {
        console.log(response.data);
        this.setState({ books: response.data });
      })
      .catch();
  };
  priceUnder100 = () => {
    this.setState({
      selected9: true,
      selected10: false,
      selected11: false,
      selected12: false,
    });
    axios
      .get(booksBasedOnPrice.concat("/" + "Classic" + "/" + "hundred"))
      .then((response) => {
        console.log(response.data);
        this.setState({ books: response.data });
      })
      .catch();
  };
  price201to500 = () => {
    this.setState({
      selected9: false,
      selected10: false,
      selected11: true,
      selected12: false,
    });
    axios
      .get(booksBasedOnPrice.concat("/" + "Classic" + "/" + "201TO500"))
      .then((response) => {
        console.log(response.data);
        this.setState({ books: response.data });
      })
      .catch();
  };
  priceAbove500 = () => {
    this.setState({
      selected9: false,
      selected10: false,
      selected11: false,
      selected12: true,
    });
    axios
      .get(booksBasedOnPrice.concat("/" + "Classic" + "/" + "Over500"))
      .then((response) => {
        console.log(response.data);
        this.setState({ books: response.data });
      })
      .catch();
  };
  clear = (e) => {
    e.preventDefault();
    this.setState({
      selected1: false,
      selected2: false,
      selected3: false,
      selected4: false,
    });
    window.location = "/Books";
  };

  weightClear = (e) => {
    e.preventDefault();
    this.setState({
      selected5: false,
      selected6: false,
      selected7: false,
      selected8: false,
    });
    window.location = "/Books";
  };
  priceClear = (e) => {
    e.preventDefault();
    this.setState({
      selected9: false,
      selected10: false,
      selected11: false,
      selected12: false,
    });
    window.location = "/Books";
  };
  render() {
    var { books } = this.state;

    return (
      <>
        <Navbar />
        <div className="row">
           {/* filter */}
           <div className="col-md-3">
            <div>
              <h6 style={{ textAlign: "left", marginLeft: "20px" }}>
                COLLECTION{" "}
                <c>
                  <span
                    style={{ color: "gray", marginLeft: "130px" }}
                    onClick={(event) => this.clear(event)}
                  >
                    clear
                  </span>
                </c>
              </h6>
            </div>
            <hr />
            <div className="filter">
              <h6
                className="filter"
                style={{ color: "gray", textAlign: "left", marginLeft: "20px" }}
                onClick={() => this.newBooks()}
              >
                New Books{" "}
                {this.state.selected1 ? (
                  <i style={{ marginLeft: "149px" }} class="fa fa-check"></i>
                ) : null}
              </h6>
            </div>
            <div className="filter">
              <h6
                className="filter"
                style={{ color: "gray", textAlign: "left", marginLeft: "20px" }}
                onClick={(event) => this.premiumCollection(event)}
              >
                Premium Collection{" "}
                {this.state.selected2 ? (
                  <i style={{ marginLeft: "88px" }} class="fa fa-check"></i>
                ) : null}
              </h6>
            </div>
            <div className="filter">
              <h6
                className="filter"
                style={{ color: "gray", textAlign: "left", marginLeft: "20px" }}
                onClick={() => this.classicCollection()}
              >
                Classic Collection{" "}
                {this.state.selected3 ? (
                  <i style={{ marginLeft: "105px" }} class="fa fa-check"></i>
                ) : null}
              </h6>
            </div>
            <div className="filter">
              <h6
                className="filter"
                style={{ color: "gray", textAlign: "left", marginLeft: "20px" }}
                onClick={() => this.standardCollection()}
              >
                Standard Collection{" "}
                {this.state.selected4 ? (
                  <i style={{ marginLeft: "88px" }} class="fa fa-check"></i>
                ) : null}
              </h6>
            </div>
            <br />
            <h6
              style={{
                textAlign: "left",
                marginLeft: "20px",
                marginLeft: "20px",
              }}
            >
              WEIGHT{" "}
              <c>
                <span
                  style={{ color: "gray", marginLeft: "165px" }}
                  onClick={(event) => this.weightClear(event)}
                >
                  clear
                </span>
              </c>
            </h6>
            <hr />
            <div className="filter">
              <h6
                className="filter"
                style={{ color: "gray", textAlign: "left", marginLeft: "20px" }}
                onClick={() => this.under100()}
              >
                Under 100gm{" "}
                {this.state.selected5 ? (
                  <i style={{ marginLeft: "135px" }} class="fa fa-check"></i>
                ) : null}
              </h6>
            </div>
            <div className="filter">
              <h6
                className="filter"
                style={{ color: "gray", textAlign: "left", marginLeft: "20px" }}
                onClick={() => this.Between100to200()}
              >
                100-200gm{" "}
                {this.state.selected6 ? (
                  <i style={{ marginLeft: "151px" }} class="fa fa-check"></i>
                ) : null}
              </h6>
            </div>
            <div className="filter">
              <h6
                className="filter"
                style={{ color: "gray", textAlign: "left", marginLeft: "20px" }}
                onClick={() => this.Between200to500()}
              >
                201-500gm{" "}
                {this.state.selected7 ? (
                  <i style={{ marginLeft: "148px" }} class="fa fa-check"></i>
                ) : null}
              </h6>
            </div>
            <div className="filter">
              <h6
                className="filter"
                style={{ color: "gray", textAlign: "left", marginLeft: "20px" }}
                onClick={() => this.over500()}
              >
                Over 500gm{" "}
                {this.state.selected8 ? (
                  <i style={{ marginLeft: "142px" }} class="fa fa-check"></i>
                ) : null}
              </h6>
            </div>
            <br />
            <h6 style={{ textAlign: "left", marginLeft: "20px" }}>
              PRICE{" "}
              <c>
                <span
                  style={{ color: "gray", marginLeft: "182px" }}
                  onClick={(event) => this.priceClear(event)}
                >
                  clear
                </span>
              </c>
            </h6>
            <hr />
            <div className="filter">
              <h6
                className="filter"
                style={{ color: "gray", textAlign: "left", marginLeft: "20px" }}
                onClick={() => this.priceUnder100()}
              >
                Under Rs 100{" "}
                {this.state.selected9 ? (
                  <i style={{ marginLeft: "142px" }} class="fa fa-check"></i>
                ) : null}
              </h6>
              <h6
                className="filter"
                style={{ color: "gray", textAlign: "left", marginLeft: "20px" }}
                onClick={() => this.price101to200()}
              >
                101-200 Rs{" "}
                {this.state.selected10 ? (
                  <i style={{ marginLeft: "160px" }} class="fa fa-check"></i>
                ) : null}
              </h6>
              <h6
                className="filter"
                style={{ color: "gray", textAlign: "left", marginLeft: "20px" }}
                onClick={() => this.price201to500()}
              >
                201-500 Rs{" "}
                {this.state.selected11 ? (
                  <i style={{ marginLeft: "157px" }} class="fa fa-check"></i>
                ) : null}
              </h6>
              <h6
                className="filter"
                style={{ color: "gray", textAlign: "left", marginLeft: "20px" }}
                onClick={() => this.priceAbove500()}
              >
                Over 500 Rs
                {this.state.selected12 ? (
                  <i style={{ marginLeft: "153px" }} class="fa fa-check"></i>
                ) : null}
              </h6>
            </div>
            <br />
          </div>
{/* card */}
          <div className="col-md-9">
            <h1 style={{ textAlign: "left" }}>Classic Books</h1>
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
