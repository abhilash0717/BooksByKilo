import { Component } from "react";
import "../App.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Filter from "./Filter";
export default class ClassicCollection extends Component {
render(){
    return(
        <>
        <Navbar/>
       <div className="row">
            <div className="col-md-4">
<Filter/>
            </div>
            <div className="col-md-8">

            </div>
            </div>
            <Footer/>
        </>
    )
}
}