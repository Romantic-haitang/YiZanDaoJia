import React, { Component } from 'react';
import "./Notice.css"
class Notice extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
                 <div className="notice">
                <div>医站公告</div>
                <div>图读懂："互联网+医辽健康"全民服务图读懂："互联网+医辽健康"全民服务图读懂："互联网</div>
                </div>
                <div className="bt">健/康/资/讯/推/荐</div>
            </div>
           
        )
    }
}

export default Notice