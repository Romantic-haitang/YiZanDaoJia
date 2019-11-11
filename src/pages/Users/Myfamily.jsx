import React, { Component } from 'react';
import "./Myfamily.css";
import Binding from "./Binding.jsx";
import {BrowserRouter as Router,Route,NavLink,Link} from "react-router-dom"
import Circle from "./Circle.jsx"

import User from '../../pages/User.jsx';





class Myfamily extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>
                
            <div className="ccx">
           < Myfamilyq />
                <div className="kkg">
                    <div>
                    <Circle />
                     <Myfamilyab bb ="张世伟" />
                    </div>
                    <div>
                    <Circle />
                     <Myfamilyab  bb ="娃哈哈" />
                    </div>
                    <div>
                    <Circle />
                     <Myfamilyab  bb ="王启文" />
                    </div>
                    <div>
                    <Circle />
                     <Myfamilyab  bb ="张世伟" />
                    </div>
                    <div>
                    <Circle />
                     <Myfamilyab  bb ="哇哈哈" />
                    </div>
                    <div>
                   
                    <Link to="/Binding">< Myfamilyaq /></Link>
                        <Myfamilyab   bb ="添加新成员" />
                    </div>
                    {/* <Myfamilyas /> */}
                </div>
             </div>
        </div>
            
        )
    }
}
class Myfamilyq extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>
           
             
               <div className="qqw">
                     <Link to="/fourhome/user"> <p className="ysa">返回</p></Link>
                <p className="yss">我的家庭</p>
              </div>
            
            </div>
        )
    }
    }

class Myfamilya extends Component{
constructor(){
    super()
}
render(){
    return(
       <div>
           <Circle />
       </div>
    )
}
}

class Myfamilyab extends Component{
constructor(){
    super()
}
render(){
    return(
        <p>{this.props.bb}</p>
    )
}
}

class Myfamilyaq extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            // <Router> 
            <div>
               
                 {/* <Route path ="/Binding" component={Binding}></Route>             */}
               
            
            <div className="tj">
                +
            </div>
            </div>
            // </Router>
        )
    }
    }
    // console.log(s)
    // class Myfamilyas extends Component{
    //     constructor(){
    //         super()
    //     }
    //     render(){
    //         return(
    //             <Router> 
    //              <Route path ="/Binding" component={Binding}></Route>            
    //              <Route path ="/User" component={User}></Route>
                
    //         </Router>
            
    //         )
    //     }
    //     }
export default Myfamily;