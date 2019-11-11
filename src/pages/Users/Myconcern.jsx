import React, { Component } from 'react';
import {BrowserRouter as Router,Route,NavLink,Link} from "react-router-dom";
import "./Myconcern.css";
import Follow from "./Follow.jsx"


class Myconcern extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className="hasg">
                <div className="qqw">
                     <Link to="/User"> <p className="ysa">返回</p></Link>
                <p className="yss">我的关注</p>
              </div>
              <Follow />
              
            </div>
        )
    }
}



export default Myconcern;