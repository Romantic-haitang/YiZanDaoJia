import React, { Component } from 'react';
import {BrowserRouter as Router,Route,NavLink,Link} from "react-router-dom";
import "./Collection.css";


class Collection extends Component{
    constructor(){
        super()
        this.state = {
            objs:[{
                a:"母乳喂养的正确打开方式",
                b:"1分钟",
                c:require("../../img/3.png")
            },{
                a:"宝宝辅食中一定不能加的食物",
                b:"2分钟",
                c:require("../../img/2.png")
            },{
                a:"辣妈训练营————产后收腰小课堂",
                b:"2分钟",
                c:require("../../img/1.png")
            },{
                a:"带着宝宝做手工",
                b:"3分钟",
                c:require("../../img/timg.jpg")
            },{
                a:"那些妈妈们用了都说好的物品",
                b:"5分钟",
                c:require("../../img/6school.png")
            },{
                a:"那么多绿值，偏偏选了这个！！",
                b:"5分钟",
                c:require("../../img/1.png")
            }
        ]
        }
    }
    render(){
        let infoss = this.state.objs.map((itme,index)=>{
            return <Collectiona info = {itme} key = {index} />
        })
        return(
            <div className="cxk">
                <div className="qqw">
                     <Link to="/User"> <p className="ysa">返回</p></Link>
                     <p className="yss">我的收藏</p>
              </div>
              <div className="srf">
                  <p>资讯</p>
              </div>
              {infoss}
             
            </div>
        )
    }
}
class Collectiona extends Component{
    constructor(){
        super()
    }
    render(){
        let info = this.props.info;
        return(
            <div className="cxka">
            <p className="neir">{info.a}</p>
            <p className="shijian">{info.b}</p>
            <div className="tupa"> 
                <img src={info.c} alt=""/>
            </div>
      </div>
        )
    }
}

export default Collection;