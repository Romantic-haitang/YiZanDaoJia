import React, { Component } from 'react';
import {  BrowserRouter as Router ,Route ,Link ,NavLink ,Redirect,Switch} from 'react-router-dom';
import './yindao1.css'

class Yindao1 extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>
                <Yd1 />
            </div>
        )
    }
}

class Yd1 extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className="yd1">
                <NavLink to="/yindao2"><p></p></NavLink>
                <img src={require("../img/yindao1.png")} alt=""/>
                
            </div>
        )
    }
}

export  default  Yindao1