import React, { Component } from 'react';
import Navbar from "../Navbar.jsx"
import Myinfo from "../health/Myinfo.jsx"
import Healthinfo from "../health/Healthinfo.jsx"
class Record extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
               <Navbar title={this.props.match.params.title} />
               <Myinfo />
               <Healthinfo />
            </div>
           
        )
    }
}

export default Record