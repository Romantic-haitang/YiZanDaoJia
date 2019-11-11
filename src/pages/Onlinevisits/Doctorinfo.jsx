import React, { Component } from 'react';
import "./Doctorinfo.css"
class Doctorinfo extends Component {
    constructor() {
        super();
        this.state={
            doctors:[
                {
                    docpic:require("../../images/4.jpg"),
                    docname:"赵凯奇"
                },
                {
                    docpic:require("../../images/5.jpg"),
                    docname:"李思琪"
                },
                {
                    docpic:require("../../images/1.jpg"),
                    docname:"徐美如"
                },
                {
                    docpic:require("../../images/2.jpg"),
                    docname:"尹孟哲"
                },
                {
                    docpic:require("../../images/3.jpg"),
                    docname:"陆建宇"
                }
            ]
        }
    }
    render() {
        var docitem=this.state.doctors.map((item,index)=>{
            return <DoctorinfoItem doctor={item} key={index}/>
        })
        return (
            
            <div>
                {docitem}
            </div>
        )
    }
}
class DoctorinfoItem extends Component{
    constructor(){
        super()
    }
    render(){
        let doctor=this.props.doctor
        return(
            <div className="wrap">
                <div className="doctorpic">
                    <img src={doctor.docpic} />
                </div>
                <div className="dcotorinof">
                    <p style={{marginTop:"10%"}}>{doctor.docname}</p>
                    <p>职位：家庭医生</p>
                    <p>青龙镇卫生所</p>
                </div>
                <div className="doctorphone">
                    <p style={{marginTop:"20%"}}>电话咨询</p>
                    <p>在线咨询</p>
                </div>
            </div>
        )
    }
}


export default Doctorinfo