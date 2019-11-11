import React, { Component } from 'react';
import "./Family_doctor.css"
import "./Navbar.css"
import Navbar from "./Navbar.jsx"
import Doctor from "./Doctor.jsx"
class Family extends Component{
    constructor(){
        super();
    }
    render(){
        
        console.log('触发Doctor页面');
        return(
            <div className="famil">
               <Navbar title={this.props.match.params.title} notShow = {true} />
               <Doctor  />
            </div>
           
        )
    }
}

export default Family