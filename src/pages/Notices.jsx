import React, { Component } from 'react';
import { NoticeBar, WhiteSpace, Icon } from 'antd-mobile';

const NoticeBarExample = () => (
    <div>
      <WhiteSpace size="lg" />
      <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
        Notice: The arrival time of incomes and transfers of Yu &#39;E Bao will be delayed during National Day.
      </NoticeBar>
    </div>
  );

class Notices extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
               <NoticeBarExample />
            </div>
           
        )
    }
}

export default Notices