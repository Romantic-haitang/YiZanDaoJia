import React, { Component } from 'react';
import './Container.css';
import Mine from './Mine.jsx';
import Cece from './Cece.jsx';

import {BrowserRouter as Router,Route,NavLink,Link} from "react-router-dom"
class Container extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="boxone">
               
                <Route path="/fourhome/cece" component={Cece}></Route>
               
            <div className="Container">
               <ul className="๑Ő௰Ő๑">
                <Link to ="/fourhome/cece">   <li><img className="pic" src={require("../images/you.png")}/></li> </Link>
                   <li className="ccxy">测测血压</li>
                   <li className="qiehuan">切换家庭成员</li>
               </ul>
            </div>
            <Blood />
            </div>
        )
    }
}
class Blood extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="boxes">
                <Mine />
            </div>
        )
    }
}

export default Container