import React, { Component } from 'react';
import {  BrowserRouter as Router ,Route ,Link ,NavLink ,Redirect,Switch} from 'react-router-dom';
import './guanzhu.css'

class Guanzhu extends Component{
    constructor(){
        super()
       
    }
    render(){
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
                <Head />
                <Title />
                <Hanggao />
                {
                    dataa.map((el,idx)=><Bodys {...el} key={idx}  />)
                }
                <Hrs />
                <Heights />
 
            </div>
          
        )
    }
}

class Hanggao extends Component {
    constructor(){
     super()
    }
    
    render() {
        return(
            <div className="hanggao"></div>
        )
    }
}

class Head extends Component {
    constructor(){
     super()
    }
    
    render() {
        return(
            <NavLink to="/shousuo"><div className="head">搜索你感兴趣的内容</div></NavLink>
        )
    }
}

class Title extends Component {
    constructor(){
     super()
    }
    
    render() {
        return(
            <ul className="uls">
                <li>推荐</li>
                <li>关注</li>
                <li>视频</li>
                <li><NavLink to="/muyin">母婴</NavLink></li>
                <li>高血压</li>
                <li>糖尿病</li>
            </ul>
        )
    }
}

class Bodys extends Component {
    constructor(){
     super();
     this.state ={
        show : false
    }
    }
    handleChange=(e)=>{
        this.setState({
            show:this.state.show?false:true
        })
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
                        <p className="dian" onClick={this.handleChange} >...</p>
                        {this.state.show?<Tanchu / >:""}
                        <NavLink to="/pinglun"><p className="pinlun">评论:{pinlun}</p></NavLink>
                        <p className="zan">赞:{zan}</p>
                    </div>
                </div>
                
           
        )
    }
}



class Hrs extends Component {
    constructor(){
     super()
    }
    
    render() {
        return(
           <hr />
        )
    }
}

class Heights extends Component {
    constructor(){
     super()
    }
    
    render() {
        return(
           <div className="height"></div>
        )
    }
}

class Tanchu extends Component {
    constructor(){
     super();

  
    }
    

    render() {
        return(
             <div className="tanchu">
               <p className="tfx">分享：</p>
               <div className="tdiv1">
                   <p>QQ</p>
                   <p>微信</p>
                   <p>朋友圈</p>
               </div>
               <p className="tfx">其它：</p>
               <div className="tdiv1">
                   <p>收藏</p>
                   <p>不感兴趣</p>
               </div>
               <NavLink to="/muyin"><p className="tqx" >取消</p></NavLink>

           </div>
        )
    }
}





export  default  Guanzhu


