import React, { Component } from 'react';
import "./Comfinefrom.css"
import { BrowserRouter as Router, Route, NavLink,Link } from "react-router-dom"
// import Antenatal from "./Antenatal.jsx"
class Comfinefrom extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="box">
                昵称：<input className="ipts" style={{marginLeft:"15px"}} type="text" placeholder="请输入你的昵称" /><br />
                预产期：<input className="ipts" style={{marginBottom:"5%"}} type="date" placeholder="请选择你的预产期" /><br />
               <Link to="/Comfinemessage" className="lj">如何计算预产期</Link><br />
             <Link to="/Antenatal">  <button className="over">完成</button></Link> 
            </div>
        )
    }
}

export default Comfinefrom