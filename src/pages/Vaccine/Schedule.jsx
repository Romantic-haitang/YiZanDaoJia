import React, { Component } from 'react';
import "./Schedule.css"
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';
import { NavLink } from "react-router-dom"
import "antd-mobile/dist/antd-mobile.css"
class Schedule extends Component {
    constructor() {
        super();
        this.state = {
            infos: [
                {
                    titles: "卡介苗",
                    mesage: "宝宝出生第一针，预防结核性脑膜炎"
                },
                {
                    titles: "乙肝疫苗(HepB)第一剂",
                    mesage: "阻断乙肝传播，不让宝宝成为病毒携带者"
                },
                {
                    titles: "乙肝疫苗(HepB)第二剂",
                    mesage: "阻断乙肝传播，不让宝宝成为病毒携带者"
                },
                {
                    titles: "注射脊灰病毒灭活疫苗(IPV)",
                    mesage: "预防小儿麻痹症的灭活疫苗，替代了"
                },
                {
                    titles: "五联疫苗 第一剂",
                    mesage: "一针防五病，还可减少八次接种"
                },
                {

                    titles: "Hib结合疫苗",
                    mesage: "多数发达国家纳入计划免疫，我国属于",
                    mesage1: "兄弟姐妹：冠心病"
                },
                {
                    titles: "口服脊灰病毒灭活疫苗(OPV糖丸)",
                    mesage: "预防小儿麻痹的减毒疫苗，逐渐被"
                },
                {

                    titles: "五联疫苗 第一剂",
                    mesage: "一针防五病，还可减少八次接种"
                },
                {
                    titles: "Hib结合疫苗(第二剂)",
                    mesage: "多数发达国家纳入计划免疫，我国属于"
                }
            ]
        }
    }
    render() {
        var listitem = this.state.infos.map((item, index) => {
            return <Scheduleitem info={item} key={index} />
        })
        return (
            <div>
                {listitem}
            </div>

        )
    }
}

class Scheduleitem extends Component {
    constructor() {
        super()
    }
    render() {
        let info = this.props.info
        return (
            <div>
                <WhiteSpace size="lg" />
                <Card full>
                    <Card.Header
                        title={info.titles}
                        thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                        extra={<span></span>}
                    />
                    <Card.Body>
                    <div className="message">
                              <p>{info.mesage}</p>
                              <p>{info.mesage1}</p>
                             </div>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Schedule