/* 聊天室列表 */
import React, { Component, Fragment } from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { Icon, Button, message } from 'antd';
import { roomMenu } from '@/config/room';
import './index.less';

@withRouter
@inject('commonStore', 'socketioStore')
@observer
class ChatTab extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    // 生成聊天室列表
    createChat = activeChat => {
        const list = roomMenu.map((item, index) => {
            const cls = activeChat === index ? 'chat_item active' : 'chat_item';
            return (
                <li className={cls} key={[index]} onClick={() => this.props.changeChat(index)}>
                    <img src={item.logo} alt="等级" />
                    {item.name}
                </li>
            );
        });
        return list;
    }

    render() {
        const { activeChat } = this.props;

        return (
            <ul className="chat_box">
                {this.createChat(activeChat)}
            </ul>
        )
    }
}

export default ChatTab;