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
    <Button
      onClick={() =>
        alert('提示', <div>{props.msg}</div>, [
          { text: '我知道了', onPress: () => console.log('第0个按钮被点击了') },
        ])
      }
    >
      绑定
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
            <App msg='该证件号还没有绑定过家签，请前往就近社区医院进行家庭医生签约' />

        )
    }
}

export default Windows