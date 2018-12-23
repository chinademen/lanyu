/* 好友 */
import React, { Component, Fragment } from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { Button, message } from 'antd';
import './index.less';

@withRouter
@inject('commonStore', 'socketioStore')
@observer
class FriendContent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { activeChat, clearMsgList, isClearMsgList, waringInfo } = this.props;
        const { user, chatMsg } = this.props.socketioStore;

        return (
            <div className="freind_content">
                好友功能正在开发中，敬请期待...
            </div>
        )
    }
}

export default FriendContent;