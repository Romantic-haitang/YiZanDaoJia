import React, { Component } from 'react';
import './Message.css'
import Guanzhu from './guanzhu';


class Message extends Component {
    constructor(){
     super()
    }
  
    render() {
        return(
            <div>
                <Guanzhu />
               
            </div>
        )
    }
}

export  default  Message