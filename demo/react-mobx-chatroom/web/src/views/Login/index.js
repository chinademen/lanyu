import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { Icon, Button } from 'antd';
import './index.less';

@withRouter
@inject('commonStore', 'socketioStore')
@observer
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null, // 用户名
        };
    }

    componentDidMount() {
        this.props.socketioStore.clearChatMsg();
    }

    // 监听并记录用户名
    handleChange = e => {
        this.setState({
            username: e.target.value,
        });
    }

    // 登录
    login() {
        const { username } = this.state;
        // 判断上一次socket链接是否还没端口， 断开上一次sockit链接
        if (this.props.socketioStore.socket.connected && this.props.commonStore.username) {
            this.props.socketioStore.socketLogout(this.props.commonStore.username);
        }
        // 保存用户信息 跳转到主页
        this.props.commonStore.login({ username });
    }

    render() {

        return (
            <div className="login_page clearfix">
                <div className="username_box">
                    <Icon type="user-add" style={{ width: 20 }} />
                    <input type="text" name="username" onChange={this.handleChange} placeholder="用户名" />
                     
                </div>
                <Button type="primary" className="login_btn" onClick={() => this.login()}>登录</Button>
            </div>
        )
    }
}

export default Login
