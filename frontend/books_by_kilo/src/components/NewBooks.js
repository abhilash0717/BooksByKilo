import { Component } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Filter from "./Filter";
export default class NewBooks extends Component {
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