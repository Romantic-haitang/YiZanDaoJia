import React, { Component } from 'react';
// import { Tabs, WhiteSpace, Badge } from 'antd-mobile';

import {BrowserRouter as Router,Route,NavLink,Link} from "react-router-dom"
import "./Mynews.css";
import Tabsone from "./Tabss.jsx"


class Mynews extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className="qqqaq">
                 <div className="qqff">
                     <Link to="/User"> <p className="ysa">返回</p></Link>
                    <p className="yss">我的消息</p>
                </div>
                <div className="tabs">
                <Tabsone />
                </div>
            </div>
        )
    }
}

export default Mynews;