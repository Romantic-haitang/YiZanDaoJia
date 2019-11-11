import React, { Component } from 'react';
import Navbar from "../Navbar.jsx"
import Comfinefrom from './Comfinefrom.jsx';
class Record extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
               <Navbar title={this.props.match.params.title} notShow = {true}/>
               <Comfinefrom />
            </div>
           
        )
    }
}

export default Record