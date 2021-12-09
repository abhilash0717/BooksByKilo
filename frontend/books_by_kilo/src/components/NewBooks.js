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
            <div className="col-md-2">
<h6 style={{textAlign:"left",marginLeft:"20px"}}>COLLECTION</h6>
<a>
              {" "}
<span
                className="nav-link"
                style={{ color: "black", textAlign:"left"}}
                onClick={() => this.newBooks()}
              >
                New Books
              </span>
            </a>
            <a>
              {" "}
              <span
                className="nav-link"
                style={{ color: "black", textAlign:"left"}}
                onClick={() => this.premiumCollection()}
              >
                Premium Collection
              </span>
            </a>
            <a>
              <span
                className="nav-link"
                style={{ color: "black", textAlign:"left"}}
                onClick={() => this.classicCollection()}
              >
                Classic Collection
              </span>
            </a>
            <a>
              <span
                className="nav-link"
                style={{ color: "black", textAlign:"left"}}
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