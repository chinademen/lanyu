import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { Icon, Button } from 'antd';
import './index.less';

@withRouter
@inject('commonStore', 'socketioStore')
@observer
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeChat: null, // 当前选中的聊天室
            msg: '', // 聊天框消息
        };
    }

    componentDidMount() {
        // 进入聊天室
        const { username } = this.props.commonStore;
        this.props.socketioStore.socketInit(username);
        // 监听消息
        // this.props.socketioStore.socketWatch();
    }

    // 生成聊天室
    createChat = (index) => {
        const arr = ['聊天室1', '聊天室2', '聊天室3', '聊天室4', '聊天室5', '聊天室6', '聊天室7', '聊天室8'];
        const { activeChat } = this.state;
        const list = arr.map((item, index) => {
            const cls = activeChat === index ? 'chat_item active' : 'chat_item';
            return <li className={cls} key={[index]} onClick={() => this.changeChat(index)}>{item}</li>;
        });
        return list;
    }

    // 切换聊天室
    changeChat = (index) => {
        this.setState({
            activeChat: index,
        });
    }

    // 聊天消息
    handleChange = e => {
        this.setState({
            msg: e.target.value
        });
    }

    // 发送消息
    sendmsg = () => {
        const { msg } = this.state;
        // 发送消息
        this.props.socketioStore.socketSend(msg);
    }

    render() {
        const { username } = this.props.commonStore;
        let onlineCount = 3;

        return (
            <div className="home_page clearfix">
                <div className="left">
                    {/* 用户信息 */}
                    <div className="header">
                        <span></span>
                        <span>{username}</span>
                    </div>
                    {/* 聊天列表 */}
                    <ul className="chat_box">
                        {this.createChat()}
                    </ul>
                </div>
                <div className="right">
                    {/* 聊天框用户信息 */}
                    <div className="header">
                        当前在线人数：<span>{onlineCount}</span>
                    </div>
                    {/* 消息盒子 */}
                    <div className="msg_box"></div>
                    {/* 发送框 */}
                    <div className="send_msg">
                        <input type="area" onChange={this.handleChange} />
                        <Button type="primary" className="send_btn" onClick={() => this.sendmsg()}>发送</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
