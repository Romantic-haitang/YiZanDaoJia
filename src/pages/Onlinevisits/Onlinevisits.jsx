import React, { Component } from 'react';
import Navbar from "../Navbar.jsx"
import Tabsone from "./Tabs.jsx"

class Onlinevisits extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
               <Navbar title={this.props.match.params.title} />
               <Tabsone />
            </div>
           
        )
    }
}

export default Onlinevisits