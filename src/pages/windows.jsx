import React, { Component } from 'react';
import { Modal, Button, WhiteSpace, WingBlank, Toast } from 'antd-mobile';

const alert = Modal.alert;

const showAlert = () => {
  const alertInstance = alert('Delete', 'Are you sure???', [
    { text: 'Cancel', onPress: () => console.log('cancel'), style: 'default' },
    { text: 'OK', onPress: () => console.log('ok') },
  ]);
  setTimeout(() => {
    // 可以调用close方法以在外部close
    console.log('auto close');
    alertInstance.close();
  }, 500000);
};

const App = (props) => (
  <WingBlank size="lg">

    <WhiteSpace size="lg" />
    <Button style={{marginTop:"-15px",height:"35px",lineHeight:"35px",width:"117px"}}
      onClick={() =>
        alert('提示', '手机蓝牙未开启！', [
          { text: '取消', onPress: () => console.log('取消') },
          {
            text: '好的',
            onPress: () =>
              new Promise((resolve) => {
                // Toast.info('onPress Promise', 1);
                setTimeout(resolve, 1000);
              }),
          },
        ])
      }
    >
     连接血压仪
    </Button>
    <WhiteSpace size="lg" />
  </WingBlank>
);

class Windows extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <App />

        )
    }
}

export default Windows