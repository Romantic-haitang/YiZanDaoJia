import React, { Component } from 'react';
import {  BrowserRouter as Router ,Route ,Link ,NavLink ,Redirect,Switch} from 'react-router-dom';
import './denglu.css'

class Denglu extends Component {
    constructor(){
     super()
    }
    
    render() {
        return(
            <div>
                <Ds />
                <Dl />
                <Dipt />
                <Dbtn />
            </div>
        )
    }
}

class Ds extends Component {
    constructor(){
     super()
    }
    
    render() {
        return(
            <div className="ds">
                <NavLink to="/yindao1">
                    <p>返回</p>
                </NavLink>
            </div>
        )
    }
}

class Dl extends Component {
    constructor(){
     super()
    }
    
    render() {
        return(
            <div className="ddl">
                <div className="dzi">
                    <p>登录</p>
                    <NavLink to="/zhuce"><p className="dyi">还没有账号?去注册</p></NavLink>
                </div>
            </div>
        )
    }
}

class Dipt extends Component {
    constructor(){
     super()
    }
     
    render() {
        return(
            <div className="dipt">
                <div>
                    <input type="text"  placeholder="请输入用户名" />
                </div>
                <div>
                    <input type="password" placeholder="请输入密码"  />
                </div>
                <p>忘记密码?</p>
            </div>
        )
    }
}

class Dbtn extends Component {
    constructor(){
     super()
    }
    
    render() {
        return(
            <NavLink to="/fourhome">
            <div className="dbtn">
               登录
            </div>
            </NavLink>
        )
    }
}



export  default  Denglu