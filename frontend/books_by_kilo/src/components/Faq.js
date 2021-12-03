import { Component } from "react"
import react from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
export default class Faq extends Component{
render(){
    return(
        <>
        <Navbar/>
        <h1>Frequently Asked Questions</h1>
        <div className="container">
        <div style={{border:"2px solid black"}}>
           <p style={{paddingTop:"10px", marginRight:"900px"}}> How good are the Books?</p>
        </div>
        </div>
        <Footer/>
        </>
    )
}
}