import React, { Component } from 'react';
import "./Emphasis.css"
class Emphasis extends Component {
    constructor() {
        super();
        this.state={
            Emphs:[
                {
                    titles:"孕早期",
                    mesage:"至少一次产检 妊娠13周之前",
                    mesage1:"建档、NT检查、空腹"
                },
                {
                    titles:"孕中期",
                    mesage:"妊娠13周~20周",
                    mesage1:"唐筛、空腹"
                },
                {
                    titles:"孕中期",
                    mesage:"妊娠28周~36周",
                    mesage1:"乙肝抗原复查、空腹"
                },
                {
                    titles:"孕晚期",
                    mesage:"妊娠36周以后",
                    mesage1:"胎心监护、胎位检查"
                }
            ]
        }
    }
    render() {
        var Emphslist=this.state.Emphs.map((item,index)=>{
            return <EmphasisItem Emphsa={item} key={index}/>
        })
        return (
            <div>
                {Emphslist}
            </div>

        )
    }
}

class EmphasisItem extends Component{
    constructor(){
        super()
    }
    render(){
        let Emphsa=this.props.Emphsa
        return(
            <div className="cards">
			<p>{Emphsa.titles}</p>
			<p>{Emphsa.mesage} <span style={{color: "rgb(0, 204, 153)" ,marginLeft: "38%"}}>查看小贴</span></p>
			<div className="cardsone">
				<div>重点</div>
				<div>{Emphsa.mesage1}</div>
			</div>
		</div>
        )
    }
}

export default Emphasis