import React, { Component } from 'react';
import "./Modifyingdata.css";
import Return from './Return.jsx';
import Edit from './Edit.jsx';

class Modifyingdata extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="xkk">  
  
               <Return />
               <Edit /> 
               <Mabcd />
            </div>
        )
    }
}
class Mabcd extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div style={{position:"absolute",width:"100px",height:"30px",border:"1px solid red",top:"250px",left:"100px",lineHeight:"30px",textAlign:"center",borderRadius:"5px",backgroundColor:"yellow"}}>  
  
             保存
            </div>
        )
    }
}
export default Modifyingdata