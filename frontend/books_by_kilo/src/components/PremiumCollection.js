import { Component } from "react";
import Filter from "./Filter";
import Footer from "./Footer";
import Navbar from "./Navbar";
export default class PremiumCollection extends Component {
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