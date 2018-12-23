import React, { Component, Fragment } from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import {  message } from 'antd';
import './index.less';
/* 聊天列表、音乐列表、好友列表、资料列表 */
import ChatTab from '../Tabs/ChatTab';
import MusicTab from '../Tabs/MusicTab';
import FriendTab from '../Tabs/FriendTab';
import InfoTab from '../Tabs/InfoTab';
/* 聊天室、音乐室、好友资料页面、个人资料页面 */
import ChatContent from '../TabsContent/ChatContent';
import MusicContent from '../TabsContent/MusicContent';
import FriendContent from '../TabsContent/FriendContent';
import InfoContent from '../TabsContent/InfoContent';

@withRouter
@inject('commonStore', 'socketioStore')
@observer
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0, // 当前选中功能Tab
            activeChat: null, // 当前选中的聊天室
            msg: '', // 聊天框消息
            waringInfo: '请选择聊天室', // 未进入聊天室提示信息
            isClearMsgList: false, // 是否清空聊天室信息
        };
    }

    componentDidMount() {
        if (!this.props.commonStore.authorization) {
            message.error('用户未登陆');
            this.props.history.replace('/login');
            return;
        }
    }

    // 生成功能选项卡
    createTabs = activeTab => {
        const list = ['聊天', '音乐', '好友', '资料'].map((item, index) => {
            const cls = activeTab === index ? 'features-item active' : 'features-item';
            return <li className={cls} key={[index]} onClick={() => this.changeTabs(index)}>{item}</li>;
        });
        return list;
    }

    // 切换功能选项卡
    changeTabs = activeTab => {
        this.setState({ activeTab });
    }

    // 聊天消息
    handleChangeEditor = (editorState) => {
        const htmlString = editorState.toHTML();
        this.setState({ editorState });
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
        // 关闭上一次聊天
        const { username } = this.props.commonStore;
        if (this.props.socketioStore.socket.connected && username) {
            this.props.socketioStore.socketLogout(username);
        }
        // 清空聊天记录, 最后加入的用户, 上一个聊天室的数据
        this.props.socketioStore.clearChatMsg();
        this.props.socketioStore.clearUser();
        this.clearMsgList(true);
        // 进入聊天室
        this.props.socketioStore.socketInit(username);
        // 监听其他用户登陆
        this.props.socketioStore.socketLogin();
        // 监听聊天消息
        this.props.socketioStore.socketWatch();
    }

    // 清空上一个聊天室的数据
    clearMsgList = isClearMsgList => {
        this.setState({
            isClearMsgList: !!isClearMsgList
        });
    }

    // 退出登陆
    logout = () => {
        this.props.commonStore.logout(() => {
            this.props.history.replace('/login');
        });
    }

    render() {
        const { activeTab, activeChat, activeMusic, waringInfo } = this.state;
        const { username, level, levelLogo, userAvatar } = this.props.commonStore;
        const { onlineCount, onlineUsers, user, chatMsg } = this.props.socketioStore;

        return (
            <div className="home_page clearfix">
                <div className="left">
                    {/* 用户信息 */}
                    <div className="header">
                        <span style={{ backgroundImage: `url(${userAvatar})` }}></span>
                        <span>{username}</span>
                        <span>等级：</span>
                        <img src={levelLogo} alt="等级" title={level} />
                    </div>
                    {/* 功能Tab */}
                    <ul className="features-Tabs">
                        {this.createTabs(activeTab)}
                    </ul>
                    {/* 聊天列表、音乐列表、好友列表、资料列表 */}
                    {activeTab === 0 && <ChatTab activeChat={activeChat} changeChat={this.changeChat} />}
                    {activeTab === 1 && <MusicTab />}
                    {activeTab === 2 && <FriendTab />}
                    {activeTab === 3 && <InfoTab />}
                </div>
                <div className="right">
                    {/* 聊天框用户信息 */}
                    <div className="header">
                        当前在线人数：<span>{onlineCount}</span>
                        <span className="logout" onClick={() => this.logout()}>退出</span>
                    </div>
                    {/* 聊天室、音乐室、好友资料页面、个人资料页面 */}
                    {activeTab === 0 && <ChatContent 
                        activeChat={activeChat} 
                        clearMsgList={this.clearMsgList}
                        isClearMsgList={this.state.isClearMsgList}
                        waringInfo={waringInfo}
                    />}
                    {activeTab === 1 && <MusicContent />}
                    {activeTab === 2 && <FriendContent />}
                    {activeTab === 3 && <InfoContent />}
                </div>
            </div>
        )
    }
}

export default Home
