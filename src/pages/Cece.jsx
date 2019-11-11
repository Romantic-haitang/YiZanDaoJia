import React, { Component } from 'react';
import {BrowserRouter as Router,Route,NavLink,Link} from "react-router-dom"
import './Cece.css';
// import Cc from './Ceces.jsx';
import Zhangone from './Zhangone';
import './Ceces.css'

class Cc extends Component{
    constructor(){
        super();

    }
    render(){
        return(
            <div className="kk">
                 {/* {
                    data.map((el,idx)=><Ccs {...el} key={idx}  />)
                } */}
                <Ccs img='xueya.png'/>
                <Cca a = {this.props.a} />
            </div>
        )
    }
}

class Ccs extends Component{
    constructor(){
        super();
    }
    render(){

        let {txt,img,names,borders,pinlun,zan} = this.props;
        let src = require('../images/'+img);

        return(
            
            <div className="xuetang">
                <img className="picc" src={src} />
            </div>
           
        )
    }
}

class Cca extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <p>
                {this.props.a}
            </p>
        )
    }
}



// import Zhangone2 from './Zhangone2';
class Cece extends Component{
    constructor(){
        super();
       
    }
    render(){
      
        return(
            <div>
                 <Head />
                 <Pressure />
                 <Time />
                 <Name />
                 {/* <Zhangone /> */}
            </div>
           
        )
    }
}
class Head extends Component{
    constructor(){
        super();
        
    }
    render(){
       
        return(
            <div className="top">测测</div>
        )
    }
}

class Pressure extends Component{
    constructor(){
        super();
        
    }
    render(){

        return(
                <div className ="avc">                  
                    <div className="ba">
                    <NavLink to="/container"><Cc a="测测血压" /> </NavLink>
                    </div>
                    <NavLink to="/container"><Cc a="测测血糖" /> </NavLink>
                </div>
        )
    }
}

class Time extends Component{
    constructor(){
        super();
        var today = new Date(),
            date = today.getFullYear() + '年' + (today.getMonth() + 1) + '月' + today.getDate()+ '日星期' + today.getDay();

        this.state = {
            date: date
        };
    }
    render(){
        return(
            <div className="time">
             {this.state.date}
             <div className="Statictime">
                 <ul>
                     <li style={{color:"red"}}>日</li>
                     <li>一</li>
                     <li>二</li>
                     <li>三</li>
                     <li>四</li>
                     <li>五</li>
                     <li style={{color:"red"}}>六</li>
                 </ul>
             </div>
             <ul className="e">
                     <li>21</li>
               <span><li>22</li></span>
                     <li>23</li>
                     <li>24</li>
                     <li>25</li>
                     <li>26</li>
                     <li>27</li>
                 </ul>
            </div>
        )
    }
}
class Name extends Component{
    constructor(){
        super();
    }
    render(){
        return(
        <Router>
            <div className="✪ω✪">
               <ul>
                   <li><Link to="/Zhangone">张世伟</Link></li>
                   <li><Link to="/Zhangone1">刘成</Link></li>
                   <li><Link to="/Zhangone2">黄耀东</Link></li>
                   <li><Link to="/Zhangone3">项帅</Link></li>
               </ul>
               <div>
                   <Route path="/Zhangone" component={Zhangone}></Route>
                   <Route path="/Zhangone1" component={Zhangone}></Route>
                  
                   {/* <Route path="/" component={Zhangone}></Route> */}
                  
               </div>
            </div>
            {/* <Potension /> */}
        </Router>
        )
    }
}

export default Cece