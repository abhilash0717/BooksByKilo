import { Component } from "react";
import "../App.css"
import Footer from "./Footer";
import Navbar from "./Navbar";
export default class Register extends Component{
    signin = () => {
        console.log("clicked");
        window.location = "/login";
      };
    render(){
        return(
            <>
            <Navbar/>
            <h1>Create new account</h1><br/>
    
            <div>
                <input className="form-control input"type="text" placeholder="Name" style={{width:"500px", marginLeft:"350px"}}/><br/>
                <input className="form-control input"type="text" placeholder="Phone Number" style={{width:"500px", marginLeft:"350px"}}/><br/>
                <input className="form-control input"type="text" placeholder="Email" style={{width:"500px", marginLeft:"350px"}}/><br/>
                </div>
                  <div>
               <button className="btn button2">Send OTP</button></div><br/><br/>
            
            <div>
    <label>Already register</label>
    <d><span style={{color:"red"}} onClick={()=>this.signin()} >&nbsp;Login here</span></d>
  </div>
  <Footer/>
            </>
        )
    }
}