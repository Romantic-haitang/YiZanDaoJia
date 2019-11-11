import React, { Component } from 'react';
import {  BrowserRouter as Router ,Route ,Link ,NavLink ,Redirect,Switch} from 'react-router-dom';
import './yindao2.css'

class Yindao2 extends Component{
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
            <div className="yd2">
                <NavLink to="/yindao3"><p></p></NavLink>
                <img src={require("../img/yindao2.png")} alt=""/>
                
            </div>
        )
    }
}

export  default  Yindao2