import React, { Component } from 'react';
import {  BrowserRouter as Router ,Route ,Link ,NavLink ,Redirect,Switch} from 'react-router-dom';
import './pinglun.css'


class Pinglun extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>
                <Ptop />
                <Pbody />
                <Pjp />
                
            </div>
        )
    }
}

class Ptop extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className="pshang">
                <NavLink to="/guanzhu"><p>返回</p></NavLink>
                <p>评论</p>
                <p>发送</p>
            </div>
        )
    }
}

class Pbody extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className="nr">
                在这里输入内容...
            </div>
        )
    }
}



class Pjp extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className="jp">
             <img src={require("../img/jianpan.png")} alt=""/>
            </div>
       
        )
    }
}





export  default  Pinglun