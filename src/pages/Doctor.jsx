import React, { Component } from 'react';
import "./Doctor.css";
import Windows from "./Warning/Windows.jsx";
class Doctor extends Component{
    constructor(){
        super();
        this.aa = this.aa.bind(this);
    }
    aa(e){
        console.log(e)
    }
    render(){
        
        return(
            <div className="doctors">
               证件类型<select className="ipt"  onChange={this.aa}>
                    <option  >请选择用于家庭医生签约的证件类型</option>
                    <option>身份证</option>
                    <option>户口薄</option>
                    <option>护照</option>
                    <option>其它证件</option>
                </select><br />
                证件号 <input style={{marginLeft:"20px"}} className="ipt" type="text" placeholder="请选择用于家庭医生签约的证件号" onChange={this.aa} /><br />
                手机号 <input style={{marginLeft:"20px"}} className="ipt" type="text" placeholder="请选择用于家庭医生签约的手机号"   onChange={this.aa}/><br />
                验证码 <input style={{marginLeft:"20px"}} className="ipt" type="text" placeholder="请输入验证码"  onChange={this.aa} /><br />
                称呼 <input style={{marginLeft:"34px"}} className="ipt" type="text" value="弱水三千"  onChange={this.aa} /><br />
                <div className="head_logos">
                    <div>添加头像:</div>
                    <div className="files">+
                    <input className="fil" type="file"  onChange={this.aa} />
                    </div>
                    <div>点击上传头像</div>
                </div>
                <br />
                <Windows />
            </div>
           
        )
    }
}

export default Doctor