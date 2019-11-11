import React, { Component } from 'react';
import "./Doctorinfo.css"
class Specialist extends Component {
    constructor() {
        super();
        this.state={
            docs:[
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
        var docsitem=this.state.docs.map((item,index)=>{
            return <DoctorinfoItem dcost={item} key={index}/>
        })
        return (
            
            <div>
                {docsitem}
            </div>
        )
    }
}
class DoctorinfoItem extends Component{
    constructor(){
        super()
    }
    render(){
        let docts=this.props.dcost
        return(
            <div className="wrap one">
                <div className="doctorpic">
                    <img src={docts.docpic} />
                </div>
                <div className="dcotorinof">
                    <p style={{marginTop:"10%"}}>{docts.docname}</p>
                    <p>职位：专科医生</p>
                    <p>朱雀镇卫生所</p>
                </div>
                <div className="doctorphone">
                    <p style={{marginTop:"20%"}}>电话咨询</p>
                    <p>在线咨询</p>
                </div>
            </div>
        )
    }
}


export default Specialist