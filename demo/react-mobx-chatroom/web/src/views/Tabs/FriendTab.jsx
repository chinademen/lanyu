/* 好友列表 */
import React, { Component, Fragment } from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { Icon, Button, message } from 'antd';
import { friendName } from '@/config/room';
import './index.less';

@withRouter
@inject('commonStore', 'socketioStore')
@observer
class FriendTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeFriend: 0, // 当前选中的好友
        };
    }

    // 生成好友列表
    createFriend = activeFriend => {
        const list = friendName.map((item, index) => {
            const cls = activeFriend === index ? 'friend_item active' : 'friend_item';
            const spanCls = activeFriend === index ? 'active_span' : '';
            return (
                <li className={cls} key={[index]} onClick={() => this.changeFriend(index)}>
                    <span>{item.name}</span>
                    <span className={spanCls}>最后登陆时间：{item.lasttime}</span>
                </li>
            );
        });
        return list;
    }

    // 切换好友
    changeFriend = index => {
        this.setState({
            activeFriend: index,
        });
    }

    render() {
        const { activeFriend } = this.state;

        return (
            <ul className="friend_box">
                <h4>再战艾泽拉斯 战友招募</h4>
                {this.createFriend(activeFriend)}
            </ul>
        )
    }
}

export default FriendTab;