import { Component } from "react";
export default class Filter extends Component {
  state = {
    selected1: window.localStorage.getItem("selected1"),
    selected2: false,
    selected3: false,
    selected4: false,
  };
  newBooks = () => {
    this.setState({
      selected1: true,
      selected2: false,
      selected3: false,
      selected4: false,
    });
    console.log(window.localStorage.getItem("selected1"));
  };
  premiumCollection = () => {
    this.setState({
      selected1: false,
      selected2: true,
      selected3: false,
      selected4: false,
    });
  };
  classicCollection = () => {
    this.setState({
      selected1: false,
      selected2: false,
      selected3: true,
      selected4: false,
    });
  };
  standardCollection = () => {
    this.setState({
      selected1: false,
      selected2: false,
      selected3: false,
      selected4: true,
    });
  };

  clear = () => {
    this.setState({
      selected1: false,
      selected2: false,
      selected3: false,
      selected4: false,
    });
  };
  render() {
    return (
      <>
        <div>
          <h6 style={{ textAlign: "left", marginLeft: "20px" }}>
            COLLECTION{" "}
            <c>
              <span
                style={{ color: "gray", marginLeft: "130px" }}
                onClick={() => this.clear()}
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
            onClick={() => this.premiumCollection()}
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
        <hr />
        <h6
          style={{ textAlign: "left", marginLeft: "20px", marginLeft: "20px" }}
        >
          WEIGHT{" "}
          <c>
            <span
              style={{ color: "gray", marginLeft: "165px" }}
              onClick={() => this.newBooks()}
            >
              clear
            </span>
          </c>
        </h6>
        <div className="filter">
          <h6
            className="filter"
            style={{ color: "gray", textAlign: "left", marginLeft: "20px" }}
          >
            Under 100gm
          </h6>
        </div>
        <div className="filter">
          <h6
            className="filter"
            style={{ color: "gray", textAlign: "left", marginLeft: "20px" }}
          >
            100-200gm
          </h6>
        </div>
        <div className="filter">
          <h6
            className="filter"
            style={{ color: "gray", textAlign: "left", marginLeft: "20px" }}
          >
            200-500gm
          </h6>
        </div>
        <div className="filter">
          <h6
            className="filter"
            style={{ color: "gray", textAlign: "left", marginLeft: "20px" }}
          >
            Over 500gm
          </h6>
        </div>
        <hr />
        <h6 style={{ textAlign: "left", marginLeft: "20px" }}>
          PRICE{" "}
          <c>
            <span
              style={{ color: "gray", marginLeft: "182px" }}
              onClick={() => this.newBooks()}
            >
              clear
            </span>
          </c>
        </h6>
        <p style={{ textAlign: "left", marginLeft: "20px" }}>Under Rs 100</p>
        <p style={{ textAlign: "left", marginLeft: "20px" }}>101-200</p>
        <p style={{ textAlign: "left", marginLeft: "20px" }}>201-500</p>
        <p style={{ textAlign: "left", marginLeft: "20px" }}>Over 500</p>
        <br />
      </>
    );
  }
}
