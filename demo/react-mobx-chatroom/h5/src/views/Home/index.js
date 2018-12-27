import React, { Component, Fragment } from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import {  message } from 'antd';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Main from '../Main';
import './index.less';

@withRouter
@inject('commonStore', 'socketioStore')
@observer
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // activeChat: null, // 当前选中的聊天室
            // msg: '', // 聊天框消息
            // waringInfo: '请选择聊天室', // 未进入聊天室提示信息
            // isClearMsgList: false, // 是否清空聊天室信息
        };
    }

    componentDidMount() {
        if (!this.props.commonStore.authorization) {
            message.error('用户未登陆');
            this.props.history.replace('/login');
            return;
        }
    }

    // 聊天消息
    // handleChangeEditor = (editorState) => {
    //     const htmlString = editorState.toHTML();
    //     this.setState({ editorState });
    // }

    // 切换聊天室
    // changeChat = (index) => {
    //     const { level } = this.props.commonStore;
    //     const userLevel = Number.parseInt(level);
    //     // 当前登陆用户不能进入高于用户等级的聊天室， 用户等级：userLevel， 聊天室等级：index + 1
    //     if (userLevel < index + 1) {
    //         this.setState({
    //             activeChat: null,
    //             waringInfo: '对不起，你的等级未达到，不允许进入该聊天室！'
    //         });
    //         return;
    //     }
    //     this.setState({
    //         activeChat: index,
    //     });
    //     // 关闭上一次聊天
    //     const { username } = this.props.commonStore;
    //     if (this.props.socketioStore.socket.connected && username) {
    //         this.props.socketioStore.socketLogout(username);
    //     }
    //     // 清空聊天记录, 最后加入的用户, 上一个聊天室的数据
    //     this.props.socketioStore.clearChatMsg();
    //     this.props.socketioStore.clearUser();
    //     this.clearMsgList(true);
    //     // 进入聊天室
    //     this.props.socketioStore.socketInit(username);
    //     // 监听其他用户登陆
    //     this.props.socketioStore.socketLogin();
    //     // 监听聊天消息
    //     this.props.socketioStore.socketWatch();
    // }

    // 清空上一个聊天室的数据
    // clearMsgList = isClearMsgList => {
    //     this.setState({
    //         isClearMsgList: !!isClearMsgList
    //     });
    // }

    // 退出登陆
    // logout = () => {
    //     this.props.commonStore.logout(() => {
    //         this.props.history.replace('/login');
    //     });
    // }

    render() {
        // const { activeChat, activeMusic, waringInfo, isClearMsgList } = this.state;
        // const { username, level, levelLogo, userAvatar, activeTab, isTabs } = this.props.commonStore;
        // const { onlineCount, onlineUsers, user, chatMsg } = this.props.socketioStore;
        const { activeChat, waringInfo, isClearMsgList } = this.state;
        const { activeTab, isTabs } = this.props.commonStore;

        // 聊天室需要的属性和方法
        const chatAttrs = {
            activeChat,
            isClearMsgList,
            waringInfo,
            clearMsgList: this.clearMsgList,
        };

        return (
            <div className="home_page clearfix">
                {/* 头部 */}
                <Header />
                {/* 中间部分 */}
                <Main 
                    active={activeTab} 
                    isTabs={isTabs}
                    {...chatAttrs}
                />
                {/* 底部 */}
                <Footer 
                    active={activeTab}  
                />            
            </div>
        )
    }
}

export default Home
