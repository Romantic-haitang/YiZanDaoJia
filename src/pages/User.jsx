import React, { Component } from 'react';
import {BrowserRouter as Router,Route,NavLink,Link} from "react-router-dom"
import Toux from "./Users/Title.jsx";
import Options from "./Users/Option.jsx";
import Signout from "./Users/Signout.jsx";
import Modify from "./Users/Modify.jsx";
import Doctor from "./Users/Doctor.jsx";


import "./User.css";


class User extends Component{
    constructor(){
        super();
        this.state={};
    }
    render(){
    
        return(
         
            <div className ="qq">
         
                  
                    {/*编辑资料入口组件 Modify */}        
                        
                    <Link to="/Modifyingdata"> <Modify /> </Link>
                    
                    {/*  头部组件 Toux*/}
                    <Toux />
                    {/* 选项组件*/}
                    <div className="ll">
                    <Link to="/Myfamily"><Options a = "我的家庭" /></Link>
                     <Link to="/Collection">  <Options a = "我的收藏" /></Link> 
                     <Link to="/Mynews">  <Options a = "我的消息" /></Link> 
                     <Link to="/Myconcern">     <Options a = "我的关注" /></Link> 
                     <Link to="/About">    <Options a = "关于" /></Link>
                
                    </div>
                    {/* 退出登录组件 */}
                    <Signout nn="退出登陆" />
              
                
            </div>
          
       
        )
    }
}



export default User