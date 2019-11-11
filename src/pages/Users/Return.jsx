import React, { Component } from 'react';
import "./Return.css";
import {BrowserRouter as Router,Route,NavLink,Link} from "react-router-dom"
import User from '../../pages/User.jsx';
class Return extends Component{
    constructor(){
        super();
    }
    render(){
        return(
                
            
            <div className="ys"> 
              <Link to="/fourhome/user">  <p className ="ysa"> 返回</p></Link>
                <p className="yss">编辑个人资料</p>
            </div>
           
        )
    }
}
class Sb extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <Router>
                     <Route path ="/User" component={User}></Route>
         </Router>
        )
    }
}

export default Return;