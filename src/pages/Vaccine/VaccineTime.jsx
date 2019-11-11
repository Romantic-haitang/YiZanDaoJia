import React, { Component } from 'react';
import Navbar from "../Navbar.jsx"
import Schedule from "./Schedule.jsx"
import Times from "./Times.jsx"

class Vaccinetime extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
               <Navbar title={this.props.match.params.title} notShow = {true}/>
                <Times />
               <Schedule />
            </div>
           
        )
    }
}

export default Vaccinetime