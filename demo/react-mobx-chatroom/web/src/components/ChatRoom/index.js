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
class ChatRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msgList: [], // 当前聊天室消息队列
            userList: [], // 当前聊天室在线用户队列
        };
    }

    componentWillReceiveProps(nextProps) {
        const { user } = nextProps;
        const { userList, msgList } = this.state;
        // 新用户进入聊天室
        if (user && user.username && !userList.includes(user.username)) {
            userList.push(user.username); // 新用户加入在线用户队列
            msgList.push(user); // 聊天消息队列新增 '用户加入聊天室' 消息
            this.setState({ userList, msgList });
        }
    }

    // 更新聊天室消息
    updateMsgBox = (chatMsg, user) => {
        let { msgList } = this.state;
        const { onlineCount, onlineUsers } = this.props.socketioStore;
        // 有用户发送消息，添加到消息队列
        if (chatMsg) {
            msgList.push(chatMsg);
        }
        console.log(msgList);
        const list = msgList.map((item, index) => {
            // 用户登录 item = { username };  用户发送消息 item = { username, content };
            const { username, content, levelLogo, level } = item;
            // 用户聊天
            if (content) {
                // 当前用户发送消息
                if (username === this.props.commonStore.username) {
                    return (
                        <li className="msg_box_right" key={[index]}>
                            <img src={levelLogo} alt="头像" title={level} />
                            <span className="msg_item">{content}</span>
                        </li>
                    );
                } else {
                    // 其他用户发送消息
                    return (
                        <li className="msg_box_left" key={[index]}>
                            <img src={levelLogo} alt="头像" title={level} />
                            <span className="msg_item">{content}</span>
                        </li>
                    );
                }
            } else {
                // 新用户进入聊天室
                return (
                    <li className="msg_box_middle" key={[index]}>
                        用户 {username} 加入了聊天室
                    </li>
                );
            }
        });
        return list;
    }

    render() {
        const { chatMsg, user } = this.props;

        return (
            <ul className="msg_box clearfix">
                {this.updateMsgBox(chatMsg, user)}
            </ul>
        )
    }
}

export default ChatRoom
