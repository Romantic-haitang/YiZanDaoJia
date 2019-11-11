import React, { Component } from 'react';
import Navbar from "../Navbar.jsx"
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
import Doctorinfo from "./Doctorinfo.jsx"
import Specialist from "./Specialist.jsx"
import Expert from "./Expert.jsx"

const tabs = [
    { title: <Badge >家庭医生</Badge> },
    { title: <Badge >专科医生</Badge> },
    { title: <Badge >专家医生</Badge> },
  ];
  
  const tabs2 = [
    { title: 'First Tab', sub: '1' },
    { title: 'Second Tab', sub: '2' },
    { title: 'Third Tab', sub: '3' },
  ];
  
  const TabExample = () => (
    <div>
      <Tabs tabs={tabs}
        initialPage={1}
        onChange={(tab, index) => { console.log('onChange', index, tab); }}
        onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',  backgroundColor: '#fff' }}>
          <Doctorinfo />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',  backgroundColor: '#fff' }}>
          <Specialist />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
          <Expert />
        </div>
      </Tabs>
      <WhiteSpace />
      <WhiteSpace />
    </div>
  );

class Tabsone extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
               <TabExample />
            </div>
           
        )
    }
}



export default Tabsone