import React, { Component } from 'react';
import {BrowserRouter as Router,Route,NavLink,Link} from "react-router-dom";
import "./Ydoctor.css"
import moment from 'moment'; 
import Container from './Container.jsx';
class Ydoctor extends Component{
    constructor(){
        super();
        this.abc = this.abc.bind(this)
    }
    abc(e){
        console.log(e)
    }
    render(){

        return(
            <React.Fragment>
                <Router>
                    <Route path="/Container" component={Container}></Route>
                </Router>
            <Link to ="/Container">  
                <div className="chacha">
                    <img src={require("../images/cha.png")}/>
                <p>添加血压记录</p>
                </div>
            </Link>
            <div className="doctorsss">
              <span>测量日期:</span>
                <Circle /><br />
                <Shijian /><br />
                <span>收缩期:</span> <input style={{marginLeft:"20px"}} className="ipt" type="text" placeholder="102"  onChange={this.abc} /><span>mmHg</span><br />
                <span>舒张压:</span><input style={{marginLeft:"20px"}} className="ipt" type="text" placeholder="72"  onChange={this.abc} /><span>mmHg</span><br />
                <span>心率:</span> <input style={{marginLeft:"34px"}} className="ipt" type="text" value="65"  onChange={this.abc} /><span>bpm</span><br />
                <div className="head_logoss">
                <Link to ="/Container"><div>添加记录</div></Link>
                </div>
                <br />
            </div>
            </React.Fragment>
        )
    }
}

class Circle extends Component{
    constructor(){
        super();
        var moment = require('moment');
        this.state = {
            date: moment().format("YYYY-MM-DD")
        };
        this.changeTime = this.changeTime.bind(this);
    }
    changeTime(){
        
    }
    render(){
        return(
            <React.Fragment>
            <input className="ipt"  onChange={this.abc} placeholder="2019-4-19"  defaultValue={this.state.date} />
            </React.Fragment>
        )
    }
}

class Shijian extends Component{
    constructor(){
        super();
        var moment = require('moment');
        this.state = {
            date: moment().format("HH:mm")
        };
        this.changeTime = this.changeTime.bind(this);
    }
    changeTime(){
        
    }
    render(){
        return(
            <React.Fragment>
           <span>测量时间:</span> <input style={{marginLeft:"8px"}} className="ipt" type="text" placeholder="2019-4-19"  defaultValue={this.state.date} onChange={this.abc} />
            </React.Fragment>
        )
    }
}


export default Ydoctor