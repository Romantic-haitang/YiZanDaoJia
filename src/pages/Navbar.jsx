import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import { NavLink} from "react-router-dom"
import "antd-mobile/dist/antd-mobile.css"
import "./Navbar.css"
class Navbar extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
                <NavBar
                    mode="light"
                    icon={<NavLink to="/fourhome/index"><Icon type="left" /></NavLink>}
                    onLeftClick={() => console.log('onLeftClick')}
                    rightContent={
                        [
                        // <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                        // <Icon key="1" type="ellipsis" />,
                        <Words key="1" type="ellipsis" {...this.props}/>
                      ]}
                    >{
                        this.props.title
                    }</NavBar>
            </div>
           
        )
    }
}
class Words extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className="qh">{ this.props.notShow ? '' : '切换家庭成员'}</div>
        )
    }
}

export default Navbar