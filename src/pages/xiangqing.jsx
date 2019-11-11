import React, { Component } from 'react';
import {  BrowserRouter as Router ,Route ,Link ,NavLink ,Redirect,Switch} from 'react-router-dom';
import './xiangqing.css'

class Core extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>
                <One left="返回" center="HTML知识点" right="分享" />
                <Onedi />
                <Two />
            </div>
        )
    }
}

class One extends Component{
    constructor(){
        super()
    }
    render(){
        let {left,center,right} = this.props;
        return(
            <div className="one">
                <NavLink to="/muyin"><p>{left}</p></NavLink>
                <p>{center}</p>
                <NavLink to="/fengxiang"><p>{right}</p></NavLink>
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

class Two extends Component{
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
            <div className="two">
                <img src={require("../img/6.jpg")} />
                <h1>数组去重的写法有那些</h1>
                <p className="title">来自自我总结: 2019-4-17</p>
                <p className="txt">数组去重满分写法:用Array.prototype.函数名。animation动画transtion过渡translate平移rotate旋转Scale缩放@keyframes帧动画position定位relative相对定位absolute绝对定位fixed固定定位static静态的infinite无限的linear-gradient线性渐变radial-gradient径向渐变
                    box-reflet倒影shadow阴影outline外廓animation:name duration linear delay infinite forwards;H5的意义：标签语义化。语义化的好处是什么？1、提升SEO。2、简洁代码，在没有css的情况下，对页面结构一目了然。background-repeat背景图片重复background-on-repeat不重复,如何解决塌陷？
                    1、在父级使用overflow:hidden,2、在父级使用border，3、在父级使用padding-top。如何清楚浮动?1、直接给父级一个高度,2、overflow:hidden。
                    弹性合模型:justify-content:space-around;n个盒子在个自的空间中居中,justify-content:space-between;两端居左居右居中，中间等间距align-items:center;水平居中,flex-grow分配剩余空间。a的伪类顺序:Link、Visited、hover、active;行标签的特点：1、同排显示遇父级边界换行，2、不支持上下外边距，
                    3、不支持设置宽高，4、不能正常显示上下内边距，5、换行解析，5、使用浮动、绝对定位、相对定位后支持所有CSS样式。描述塌陷问题：如果父级的第一个子级是块元素，并使用了margin或margin-top。为什么要清楚浮动？父级的第一个子级使用浮动后脱离文档流，父级无法检测到子级高度无法被撑开，导致布局有问题。解释怪异盒模型：box-sizing与正常盒模型不同
                    使用padding或者border之后不会撑开父级盒子的宽高,内嵌于其身。
                </p>
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
                {
                    dataa.map((el,idx)=><Tuwen {...el} key={idx}  />)
                }
            </div>
        )
    }
}


class Tuwen extends Component{
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

export  default  Core