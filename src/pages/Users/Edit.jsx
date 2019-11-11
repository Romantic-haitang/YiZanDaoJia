import React, { Component } from 'react';
import "./Edit.css";


class Edit extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className="qwq">
                <div className ="qw">
                    昵称：<input type="text" className="wq" />
                </div>
                <div className="kuai">
                    <p className="tx">更改头像</p>
                    <div className="txzp"></div>
                   
                </div>
                <p className="djtx">点击头像，上传新头像，头像不超过3M</p>
            </div>
        )
    }
}

export default Edit;