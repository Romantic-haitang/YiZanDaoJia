import React, { Component } from 'react';
import {  BrowserRouter as Router ,Route ,Link ,NavLink ,Redirect,Switch} from 'react-router-dom';
import './muyin.css'

class Muyin extends Component{
    constructor(){
        super()
    }
    render(){
        let dataa=[
            {
                img:'4.jpg',
                text: "函数里面嵌套函数",
                txt: "1分钟"
            },
            {
                img:'5.jpg',
                text: "局部变量持久化",
                txt: "2分钟"
            },
            {
                img:'6.jpg',
                text: "缺点:占内存",
                txt: "3分钟"
            },
            {
                img:'7.jpg',
                text: "以上就是闭包的概念",
                txt: "4分钟"
            },
            {
                img:'4.jpg',
                text: "数组有那些方法?",
                txt: "5分钟"
            },{
                img: '5.jpg',
                text: "数组去重indexOf() 返回-1",
                txt: "6分钟"
            },{
                img:"6.jpg",
                text: "浏览器嗅探这么写?",
                txt: "7分钟"
            },{
                img:"7.jpg",
                text: "navigator.uesrAgent",
                txt:"8分钟"
            }


        ]
        return(
            <div>
               <Names />
                <Texts />
                {
                    dataa.map((el,idx)=><Items {...el} key={idx}  />)
                }
                
            </div>
        )
    }
}


class Names extends Component{
    constructor(){
        super()
    }
    render(){
        return(

            <NavLink to="/shousuo"><div className="head">搜索你感兴趣的内容</div></NavLink>

        )
    }
}

class Texts extends Component{
    constructor(){
        super()
    }
    render(){
        return(

               <ul className="uls">
                <li>推荐</li>
                <li><NavLink to="/guanzhu">关注</NavLink></li>
                <li>视频</li>
                <li>母婴</li>
                <li>高血压</li>
                <li>糖尿病</li>
            </ul>

        )
    }
}

class Items extends Component{
    constructor(){
        super()
    }
    render(){
        let {img,text,txt} = this.props;
        let src = require('../img/'+img);
        return(
            <NavLink to="/xiangqing">
            <div className="items">
                <div className="left">
                    <p>{text}</p>
                    <p>{txt}</p>
                </div>
                <img src={src} alt=""/>
            </div>
            </NavLink>   

        )
    }
}



export  default  Muyin