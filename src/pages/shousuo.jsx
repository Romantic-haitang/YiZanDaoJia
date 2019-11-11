import React, { Component } from 'react';
import {  BrowserRouter as Router ,Route ,Link ,NavLink ,Redirect,Switch} from 'react-router-dom';
import './shousuo.css'


class Shousuo extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>
               <Syi />
               <Dj />
               <Lishi />
               <Jianpan />
            </div>
        )
    }
}

class Syi extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className="ss">
               <NavLink to="/guanzhu"><p className="sfh">返回</p></NavLink>
               <div className="sss">
                  <p> 搜索你感兴趣的内容</p>
                </div>
               <p className="sbtn">搜索</p>
            </div>
        )
    }
}

class Dj extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className="dj">
               <p className="djdzs">大家都在搜
                
               </p>
               <div className="djz">
                   <p>塌陷问题</p>
                   <p>浮动问题</p>
                   <p>弹性盒模型</p>
                   <p>定位问题</p>
               </div>
            </div>
        )
    }
}

class Lishi extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className="Lishi">
               <div className="djdzs">
                    <p className="ls">历史搜索 </p>
                    <p className="qk">清空历史 </p>
               </div>
               <div className="djz">
                   <p>js基础语法</p>
                   <p>DOM语法</p>
                   <p>BOM语法</p>
                   <p>数组与字符串</p>
               </div>
            </div>
        )
    }
}

class Jianpan extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className="jianpan">
                <img src={require("../img/jianpan.png")} alt=""/>
            </div>
           
        )
    }
}







export  default  Shousuo