import React, { Component, Fragment } from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { Icon, Button, message } from 'antd';
import ChatRoom from '@/components/ChatRoom';
import { roomMenu } from '@/config/room';
import BraftEditor from 'braft-editor';
import 'braft-editor/dist/index.css';
import './index.less';

message.config({ top: 100, duration: 3, maxCount: 1 });
const controls = ['emoji', 'media'];

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
            isClearMsgList: false, // 是否清空聊天室信息
            editorState: BraftEditor.createEditorState(null),  // 聊天消息
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
    handleChangeEditor = (editorState) => {
        const htmlString = editorState.toHTML();
        this.setState({ editorState });
    }

    // 生成聊天室
    createChat = (index) => {
        const { activeChat } = this.state;
        const list = roomMenu.map((item, index) => {
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

    // 发送消息
    sendmsg = () => {
        const { editorState } = this.state;
        const htmlString = editorState.toHTML();
        // 发送消息
        this.props.socketioStore.socketSend(htmlString);
        // 重置消息框
        this.setState({
            editorState: BraftEditor.createEditorState(null)
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
                            <ChatRoom 
                                chatMsg={chatMsg}
                                user={user}
                                clearMsgList={this.clearMsgList}
                                isClearMsgList={this.state.isClearMsgList}
                            />
                            {/* 发送框 */}
                            <div className="send_msg">
                                {/* 富文本 */}
                                <BraftEditor
                                    controls={controls}
                                    contentStyle={{ height: 124, boxShadow: 'inset 0 1px 3px rgba(0,0,0,.1)' }}
                                    value={this.state.editorState} 
                                    onChange={this.handleChangeEditor}
                                />
                                {/* 自定义富文本 */}
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
