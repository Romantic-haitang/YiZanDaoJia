import React, { Component } from 'react';
import "./Messages.css";
class Follow extends Component {
    constructor() {
        super()
        this.state = {
            follows: [{
                tpic: require("../.././img/timg.jpg"),
                tname: "育儿精选",
                tzh: "账号简介：XXXXXXXX"
            },
            {
                tpic: require("../.././img/1.png"),
                tname: "育儿精选",
                tzh: "账号简介：XXXXXXXX"
            },
            {
                tpic: require("../.././img/2.png"),
                tname: "育儿精选",
                tzh: "账号简介：XXXXXXXX"
            },
            {
                tpic: require("../.././img/timg.jpg"),
                tname: "育儿精选",
                tzh: "账号简介：XXXXXXXX"
            },
            {
                tpic: require("../.././img/3.png"),
                tname: "育儿精选",
                tzh: "账号简介：XXXXXXXX"
            },
            {
                tpic: require("../.././img/6school.png"),
                tname: "育儿精选",
                tzh: "账号简介：XXXXXXXX"
            },
           

            ]
        }
    }
    render() {
        let followlist = this.state.follows.map((itme, index) => {
            return <FollowItem follow={itme} key={index} />
        })
        return (
            <div style={{marginTop:"50px"}}>
                {followlist}
            </div>
        )
    }
}

class FollowItem extends Component {
    constructor() {
        super()
    }
    render() {
        let follow = this.props.follow;

        return (
            <div>
         
            <div className="nade">
                

               
                <div style={{ width: "70px", height: "70px", float: "left", backgroundColor: "blue" }}><img style={{ width: "70px", height: "70px"}} src={follow.tpic} /></div>
                <div className="dfd">
                    <p className="wza">{follow.tname}</p>
                    <p className="wzs">{follow.tzh}</p>
                </div>
                <div style={{ width: "90px", height: "30px", borderRadius: "10px", textAlign: "center", lineHeight: "30px", border: "1px solid black", float: "right", marginTop: "20px", marginRight: "10px" }}>
                    取消关注
           </div>
           </div>
           </div>
            
        )

    }
}


export default Follow;