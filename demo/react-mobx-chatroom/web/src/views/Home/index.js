import React, { Component, Fragment } from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { Icon, Button, message } from 'antd';
import './index.less';

message.config({
    top: 100,
    duration: 3,
    maxCount: 1,
});

@withRouter
@inject('commonStore', 'socketioStore')
@observer
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeChat: null, // 当前选中的聊天室
            msg: '', // 聊天框消息
            waringInfo: '请选择聊天室', // 未进入聊天室提示信息
        };
    }

    componentDidMount() {

    }

    // 生成聊天室
    createChat = (index) => {
        const arr = [
            '1级聊天室', '2级聊天室', '3级聊天室', '4级聊天室', '5级聊天室', '6级聊天室', '7级聊天室', '8级聊天室',
            '9级聊天室', '10级聊天室', '11级聊天室', '12级聊天室', '13级聊天室', '14级聊天室', '15级聊天室', '16级聊天室',
            '17级聊天室',
        ];
        const { activeChat } = this.state;
        const list = arr.map((item, index) => {
            const cls = activeChat === index ? 'chat_item active' : 'chat_item';
            return <li className={cls} key={[index]} onClick={() => this.changeChat(index)}>{item}</li>;
        });
        return list;
    }

    // 切换聊天室
    changeChat = (index) => {
        const { level } = this.props.commonStore;
        const userLevel = Number.parseInt(level);
        // 当前登陆用户不能进入高于用户等级的聊天室， 用户等级：userLevel， 聊天室等级：index + 1
        if (userLevel < index + 1) {
            this.setState({
                activeChat: null,
                waringInfo: '对不起，你的等级未达到，不允许进入该聊天室！'
            });
            return;
        }
        this.setState({
            activeChat: index,
        });
        // 进入聊天室
        const { username } = this.props.commonStore;
        this.props.socketioStore.socketInit(username);
        // 监听其他用户登陆
        this.props.socketioStore.socketLogin();
        // 监听聊天消息
        this.props.socketioStore.socketWatch();
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
        // 重置消息框
        this.setState({
            msg: ''
        });
    }

    // 退出登陆
    logout = () => {
        this.props.commonStore.logout(() => {
            this.props.history.replace('/login');
        });
    }

    render() {
        const { activeChat, waringInfo, msg } = this.state;
        const { username, level, levelLogo } = this.props.commonStore;
        const { onlineCount, onlineUsers, user, chatMsg } = this.props.socketioStore;

        return (
            <div className="home_page clearfix">
                <div className="left">
                    {/* 用户信息 */}
                    <div className="header">
                        <span></span>
                        <span>{username}</span>
                        <span>等级：</span>
                        <img src={levelLogo} alt="等级" title={level} />
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
                        <span className="logout" onClick={() => this.logout()}>退出</span>
                    </div>
                    {/* 判断是否进入聊天室 */}
                    {activeChat || activeChat === 0 ?
                        <Fragment>
                            {/* 消息盒子 */}
                            <ul className="msg_box clearfix">
                                <li className="msg_box_left">
                                    <img src={levelLogo} alt="头像" title={level} />
                                    <span className="msg_item">111111111</span>
                                </li>
                                <li className="msg_box_right">
                                    <span className="msg_item">2222222222</span>
                                    <img src={levelLogo} alt="头像" title={level} />
                                </li>
                                <li className="msg_box_middle">用户 {user && user.username} 加入了聊天室</li>
                                <li className="msg_box_left">
                                    <img src={levelLogo} alt="头像" title={level} />
                                    <span className="msg_item">111111111</span>
                                </li>
                                <li className="msg_box_right">
                                    <span className="msg_item">2222222222</span>
                                    <img src={levelLogo} alt="头像" title={level} />
                                </li>
                            </ul>
                            {/* 发送框 */}
                            <div className="send_msg">
                                <input type="area" onChange={this.handleChange} value={msg} />
                                <Button type="primary" className="send_btn" onClick={() => this.sendmsg()}>发送</Button>
                            </div>
                        </Fragment> :
                        <div className="no-chatroom">{waringInfo}</div>
                    }
                    
                </div>
            </div>
        )
    }
}

export default Home
