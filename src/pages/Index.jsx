import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink,Link } from "react-router-dom"
import "./Index.css"
import "../js/index.js"
import Icon from './Icon.jsx';

import Notices from "./Notices.jsx"
import Article from "./Article.jsx"




class Index extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <React.Fragment>
        <div className="banner fl">
          <div className="banner_box">
            <img className="pic" src={require("../images/1.jpg")} />
            <img className="pic" src={require("../images/2.jpg")} />
            <img className="pic" src={require("../images/3.jpg")} />
            <img className="pic" src={require("../images/4.jpg")} />
            <img className="pic" src={require("../images/5.jpg")} />
            <img className="pic" src={require("../images/1.jpg")} />
          </div>
        </div>
        <ul className="list">
          <NavLink to="/family/家庭医生"><Icon b="家庭医生" /></NavLink>
          <NavLink to="/record/健康档案"><Icon b="健康档案" /></NavLink>
          <NavLink to="/confinerment/设置预产期"><Icon b="产检时间表" /></NavLink>
          <NavLink to="/vaccinetime/疫苗时间表"><Icon b="疫苗时间表" /></NavLink>
        </ul>
        <ul className="list">
          <Icon b="测测血压" />
          <Icon b="测测血糖" />
          <NavLink to="/onlinevisits/在线问诊"><Icon b="在线问诊" /></NavLink>
          <Icon b="申请服务" />
        </ul>
        <Notices />
        <Article />
      </React.Fragment>
    )
  }
}


export default Index


