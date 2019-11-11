import React, { Component } from 'react';
import "./Myinfo.css"
class Myinfo extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="personal">
                <div className="headlogo">
                    <img src={require("../../images/5.jpg")} />
                </div>
                <div className="myinfo">
                    <p>无心</p>
                    <p>年龄：18 血型：HR阴性血</p>
                    <p>民族：维吾尔族</p>
                </div>
            </div>

        )
    }
}

export default Myinfo