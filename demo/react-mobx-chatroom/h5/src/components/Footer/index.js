import React, { Component, Fragment } from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import {  message, Icon } from 'antd';
import './index.less';

@withRouter
@inject('commonStore', 'socketioStore')
@observer
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    // 生成底部导航
    createTab = active => {
        const arr = [
            { name: '聊天', type: 'message' },
            { name: '音乐', type: 'customer-service' },
            { name: '好友', type: 'aliwangwang' },
            { name: '资料', type: 'shopping' },
        ]
        const list = arr.map((item, index) => {
            const theme = (active === index) ? 'filled' : ''; 
            return (
                <span className="footer-item" key={[index]} onClick={() => this.props.commonStore.changeTabs(index)}>
                    <Icon type={item.type} theme={theme} />
                    {item.name}
                </span>
            )
        });
        return list;
    }

    render() {
        const { active } = this.props;

        return (
            <div className="footer">
                {this.createTab(active)}
            </div>
        )
    }
}

export default Footer
