import React, { Component } from 'react';
import "./Icon.css"
class Icon extends Component{
    constructor(){
        super();
    }
    render(){
        return(
           <li>
               <Z a="icon" />
               <S b={this.props.b} />
           </li>
        )
    }
}

class Z extends Component{
    constructor(){
        super()
    }
    render(){
        return(
           <div>{this.props.a}</div>
        )
    }
}
class S extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <p>{this.props.b}</p>
        )
    }
}

export default Icon


