/* 主要内容 */
import React, { Component, Fragment } from 'react';
import { inject, observer } from 'mobx-react';
import Hoc from '@/components/Hoc';
import Nav from '../MainContent/Nav';
import UserInfo from '../MainContent/UserInfo';
import OtherCommunity from '../MainContent/OtherCommunity';
import Banner from '../MainContent/Banner';
import Register from '../MainContent/Register';
import Forum from '../MainContent/Forum';
import ForumDetails from '../MainContent/ForumDetails';
import Article from '../MainContent/Article';
import Footer from '../MainContent/Footer';
import './index.less';
import { viewList } from '@/config/tabsMenu';

@inject('commonStore')
@observer
class MainContent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    // 切换显示区域
    changeComponents(name) {
        const currentView = {
            'register': <Register />,
            'forum': <Forum />,
            'forumDetails': <ForumDetails />,
            'article': <Article />
        }[name];
        return currentView;
    }

    render() {
        const { currentViewName } = this.props.commonStore;
        return (
            <div className="main-content">
                {/* 导航 */}
                <Nav />
                {/* 登陆 / 用户信息 */}
                <UserInfo />
                {/* 其他社区跳转 */}
                <OtherCommunity />
                {/* 广告栏 */}
                {currentViewName !== 'register' && <Banner />}
                {/*  注册 || 论坛区 || 讨论区 || 帖子  */}
                {this.changeComponents(currentViewName)}
                {/* 页脚 */}
                <Footer />
            </div>
        )
    }
}

export default MainContent
