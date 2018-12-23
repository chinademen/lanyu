import React, { Component, Fragment } from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { Icon, Button, message } from 'antd';
import { roomName } from '@/config/room';
import './index.less';

message.config({ top: 100, duration: 3, maxCount: 1 });

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
        const { user, clearMsgList, isClearMsgList } = nextProps;
        const { userList, msgList } = this.state;
        // 清空上一个聊天室的数据
        if (isClearMsgList) {
            this.setState({
                userList: [],
                msgList: []
            });
            clearMsgList(false);
        } else {
            // 新用户进入聊天室
            if (user && user.username && !userList.includes(user.username)) {
                userList.push(user.username); // 新用户加入在线用户队列
                msgList.push(user); // 聊天消息队列新增 '用户加入聊天室' 消息
                this.setState({ userList, msgList });
            }
        }
    }

    // 更新聊天室消息
    updateMsgBox = (chatMsg, user) => {
        let { msgList } = this.state;
        // 有用户发送消息，添加到消息队列
        if (chatMsg) {
            msgList.push(chatMsg);
        }
        const list = msgList.map((item, index) => {
            // 用户登录 item = { username };  用户发送消息 item = { username, content };
            const { username, content, levelLogo, level, userAvatar } = item;
            // 用户聊天
            if (content) {
                // 当前用户发送消息
                if (username === this.props.commonStore.username) {
                    return (
                        <li className="msg_box_right" key={[index]}>
                            <img src={userAvatar} alt="头像" title={`${username}、等级：${level}`} />
                            <span className="msg_item" dangerouslySetInnerHTML={{__html: content}}></span>
                        </li>
                    );
                } else {
                    // 其他用户发送消息
                    return (
                        <li className="msg_box_left" key={[index]}>
                            <img src={userAvatar} alt="头像" title={level} />
                            <span className="msg_item" dangerouslySetInnerHTML={{__html: content}}></span>
                        </li>
                    );
                }
            } else {
                // 新用户进入聊天室
                return (
                    <li className="msg_box_middle" key={[index]}>
                        {/* 用户 {username} 加入了 {roomName[index]} */}
                        用户 {username} 加入了房间
                    </li>
                );
            }
        });
        return list;
    }

    render() {
        const { chatMsg, user } = this.props;
        // 使用node-webshot进行网页截图
        return (
            <ul className="msg_box clearfix">
                {this.updateMsgBox(chatMsg, user)}
                <div id="msg_end" style={{ height: 0, overflow: 'hidden' }}></div>
            </ul>
        )
    }

    // 组件更新后
    componentDidUpdate() {
        // 消息盒子保持滚动到最底部
        if (document.getElementsByClassName('msg_box')[0]) {
            document.getElementById('msg_end').scrollIntoView(false);
        }
        // 清空本次socketio传过来的消息实体，避免用户切换聊天室时，别的用户重复渲染上一次的消息
        this.props.socketioStore.clearChatMsg();
    }
}

export default ChatRoom;
