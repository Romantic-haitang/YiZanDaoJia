import React, { Component } from 'react';
import "./Doctorinfo.css"
class Expert extends Component {
    constructor() {
        super();
        this.state={
            expetdocs:[
                {
                    docpic:require("../../images/5.jpg"),
                    docname:"赵凯奇"
                },
                {
                    docpic:require("../../images/4.jpg"),
                    docname:"李思琪"
                },
                {
                    docpic:require("../../images/2.jpg"),
                    docname:"徐美如"
                },
                {
                    docpic:require("../../images/3.jpg"),
                    docname:"尹孟哲"
                },
                {
                    docpic:require("../../images/1.jpg"),
                    docname:"陆建宇"
                }
            ]
        }
    }
    render() {
        var expetdocs=this.state.expetdocs.map((item,index)=>{
            return <ExpertItem expetdocs={item} key={index}/>
        })
        return (
            
            <div>
                {expetdocs}
            </div>
        )
    }
}
class ExpertItem extends Component{
    constructor(){
        super()
    }
    render(){
        let exdocts=this.props.expetdocs
        return(
            <div className="wrap two">
                <div className="doctorpic">
                    <img src={exdocts.docpic} />
                </div>
                <div className="dcotorinof">
                    <p style={{marginTop:"10%"}}>{exdocts.docname}</p>
                    <p>职位：专家医生</p>
                    <p>玄武镇卫生所</p>
                </div>
                <div className="doctorphone">
                    <p style={{marginTop:"20%"}}>电话咨询</p>
                    <p>在线咨询</p>
                </div>
            </div>
        )
    }
}


export default Expert