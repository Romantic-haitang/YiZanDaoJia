import React, { Component } from 'react';
import {  BrowserRouter as Router ,Route ,Link ,NavLink ,Redirect,Switch} from 'react-router-dom';
import './yonghu.css'

class Yonghu extends Component {
    constructor(){
     super()
    }
    
    render() {
        let dataa=[
            {
                img:'4.jpg',
                txt:'library(库)：小而巧的库，只提供了特定的API；优点就是船小好掉头，可以很方便的从一个库切换到另一个的库；但是代码几乎不会改变。',
                names: "龙珠",
                borders: "已关注",
                zan:"13579",
                pinlun:"24680"   
            },
            {
                img:'5.jpg',
                txt:'Framework(框架):大而全的是框架；框架提供了一整套的解决方案；所以，如果在项目中间，想切换到另外的框架，是比较困难的。',
                names: "海贼王",
                borders: "已关注",
                zan:"88888",
                pinlun:"66666"            
            },
            {
                img:'6.jpg',
                txt:'什么是组件化：是从UI界面的角度来进行分析的；把一些可复用的UI元素，抽离为单独的组件；便于项目的维护和开发。',
                names: "火影",
                borders: "已关注",
                zan:"12414",
                pinlun:"32414"   
            },
            {
                img:'7.jpg',
                txt:'组建化的好处：随着项目规模的增大，手里的组件越来越多；很方便就能把现有的组件，拼接为一个完整的页面。',
                names: "柯南",
                borders: "已关注",
                zan:"54431",
                pinlun:"13212"   
            }
        ]
        return(
            <div>
                <Yg />
                {
                    dataa.map((el,idx)=><Bodys {...el} key={idx}  />)
                }
            </div>
        )
    }
}

class Yg extends Component {
    constructor(){
     super()
    }
    
    render() {
        return(
            <div className="yg">
                <div className="tops">
                    <NavLink to="/guanzhu"><p className="fh">返回</p></NavLink>
                    <p className="fx">分享</p>
                    <p className="gz">+关注</p>
                </div>
                <div className="body">
                <NavLink to="/denglu"><img src={require("../img/7.jpg")} alt=""/></NavLink>
                </div>
                <h1>Web前端项目</h1>
                <p>用的人：很多</p>
                <p>简介:第一次做，比以前写界面还麻烦些！可能是不会复用吧!</p>
            </div>
        )
    }
}


class Bodys extends Component {
    constructor(){
     super()
    }
    
    render() {
        let {txt,img,names,borders,pinlun,zan} = this.props;
        let src = require('../img/'+img);
        
        return(
            
                <div className="warp">
                    <p>{txt}</p>
                    <NavLink to="/shiping"><img src ={src}/></NavLink>
                    <div className="items">
                        <img className="img" src={src}/>
                        <div className="text">
                            <p className="names">{names}</p>
                            <p className="borders">{borders}</p>
                        </div>
                        <p className="dian">...</p>
                        <p className="pinlun">评论:{pinlun}</p>
                        <p className="zan">赞:{zan}</p>
                    </div>
                </div>
                
           
        )
    }
}









export  default  Yonghu





