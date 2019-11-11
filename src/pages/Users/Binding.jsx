import React, { Component } from 'react';
import {BrowserRouter as Router,Route,NavLink,Link} from "react-router-dom"
import "./Binding.css";
import Myfamily from "./Myfamily.jsx";



class Binding extends Component{
    constructor(){
        super()
        this.sf = this.sf.bind(this);
        // console.log(this)
    }
    sf(e){
        console.log(e.target.value);
    }
    render(){
        return(
            <div>
            <div className="tjl">
                
                <div className="">
                  <Link to="/Myfamily"><p className="ysa">返回</p></Link>
                <p className="yss">我的家庭</p>
              </div>
              <div className="doctors">
                证件类型<select className="ipt"  onChange={this.sf} >
                        <option>请选择用于家庭医生签约的证件类型</option>
                        <option>身份证</option>
                        <option>户口薄</option>
                        <option>护照</option>
                        <option>其它证件</option>
                    </select><br /> 
                    证件号 <input style={{marginLeft:"20px"}} className="ipt" type="text" placeholder="请选择用于家庭医生签约的证件号"  onChange={this.sf} /><br />
                    手机号 <input style={{marginLeft:"20px"}} className="ipt" type="text" placeholder="请选择用于家庭医生签约的手机号"  onChange={this.sf} /><br />
                    验证码 <input style={{marginLeft:"20px"}} className="ipt" type="text" placeholder="请输入验证码"  onChange={this.sf} /><br />
                    称呼 <input style={{marginLeft:"34px"}} className="ipt" type="text" value="弱水三千"  onChange={this.sf} /><br />
                    <div className="head_logos">
                        <div>添加头像:</div>
                        <div className="files">+
                        <input className="fil" type="file"  onChange={this.sf}  />
                        </div>
                        <div>点击上传头像</div>
                    </div>
                    <br />
                    <button className="sub">绑定</button>
                </div>
                </div>
            </div>
        )
    }
}
class Bindings extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>
           
             
               <div className="qqw">
                     <Link to="/User"> <p className="ysa">返回</p></Link>
                <p className="yss">我的家庭</p>
            </div>
            
            </div>
        )
    }
    }


export default Binding