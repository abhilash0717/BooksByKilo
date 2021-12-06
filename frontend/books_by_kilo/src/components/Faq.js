import { Component } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
export default class Faq extends Component{
    state={toggle : false}

    plusClick = () => {
        console.log("clicked");
        this.setState({toggle:!this.state.toggle})
      };    
render(){
    return(
        <>
        <Navbar/>
        <h1>Frequently Asked Questions</h1>
        <div className="container">
        <div style={{border:"2px solid black"}}>
           <p style={{paddingTop:"10px"}}> How good are the Books? <i 
             className="fa fa-plus panel-collapse"
            style={{ marginLeft: "850px" }}
           onClick={()=>this.plusClick()}></i></p> 
         {this.state.toggle ? 
         <div> 
             <p>answer</p> 
         </div>:null}
        </div>
        </div>
        <Footer/>
        </>
    )
}
}