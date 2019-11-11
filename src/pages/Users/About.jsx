import {BrowserRouter as Router,Route,NavLink,Link} from "react-router-dom"
import React, { Component } from 'react';
import "./About.css";

class About extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className="fushfuah">
                 <div className="qqw">
                     <Link to="/User"> <p className="ysa">返回</p></Link>
                <p className="yss">我的关注</p>
              </div>

              <div style={{backgroundColor:"white",overflow:"hidden",position:"relative"}}>
                    <div style={{position:"absolute",width:"100px",height:"100px",backgroundColor:"yellow",borderRadius:"10px",top:"100px",left:"110px"}}>
                    <img src= {require("../../img/timg.jpg")} style={{width:"100%",height:"100%",borderRadius:"5px"}}/>
                    </div>
                    <p style={{marginTop:"210px",textAlign:"center"}}>医站到家</p>
                    <p style={{marginTop:"20px",textAlign:"center"}}>当前版本：1.1.0</p>
                
                    <div style={{height:"40px",backgroundColor:"silver", marginTop:"10px",borderBottom:"1px solid slategrey"}}>
                        <p style={{fontSize:"18px",float:"left",lineHeight:"40px"}}>问题反馈</p>
                        <p style={{float:"right",lineHeight:"40px",fontSize:"20px"}}>></p>
                    </div>
            
                    <div style={{height:"40px",backgroundColor:"silver"}}>
                        <p style={{fontSize:"18px",float:"left",lineHeight:"40px"}}>问题反馈</p>
                        <p style={{float:"right",lineHeight:"40px",fontSize:"20px"}}>1.2.1></p>
                    
                    </div>
              </div>
              
            </div>
        )
    }
}
export default About;