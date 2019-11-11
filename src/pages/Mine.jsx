import React, { Component } from 'react';
import './Mine.css';
import {BrowserRouter as Router,Route,NavLink,Link} from "react-router-dom";
import { Modal, Button, WhiteSpace, WingBlank, Toast } from 'antd-mobile';
import ydoctor from './Ydoctor';
import Windows from './windows';
// import moment from 'moment'; 
import Chart from './echart'; 

const alert = Modal.alert;

class Mine extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
              
            <div className="mine">
              <div className="logo">
                <img className="photo" src={require("../images/logo.png")}/>
              </div>
                <div className="name">
                    刘某人
                </div>
                <div className="id">
                    id
                </div>
            </div>
                <Anniu />
                <Circle />
                <div className="charts">
                    <Chart />
                </div>
            </div>
        )
    }
}

class Anniu extends Component{
    constructor(){
        super()
    }


    render(){
        
        return(
            <div>

            <div className="anniu">
                
                <div className="xueyayi">
                    <Windows />
                </div >

                <Link to="/Ydoctor">
                   <div className="jilu">
                    手动记录血压
                   </div>
                </Link>
            </div>
    
            </div>
        )
    }
}

class Circle extends Component{
    constructor(){
        super();
        var moment = require('moment');
        this.state = {
            date: moment().format("YYYY-MM-DD HH:mm:ss")
        };
        this.changeTime = this.changeTime.bind(this);
    }
    changeTime(){
        
    }
    render(){
        // let that = this;
        // setInterval(function(){
        //   // this.changeTime()
        //    //console.log(1);
        //    that.setState((preState)=>({
        //     date: moment().format("YYYY-MM-DD HH:mm:ss")
        // }))
        // },1000);
        return(
            <div className="circle">
                <p>{this.state.date}</p>
                <Xinlu />
                <Frequency />
            </div>
        )
    }
}

class Xinlu extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className="xinlu">
            102/72
             <p className="mmhg">mmHg</p>
            </div>
        )
    }

}
class Frequency extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className="frequency">
            心率：62次/分
            </div>
        )
    }

}





export default Mine