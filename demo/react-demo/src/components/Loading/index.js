import React, { Component } from 'react';
import { Spin } from 'antd';

class Loading extends Component {
    render() {
        return (
            <div className="loading">
                <Spin
                    tip="页面加载中..." 
                    size="large" 
                    delay="5000" 
                />
            </div>
        )
    }
}

export default Loading;