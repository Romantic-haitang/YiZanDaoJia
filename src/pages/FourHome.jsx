import React from 'react';
// 导入： 首页、 测测 、 资讯 、 我的 路由
import {  BrowserRouter as Router ,Route ,Link ,NavLink ,Redirect,Switch} from 'react-router-dom';
import Index  from './Index.jsx';
import Cece  from './Cece.jsx';
import Message  from './Message.jsx';
import User from './User.jsx'


class FourHome extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div>
            <Switch>
                <Route path="/fourhome/message" component={ Message }></Route>
                <Route path="/fourhome/index" component={ Index }></Route>
                <Route path="/fourhome/cece" component={ Cece }></Route>
                <Route path="/fourhome/user" component={User}></Route>
                <Redirect exact from="/fourhome/" to="/fourhome/index"></Redirect>
            </Switch>
                

                <div className="App">
                    <footer id="footer">
                        <div  data-type="custom" className="footer-tab-custom"><NavLink to="/fourhome/index">首页</NavLink></div>
                        <div  data-type="search" className="footer-tab-search"><NavLink to="/fourhome/cece">测测</NavLink></div>
                        <div  data-type="mine" className="footer-tab-mine"><NavLink to="/fourhome/message">资讯</NavLink></div>
                        <div  data-type="mine" className="footer-tab-mine"><NavLink to="/fourhome/user">我的</NavLink></div>
                    </footer>
                </div>
            </div>
        )
    }
}

export default FourHome;