import React, { Component } from 'react';
import './Zhang.css'

class Zhang extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="xueya">
                <Xueya />
                <Shijian />
            </div>
        )
    }
}
class Xueya extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="ಥ_ಥ">
                <Peiwen />
            </div>
        )
    }
}
                
class Peiwen extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
                <div className="headz">血压：102/78<span>mmHg</span></div>
                <div className="buttom">您的血压非常理想，请继续保持当前的健康生活方式，并定期测量血压</div>
            </div>
        )
    }
}
class Shijian extends Component{
    constructor(){
        super();
        var today = new Date(),
        date = today.getHours() + ':' + today.getMinutes();
        this.state = {
            date: date
        };
    }
    render(){
        return(
            <div className="oo">
                {this.state.date}
            </div>
        )
    }
}

export default Zhang