import React, { Component } from 'react';
import {  BrowserRouter as Router ,Route ,Link ,NavLink ,Redirect,Switch} from 'react-router-dom';
import './fengxiang.css'

class Fengxiang extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>
               <Tou />
               <Xia />
            </div>
        )
    }
}

class Tou extends Component{
    constructor(){
        super()
    }
    render(){
        return(

               <div className="tou">
                <NavLink to="/muyin"><p>返回</p></NavLink>
                <p>分享</p>
                <p>    </p>
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
               <div className="xias">
                   <p className="p">分享到:</p>
                   <div className="qq">
                       <p>QQ</p>
                       <NavLink to="/weixin"><p>微信</p></NavLink>
                       <p>朋友圈</p>
                   </div>
               </div>
        )
    }
}







export  default  Fengxiang


