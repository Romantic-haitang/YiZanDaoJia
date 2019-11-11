import React, { Component } from 'react';
import {  BrowserRouter as Router ,Route ,Link ,NavLink ,Redirect,Switch} from 'react-router-dom';
import './shiping.css'

class Core2 extends Component{
    constructor(){
        super()
    }
    render(){
        let dataa=[
            {
                img:'4.jpg',
                title: "overflow:hidden",
                text: "在父级用",
                txt: "如果父级的第一个子级是块元素，并使用了margin或margin-top"
            },
            {
                img:'5.jpg',
                title: "overflow:hidden",
                text: "在父级用",
                txt: "父级的第一个子级使用浮动后脱离文档流，父级无法检测到子级高度无法被撑开，导致布局有问题"         
            },
            {
                img:'6.jpg',
                title: "overflow:hidden",
                text: "在父级用",
                txt: "溢出父级的内容，将隐藏"
            },
            {
                img:'7.jpg',
                title: "样式",
                text: "在哪里用",
                txt: "作用是什么？"
            }
        ]
        return(
            <div>
                <One />
                <Onedi />
                <Ship />
                <Biaoti />
                <Gereng />
                {
                    dataa.map((el,idx)=><Tw {...el} key={idx}  />)
                }
            </div>
        )
    }
}

class One extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className="one2">
                <NavLink to="/guanzhu"><p>返回</p></NavLink>
                <p>web前端项目</p>
                <p>分享</p>
            </div>
        )
    }
}

class Onedi extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className="onedi"></div>
        )
    }
}

class Ship extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className="ship">
                <img src={require("../img/ship.png")} alt=""/>
            </div>
        )
    }
}

class Biaoti extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className="ship_zi">
                <h1>web前端项目——布局小课堂</h1>
                <p>发布日期:2019-4-18</p>
                <p>关于网页的布局</p>
            </div>
        )
    }
}

class Gereng extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            
            <div className="ship_geren">
                <NavLink to="/yonghu">
                <div className="geren">
                    <div className="lefts">
                        <img src={require("../img/7.jpg")} />
                    </div>
                    <div className="top">
                        <p>undefind</p>
                        <p>关注</p>
                    </div>
                    <div className="bottom">
                        <p>粉丝：939496</p>
                        <p>简介：找不到该文件、找不到该东西、反正就是找不到</p>
                    </div>
                </div>
                </NavLink>
                <div className="gehang"></div>
                <div className="pl">
                    <p>评论</p>
                    <p>查看更多></p>
                </div>
            </div>
        )
    }
}

class Tw extends Component{
    constructor(){
        super()
    }
    render(){
        let {img,title,text,txt} = this.props;
        let src = require('../img/'+img);
        return(
            <div className="tuwen">
                <img src={src}/>
                <div className="rights">
                    <p>{title}</p>
                    <p>{text}</p>
                    <p>{txt}</p>
                </div>
            </div>
        )
    }
}













export  default  Core2