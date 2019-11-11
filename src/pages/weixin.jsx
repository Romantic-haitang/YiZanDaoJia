import React, { Component } from 'react';
import {  BrowserRouter as Router ,Route ,Link ,NavLink ,Redirect,Switch} from 'react-router-dom';
import './weixin.css'

class Weixin extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>
               <Shang />
               <Neirong />
               <Neirong2 />
               <Xia />
            </div>
        )
    }
}

class Shang extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className="shang">
               <NavLink to="/fengxiang"><p>返回</p></NavLink>
               <p>Web前端高级工程师</p>
               <p className="diandian">...</p>
            </div>
        )
    }
}

class Neirong extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className="neirong">
                <div className="n_left">
                    <p className="n_center">2019-4-18 15:11</p>
                    <div className="lt">
                        <img src={require("../img/5.jpg")} alt=""/>
                        <div className="shanjiao"></div>
                        <div className="kuang">
                            <p>在吗？</p>    
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class Neirong2 extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className="neirong2">
                <div className="n_left">
                    <p className="n_center">2019-4-18 15:48</p>
                    <div className="lt">
                        <img src={require("../img/7.jpg")} alt=""/>
                        <div className="shanjiao"></div>
                        <div className="kuang">
                            <p>她睡着了！</p>    
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class Xia extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className="xia">
                <div className="shuru"></div>
                <p className="btn">发送</p>
            </div>
        )
    }
}



export  default  Weixin