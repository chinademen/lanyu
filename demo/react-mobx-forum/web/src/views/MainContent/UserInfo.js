/* 登陆 / 用户信息 */
import React, { Component, Fragment } from 'react';
import { inject, observer } from 'mobx-react';
import { Button } from 'antd';
import './index.less';

@inject('commonStore')
@observer
class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false, // 用户是否登录
        };
    }

    login() {
        this.setState({ isLogin: true })
        this.props.commonStore.updateIsRegister(false)
    }

    logout() {
        this.setState({ isLogin: false })
    }

    register() {
        this.props.commonStore.updateIsRegister(true)
    }

    render() {
        const { isLogin } = this.state;
        return (
            <div className="main-userinfo clearfix">
                {!isLogin ? <Fragment>
                    <button onClick={() => this.login()} className="login-btn">登录</button>
                    <div className="fast-reg">
                        <a href="#" onClick={() => this.register()}>立即注册</a>
                    </div>
                    <div className="find-pwd">
                        <a href="javascript:;">找回密码</a>
                    </div>
                </Fragment> : <Fragment>
                    {/* 用户头像 */}
                    <div className="user-avatar">
                        <img src={require('../../static/images/user.gif')} alt="用户头像" />
                    </div>
                    {/* 用户详情 */}
                    <div className="user-details">
                        <p className="user-details-up">
                            <a href="#" className="user-name">amao</a>
                            <a href="#" className="pipe">|</a>
                            <a href="#">设置</a>
                            <a href="#" className="pipe">|</a>
                            <a href="#">消息</a>
                            <a href="#" className="pipe">|</a>
                            <a href="#" className="user-remind">提醒(1)</a>
                            <a href="#" className="pipe">|</a>
                            <a href="#">收藏</a>
                            <a href="#" className="pipe">|</a>
                            <a href="#">好友</a>
                            <a href="#" className="pipe">|</a>
                            <a href="#">任务中心</a>
                            <a href="#" className="pipe">|</a>
                            <a href="#" onClick={() => this.logout()}>退出</a>
                        </p>
                        <p className="user-details-down">
                            <a href="#">人民币：<span style={{ color: '#000' }}>0</span></a>
                            <a href="#" style={{ color: '#7BAD0C' }}>提现人民币</a>
                            <a href="#" style={{ color: '#48B6FB' }}>如何赚人民币</a>
                            <a href="#" style={{ color: '#D33022' }}>下载APP</a>
                        </p>
                    </div>
                </Fragment>}
            </div>
        )
    }
}

export default UserInfo
