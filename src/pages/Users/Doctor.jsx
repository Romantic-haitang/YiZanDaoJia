import React, { Component } from 'react';
import "./Doctor.css"
import {BrowserRouter as Router,Route,NavLink,Link} from "react-router-dom"

class Doctor extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="hhahs">
            

                <div className="doctors">
                证件类型<select className="ipt">
                        <option selected="selected">请选择用于家庭医生签约的证件类型</option>
                        <option>身份证</option>
                        <option>户口薄</option>
                        <option>护照</option>
                        <option>其它证件</option>
                    </select><br />
                    证件号 <input style={{marginLeft:"20px"}} className="ipt" type="text" placeholder="请选择用于家庭医生签约的证件号" /><br />
                    手机号 <input style={{marginLeft:"20px"}} className="ipt" type="text" placeholder="请选择用于家庭医生签约的手机号" /><br />
                    验证码 <input style={{marginLeft:"20px"}} className="ipt" type="text" placeholder="请输入验证码" /><br />
                    称呼 <input style={{marginLeft:"34px"}} className="ipt" type="text" value="弱水三千" /><br />
                    <div className="head_logos">
                        <div>添加头像:</div>
                        <div className="files">+
                        <input className="fil" type="file" />
                        </div>
                        <div>点击上传头像</div>
                    </div>
                    <br />
                    <button className="sub">绑定</button>
                </div>
            </div>
        )
    }
}

export default Doctor