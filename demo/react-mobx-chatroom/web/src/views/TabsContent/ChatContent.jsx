/* 聊天室 */
import React, { Component, Fragment } from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import ChatRoom from '@/components/ChatRoom';
import { Button, message } from 'antd';
import './index.less';
import BraftEditor from 'braft-editor'; // 富文本
import 'braft-editor/dist/index.css'; // 富文本样式
import 'braft-extensions/dist/emoticon.css'; // 富文本表情包组件样式
import Emoticon, { defaultEmoticons } from 'braft-extensions/dist/emoticon'; // 表情包组件和默认表情包列表

// 转换默认表情包列表，让webpack可以正确加载到默认表情包中的图片，请确保已对png格式的文件配置了loader
const emoticons = defaultEmoticons.map(item => require(`braft-extensions/dist/assets/${item}`));

// 也可以使用自己的表情包资源，不受打包工具限制
// const emoticons = ['http://path/to/emoticon-1.png', 'http://path/to/emoticon-2.png', 'http://path/to/emoticon-3.png', 'http://path/to/emoticon-4.png', ...]

// 转换自定义表情包
BraftEditor.use(Emoticon({
  includeEditors: ['demo-editor-with-emoticon'],
  emoticons: emoticons
}));

message.config({ top: 100, duration: 3, maxCount: 1 });
// 富文本显示的功能列表
const controls = ['emoji', 'media'];

@withRouter
@inject('commonStore', 'socketioStore')
@observer
class ChatContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: BraftEditor.createEditorState(null),  // 聊天消息
        };
    }

    // 聊天消息
    handleChangeEditor = (editorState) => {
        const htmlString = editorState.toHTML();
        this.setState({ editorState });
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

    render() {
        const { activeChat, clearMsgList, isClearMsgList, waringInfo } = this.props;
        const { user, chatMsg } = this.props.socketioStore;

        return (
            <Fragment>
                {activeChat || activeChat === 0 ?
                    <Fragment>
                        {/* 消息盒子 */}
                        <ChatRoom 
                            chatMsg={chatMsg}
                            user={user}
                            clearMsgList={clearMsgList}
                            isClearMsgList={isClearMsgList}
                        />
                        {/* 发送框 */}
                        <div className="send_msg">
                            {/* 富文本 */}
                            <BraftEditor
                                id="demo-editor-with-emoticon"
                                controls={controls}
                                contentStyle={{ height: 124, boxShadow: 'inset 0 1px 3px rgba(0,0,0,.1)' }}
                                value={this.state.editorState} 
                                onChange={this.handleChangeEditor}
                            />
                            {/* 自定义按钮 */}
                            <Button type="primary" className="send_btn" onClick={() => this.sendmsg()}>发送</Button>
                        </div>
                    </Fragment> :
                    <div className="no-chatroom">{waringInfo}</div>
                } 
            </Fragment>
        )
    }
}

export default ChatContent;