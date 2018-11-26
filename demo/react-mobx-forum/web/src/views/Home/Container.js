import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import MainContent from '../Container/MainContent';
import './index.less';

@inject('commonStore')
@observer
class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        return (
            <div className="container">
                {/* 左侧广告 */}
                <div className="left-side"></div>
                {/* 主要内容 */}
                <MainContent />
                {/* 右侧广告 */}
                <div className="right-side"></div>
            </div>
        )
    }
}

export default Container
