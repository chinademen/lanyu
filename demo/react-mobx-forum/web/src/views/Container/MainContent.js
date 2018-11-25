/* 主要内容 */
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { navMenu, navMenu2 } from '@/config/tabsMenu';
import Nav from '../MainContent/Nav';
import UserInfo from '../MainContent/UserInfo';
import OtherCommunity from '../MainContent/OtherCommunity';
import Banner from '../MainContent/Banner';
import Forum from '../MainContent/Forum';
import Footer from '../MainContent/Footer';
import './index.less';

@inject('commonStore')
@observer
class MainContent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="main-content">
                {/* 导航 */}
                <Nav />
                {/* 登陆 / 用户信息 */}
                <UserInfo />
                {/* 其他社区跳转 */}
                <OtherCommunity />
                {/* 自适应高度广告栏 */}
                <Banner />
                {/* 论坛区 */}
                <Forum />
                {/* 页脚 */}
                <Footer />
            </div>
        )
    }
}

export default MainContent
