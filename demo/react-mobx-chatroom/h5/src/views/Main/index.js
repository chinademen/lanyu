import React, { Component, Fragment } from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import {  message } from 'antd';
import Hoc from '@/components/Hoc';
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

const tabs = [ChatTab,  MusicTab, FriendTab, InfoTab];
const contents = [ChatContent, MusicContent, FriendContent, InfoContent];

@withRouter
@inject('commonStore', 'socketioStore')
@observer
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    // 选择列表页
    createTabs = (active, isTabs) => {
        // 选择列表页
        if (isTabs) {
            const NewComponnet = Hoc(tabs[active]);
            return <NewComponnet {...this.props} />;
        } else {
            // 选择内容页
            const NewComponnet = Hoc(contents[active]);
            return <NewComponnet {...this.props} />;
        }
    }


    render() {
        const { active, isTabs } = this.props;

        return (
            <div className="main">
                {/* 列表页 / 内容页 */}
                {this.createTabs(active, isTabs)}
            </div>
        )
    }
}

export default Main
