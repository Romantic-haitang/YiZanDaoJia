import React, { Component } from 'react';
import {  BrowserRouter as Router ,Route ,Link ,NavLink ,Redirect,Switch} from 'react-router-dom';
import './zhuce.css'

class Zhuce extends Component {
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
                <Zdi />
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
            <NavLink to="/denglu">
                <div className="ds">
                    <p>返回</p>
                </div>
            </NavLink>
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
                    <p>注册</p>
                    <NavLink to="/denglu"><p className="dyi">我有账号去登录</p></NavLink>
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
            <div className="zipt">
                <div>
                    <input type="text"  placeholder="请输入用户名" />
                </div>
                <div>
                    <input type="password" placeholder="请输入密码"  />
                </div>
                <div>
                    <input className="ipt3" type="password" placeholder="请输入密码"  />
                    <p>获取验证码</p>
                </div>
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
            <NavLink to="/denglu">
            <div className="dbtn">
               完成注册
            </div>
            </NavLink>
        )
    }
}

class Zdi extends Component {
    constructor(){
     super()
    }
    
    render() {
        return(
            <div className="zdi">
                <p>点击完成注册即表示同意<span>《Web用户注册协议》</span></p>
                <NavLink to="/fourhome"><p className="zdip2">我先逛逛,稍后注册</p> </NavLink>
            </div>
        )
    }
}



export  default  Zhuce