import { Component } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
export default class NewBooks extends Component {
    newBooks = () => {
        console.log("clicked");
        window.location = "/newBooks";
      };
      premiumCollection = () => {
        console.log("clicked");
        window.location = "/premiumCollection";
      };
      classicCollection = () => {
        console.log("clicked");
        window.location = "/classicCollection";
      };
      standardCollection = () => {
        console.log("clicked");
        window.location = "/standardCollection";
      };
render(){
    return(
        <>
        <Navbar/>
        <div className="row">
            <div className="col-md-2" style={{marginLeft:"20px"}}>
<h6>COLLECTION</h6>
<a>
              {" "}
<span
                className="nav-link"
                style={{ color: "black"}}
                onClick={() => this.newBooks()}
              >
                New Books
              </span>
            </a>
            <a>
              {" "}
              <span
                className="nav-link"
                style={{ color: "black"}}
                onClick={() => this.premiumCollection()}
              >
                Premium Collection
              </span>
            </a>
            <a>
              <span
                className="nav-link"
                style={{ color: "black"}}
                onClick={() => this.classicCollection()}
              >
                Classic Collection
              </span>
            </a>
            <a>
              <span
                className="nav-link"
                style={{ color: "black"}}
                onClick={() => this.standardCollection()}
              >
                Standard Collection
              </span>
            </a>
            </div>
            <div className="col-md-8">
<h1>Books</h1>
</div>
        </div>
        <Footer/>
        </>
    )
}
}