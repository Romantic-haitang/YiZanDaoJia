import React, { Component,Suspense, lazy } from 'react';
import {  BrowserRouter as Router ,Route ,Link ,NavLink ,Redirect,Switch} from 'react-router-dom';
import './App.css';

import Muyin from './pages/muyin';
import Xiangqing from './pages/xiangqing';
import Guanzhu from './pages/guanzhu';
import Shiping from './pages/shiping';
import Yonghu from './pages/yonghu';
import Fengxiang from './pages/fengxiang';
import Weixin from './pages/weixin';
import Shousuo from './pages/shousuo';
import Pinglun from './pages/pinglun';
import Denglu from './pages/denglu';
import Zhuce from './pages/zhuce';
import Yindao1 from './pages/yindao1';
import Yindao2 from './pages/yindao2';
import Yindao3 from './pages/yindao3';
// 导入，四个组件
import FourHome from './pages/FourHome.jsx';
// 导入万木春页面
import Family from "./pages/Family_doctor"
import Record from "./pages/health/Record.jsx"
import Confinerment from "./pages/confinerment/Confinerment.jsx"
import Vaccinetime from "./pages/Vaccine/VaccineTime.jsx"
import Onlinevisits from "./pages/Onlinevisits/Onlinevisits.jsx"
// 王启文页面
import Container from './pages/Container';
import Ydoctor from './pages/Ydoctor';
//刘成页面
import Myconcern from "./pages/Users/Myconcern.jsx";
import About from "./pages/Users/About.jsx";
import Modifyingdata from "./pages/Users/Modifyingdata.jsx";
import Myfamily from "./pages/Users/Myfamily.jsx";
import Collection from "./pages/Users/Collection.jsx";
import Mynews from "./pages/Users/Mynews.jsx";
import Binding from "./pages/Users/Binding.jsx";

//select  坑
//Link 普通模板导航
class App extends Component {
  render() {
    return (
     <Router>
     <Suspense fallback={<div>Loading...</div>}>
       <div className="" id="content">
           <Switch>
             {/* 万木春一级路由 */}
              <Route path="/family/:title" component={Family}></Route>
              <Route path="/record/:title" component={Record}></Route>
              <Route path="/confinerment/:title" component={Confinerment}></Route>
              <Route path="/vaccinetime/:title" component={Vaccinetime}></Route>
              <Route path="/onlinevisits/:title" component={Onlinevisits}></Route> 
             
              <Route path="/fourhome" component={FourHome}></Route>
               {/* 张仕伟*/}
              <Route path="/muyin" component={Muyin}></Route>
              <Route path="/xiangqing" component={Xiangqing}></Route>
              <Route path="/guanzhu" component={Guanzhu}></Route>
              <Route path="/shiping" component={Shiping}></Route>
              <Route path="/yonghu" component={Yonghu}></Route>
              <Route path="/fengxiang" component={Fengxiang}></Route>
              <Route path="/weixin" component={Weixin}></Route>
              <Route path="/shousuo" component={Shousuo}></Route>
              <Route path="/pinglun" component={Pinglun}></Route>
              <Route path="/denglu" component={Denglu}></Route>
              <Route path="/zhuce" component={Zhuce}></Route>
              <Route path="/yindao1" component={Yindao1}></Route>
              <Route path="/yindao2" component={Yindao2}></Route>
              <Route path="/yindao3" component={Yindao3}></Route>
              {/* 王启文 */}
              <Route path="/container" component={Container}></Route>
              <Route path="/ydoctor" component={Ydoctor}></Route>
              {/* 刘成 */}
              <Route path ="/Myfamily" component={Myfamily}></Route> 
              <Route path ="/Modifyingdata" component={Modifyingdata}></Route>   
              <Route path ="/Collection" component={Collection}></Route>
              <Route path ="/Myconcern" component={Myconcern}></Route>
              <Route path ="/About" component={About}></Route>
              <Route path ="/Mynews" component={Mynews}></Route>
               <Route path ="/Binding" component={Binding}></Route>

              <Redirect exact from="/" to="/yindao1"></Redirect>
              <Route render={()=><h3>404</h3> } />
            </Switch>   
       </div>
      
     </Suspense>
      </Router>
    )
  }
}

export default App;
