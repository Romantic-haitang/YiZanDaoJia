import React, { Component } from 'react';
import "./Circle.css"
class Circle extends Component{
    constructor(){
        super()
        this.state = {
            circles:[{
                cpic:require("../../img/3.png")
            }
        ]
        }
    }
    render(){
        let circlist = this.state.circles.map((itme,index)=>{
            return <CircleItem circl = {itme} key = {index} />
        })
        return(
            <div>
                {circlist}
        </div>
        )
    }
}
class CircleItem extends Component{
    constructor(){
        super()
    }
    render(){
        let cirs = this.props.circl;
        return(
            <div className="tp">
            <img src= {cirs.cpic}/>
        </div>
        )
    }
}

export default Circle;