import React, { Component } from 'react';
import "./Messagesone.css"
class Messagesone extends Component{
    constructor(){
        super()
        this.state = {
            objas:[{
                ab:"狂犬病疫苗接种服务联系方式",
                cd:"全身2019年度家庭医生续约一开始",
                ef:"14:30"
            },
            {
                ab:"生活不只有诗和远方",
                cd:"还手中的奶茶",
                ef:"14:35"
            },
            {
                ab:"你总说我不在意",
                cd:"其实我都记得",
                ef:"15:09"
            },
            {
                ab:"愿你天黑有灯，下雨有伞",
                cd:"愿你所有的快乐都无需假装",
                ef:"17:20"
            },
        ]}
    }
    render(){
        let infoas = this.state.objas.map((itme,index)=>{
            return <MessagesoneItem infovs = {itme} key = {index} />
        })
        return(
            <div>
                 {infoas}
            </div>
        )
    }
}

class MessagesoneItem extends Component{
    constructor(){
        super()
    }
    render(){
        let infovss = this.props.infovs;
        
        return(
            <div className = "one">
               <div className = "half">
                   <p>{infovss.ab}</p>
                   <p>{infovss.cd}</p><p className = "qadaf">{infovss.ef}</p>
               </div>
               
           </div>
        )
        
    }
}


export default Messagesone;