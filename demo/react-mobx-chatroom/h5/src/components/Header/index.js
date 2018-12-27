import React, { Component, Fragment } from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import {  message } from 'antd';
import './index.less';

@withRouter
@inject('commonStore', 'socketioStore')
@observer
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    // 退出
    logout = () => {
        this.props.commonStore.logout(() => {
            this.props.history.replace('/login');
        });
    }

    // 返回
    returnBack = () => {
        this.props.commonStore.changeIsTabs(1);
    }


    render() {
        const { username, level, levelLogo, userAvatar, isTabs } = this.props.commonStore;

        return (
            <div className="header">
                {/* 用户名 */}
                <div className="left">
                    <img src={userAvatar} alt="用户头像" />
                    <span>{username}</span>
                </div>
                {/* 等级 */}
                <div className="middle">
                    <span>等级：</span>
                    <img src={levelLogo} alt="等级图标" title={level} />
                </div>
                {/* 退出 */}
                {isTabs ? <div className="right" onClick={() => this.logout()}>退出</div> : <div className="right" onClick={() => this.returnBack()}>返回</div>}
            </div>
        )
    }
}

export default Header
