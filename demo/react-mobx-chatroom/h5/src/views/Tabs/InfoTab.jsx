/* 用户资料列表 */
import React, { Component, Fragment } from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { Icon, Button, message } from 'antd';
import './index.less';

// 提示框
message.config({ top: 100, delay: 2, maxCount: 1 });

@withRouter
@inject('commonStore', 'socketioStore')
@observer
class InfoTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeInfo: 0, // 当前选中的资料项
        };
    }
    
    // 生成资料列表
    createInfo = activeInfo => {
        const list = ['个人资料', '收藏', '相册', '设置'].map((item, index) => {
            const cls = activeInfo === index ? 'info_item active' : 'info_item';
            return (
                <li className={cls} key={[index]} onClick={() => this.changeInfo(index)}>
                    {item}
                </li>
            );
        });
        return list;
    }

    // 切换资料项
    changeInfo = index => {
        message.info('该功能尚未开放，敬请期待！')
        this.setState({
            activeInfo: index,
        });
    }

    render() {
        const { activeInfo } = this.state;

        return (
            <ul className="info_box">
                {this.createInfo(activeInfo)}
            </ul>
        )
    }
}

export default InfoTab;