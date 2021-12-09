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
            <div className="col-md-4">
<h6 style={{textAlign:"left",marginLeft:"20px"}}>COLLECTION <c><span style={{color:"gray", marginLeft:"50px"}} onClick={()=>this.newBooks()}>clear</span></c></h6>

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
            </a><br/>
              <h6 style={{textAlign:"left",marginLeft:"20px"}}>WEIGHT <c><span style={{color:"gray", marginLeft:"80px"}} onClick={()=>this.newBooks()}>clear</span></c></h6>
              <p style={{textAlign:"left",marginLeft:"20px"}}>Under 100gm</p>
              <p style={{textAlign:"left",marginLeft:"20px"}}>100-200gm</p>
              <p style={{textAlign:"left",marginLeft:"20px"}}>200-500gm</p>
              <p style={{textAlign:"left",marginLeft:"20px"}}>Over 500gm</p><br/>

              <h6 style={{textAlign:"left",marginLeft:"20px"}}>PRICE <c><span style={{color:"gray", marginLeft:"100px"}} onClick={()=>this.newBooks()}>clear</span></c></h6>
              <p style={{textAlign:"left",marginLeft:"20px"}}>Under Rs 100</p>
              <p style={{textAlign:"left",marginLeft:"20px"}}>101-200</p>
              <p style={{textAlign:"left",marginLeft:"20px"}}>201-500</p>
              <p style={{textAlign:"left",marginLeft:"20px"}}>Over 500</p><br/>
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