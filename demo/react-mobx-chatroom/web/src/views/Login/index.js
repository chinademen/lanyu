import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { Icon, Button } from 'antd';
import './index.less';

@withRouter
@inject('commonStore', 'websocketStore')
@observer
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '', // 用户名
        };
    }

    // 监听并记录用户名
    handleChange = e => {
        this.setState({
            username: e.target.value
        });
    }

    // 登录
    login() {
        console.log(this.state.username);
        this.props.websocketStore.wsInit();
        this.props.websocketStore.onopen();
        this.props.websocketStore.onmessage();
        // this.props.history.replace('/home');
    }

    render() {

        return (
            <div className="login_page clearfix">
                <div className="username_box">
                    <Icon type="user-add" style={{ width: 20 }} />
                    <input type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder="用户名"  />   
                </div>
                <Button type="primary" className="login_btn" onClick={() => this.login()}>登录</Button>
            </div>
        )
    }
}

export default Login
