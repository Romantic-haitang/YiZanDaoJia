import React, { Component } from 'react';
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';
import { NavLink } from "react-router-dom"
import "antd-mobile/dist/antd-mobile.css"
class Healthinfo extends Component {
    constructor() {
        super();
        this.state={
            infos:[
                {
                    titles:"药物过敏史",
                    mesage:"青霉素,磺胺,链霉素"
                },
                {
                    titles:"疾病史",
                    mesage:"高血压 确诊时间:2017-06-13",
                    mesage1:"冠心病 确诊时间:2018-13-13"
                },
                {
                    titles:"手术史",
                    mesage:"腰椎狭窄手术 时间:2019-01-23"
                },
                {
                    titles:"外伤史",
                    mesage:"无"
                },
                {
                    titles:"输血史",
                    mesage:"无"
                },
                {
                    
                    titles:"家族史",
                    mesage:"父亲：高血压",
                    mesage1:"兄弟姐妹：冠心病"
                },
                {
                    titles:"遗传史",
                    mesage:"过敏性哮喘"
                }
            ]
        }
    }
    render() {
        var listitem=this.state.infos.map((item,index)=>{
            return <HealthItem info={item} key={index}/>
        })
        return (
            <div>
                {listitem}
            </div>

        )
    }
}

class HealthItem extends Component{
    constructor(){
        super()
    }
    render(){
        let info=this.props.info
        return(
            <div>
                <WingBlank size="lg">
                    <WhiteSpace size="lg" />
                    <Card>
                        <Card.Header
                            title={info.titles}
                            thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                            extra={<span></span>}
                        />
                        <Card.Body>
                            <div>
                             <p>{info.mesage}</p>
                             <p>{info.mesage1}</p>
                            </div>
                        </Card.Body>
                    </Card>
                    <WhiteSpace size="lg" />
                </WingBlank>
            </div>
        )
    }
}

export default Healthinfo