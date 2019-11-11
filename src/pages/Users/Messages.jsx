import React, { Component } from 'react';
import "./Messages.css";
class Messages extends Component{
    constructor(){
        super()
        this.state = {
            objas:[{
                tpic: require("../.././img/timg.jpg"),
                ab:"云家庭医生小喇叭",
                cd:"续签优惠乡村行",
                ef:"2018/08/12"
            },
            {    tpic: require("../.././img/1.png"),
                ab:"医站小组手",
                cd:"昵称修改成功",
                ef:"2018/08/12"
            },
            {    tpic: require("../.././img/2.png"),
                ab:"优惠促销",
                cd:"中国团圆 把血压仪带回家",
                ef:"2018/02/5"
            },
            {    tpic: require("../.././img/3.png"),
                ab:"云家庭医生小喇叭",
                cd:"续签优惠乡村行",
                ef:"2018/08/12"
            },
            {    tpic: require("../.././img/timg.jpg"),
                ab:"优惠促销",
                cd:"中国团圆 把血压仪带回家",
                ef:"2018/02/5"
            },
            
        ]
    }
    }
    render(){
        let infoas = this.state.objas.map((itme,index)=>{
            return <MessagesItem infov = {itme} key = {index} />
        })
        return(
            <div>
                 {infoas}
            </div>
        )
    }
}

class MessagesItem extends Component{
    constructor(){
        super()
    }
    render(){
        let infov = this.props.infov;
        
        return(
            <div className="avcx">
                <div>
                    <div>
                        <div style={{width:"70px",height:"70px",float:"left",backgroundColor:"red"}}>
                        <img style={{ width: "70px", height: "70px"}} src={infov.tpic} />>
                        </div>
                            <div className="dfd">
                                <p className="wza">{infov.ab}</p>
                                <p className="wzs">{infov.cd}</p>
                            </div>
                            <p className="sjsj">{infov.ef}</p>
                    </div>
                    </div>
            </div>
        )
        
    }
}


export default Messages;