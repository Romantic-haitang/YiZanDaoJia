import React, { Component } from 'react';
import {  BrowserRouter as Router ,Route ,Link ,NavLink ,Redirect,Switch} from 'react-router-dom';
import './yindao3.css'

class Yindao3 extends Component{
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
            <div className="yd3">
                <NavLink to="/denglu"><p></p></NavLink>
                <img src={require("../img/yindao3.png")} alt=""/>
                
            </div>
        )
    }
}

export  default  Yindao3