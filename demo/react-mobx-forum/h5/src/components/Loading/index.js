import React, { Component } from 'react';
// import { Spin } from 'antd';
import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';

class Loading extends Component {
    render() {
        return (
            <div className="loading">
                <WhiteSpace />
                    <Button>loading</Button>
                <WhiteSpace />
                {/* <Spin
                    tip="页面加载中..." 
                    size="large" 
                    // delay="100" 
                /> */}
            </div>
        )
    }
}

export default Loading;