import React, { Component } from 'react';
import "./Option.css";



class Options extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className ="da">
                 <Optionstx /> 
                <Optionszi a = {this.props.a} />
             </div>
        ) 
    }
}

class Optionstx extends Component{
    constructor(){
        super()
    }
    render(){
        return(
          <div className="dx"> 
            <img src= {require("../../img/6school.png")} />
         </div>
        )
       
    }
}

class Optionszi extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className="aa"> 
                <p>{this.props.a}</p>
                <p>></p>
            </div>
        )
        
    }
}

export default Options