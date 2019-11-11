import React, { Component } from 'react';
import "./Signout.css";

class Signout extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className = "tc">{this.props.nn}</div>
        )
    }
}
export default Signout