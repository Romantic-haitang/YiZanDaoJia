import React, { Component } from 'react';
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';
import "antd-mobile/dist/antd-mobile.css"
import "./Article.css"
import dir from '../images/4.jpg';


class Article extends Component {
    constructor() {
        super();
        this.state = {
            articles:[
                {
                    art:"8个月大的宝宝辅食中加了这几种食物竟然发生了这种事情，宝宝妈妈后悔死了",
                    pic: require('../images/3.jpg'),
                    logo:require('../images/2.jpg'),
                    names:"医博士育儿经",
                    dzs:"1234",
                    looks:"3456"
                },
                {
                    art:"8个月大的宝宝辅食中加了这几种食物竟然发生了这种事情，宝宝妈妈后悔死了",
                    pic: require('../images/3.jpg'),
                    logo:require('../images/2.jpg'),
                    names:"医博士育儿经",
                    dzs:"1234",
                    looks:"3456"
                },
                {
                    art:"8个月大的宝宝辅食中加了这几种食物竟然发生了这种事情，宝宝妈妈后悔死了",
                    pic:require('../images/3.jpg'),
                    logo:require('../images/2.jpg'),
                    names:"医博士育儿经",
                    dzs:"1234",
                    looks:"3456"
                },
                {
                    art:"8个月大的宝宝辅食中加了这几种食物竟然发生了这种事情，宝宝妈妈后悔死了",
                    pic:require('../images/3.jpg'),
                    logo:require('../images/2.jpg'),
                    names:"医博士育儿经",
                    dzs:"1234",
                    looks:"3456"
                },
                {
                    art:"8个月大的宝宝辅食中加了这几种食物竟然发生了这种事情，宝宝妈妈后悔死了",
                    pic:require('../images/3.jpg'),
                    logo:require('../images/2.jpg'),
                    names:"医博士育儿经",
                    dzs:"1234",
                    looks:"3456"
                }
            ]
        };
    }
    render() {
        var list=this.state.articles.map((item,index)=>{
            return <Artitme articl={item} key={index}/>
        })
        return (
            <div>
                {list}
            </div>
        )
    }
}

class Artitme extends Component{
    constructor(){
        super()
    }
    render(){
        let obj = this.props.articl;
        return(
            <div>
               <Card full>                    
                    <Card.Body>
                        <div>
                          <p className="article_con">{obj.art}</p>
                          <img className="pics" src={obj.pic} />
                          <div className="author">
                            <img className="head_logo" src={obj.logo} />
                            <div className="mysname">
                                <p>{obj.names}</p>
                                <div className="dz">
                                    <div>注</div>
                                    <div className="cs">
                                        <span>{obj.dzs}&nbsp;&nbsp;&nbsp;</span>
                                        <span>{obj.looks}&nbsp;&nbsp;&nbsp;</span>
                                    </div>
                                </div>
                            </div>
                          </div>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
export default Article