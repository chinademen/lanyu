/* 讨论区 */
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Icon } from 'antd';
import './index.less';

@inject('commonStore', 'forumStore')
@observer
class ForumDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    // 跳转到首页
    toHomePage() {
        this.props.commonStore.changeCurrentView('forum')
        this.props.forumStore.getForumListZone('null')
    }

    // 跳转到上级论坛选择区
    toForum() {
        const { forumid } = this.props.forumStore;
        this.props.commonStore.changeCurrentView('forum');
        this.props.forumStore.getForumListZone(forumid);
    }

    render() {

        return (
            <div className="forum-details clearfix">
                <div className="forum-details-header">
                    <div className="breadcrumb">
                        <a onClick={() => this.toHomePage()}>论坛首页</a>
                        <Icon type="right" style={{ marginRight: 10 }} />
                        <a onClick={() => this.toForum()}>xxx论坛</a>
                        <Icon type="right" style={{ marginRight: 10 }} />
                        <a>xxx讨论区</a>
                    </div>
                    <div className="title">
                        <div className="icon">
                            <img src={require('../../static/images/common/common_icon1-1.png')} alt="讨论区logo" />
                        </div>
                        <div className="rightbox">
                            <p className="bankuai-name">
                                <a className="bankuai-name-title">综合讨论区</a>
                                <span>今日：</span>
                                <em>(6141)</em>
                                <span className="pipe">|</span>
                                <span>主题：</span>
                                <em>11.7万</em>
                                <span className="pipe">|</span>
                                <span>排名：</span>
                                <em>1</em>
                            </p>
                            <p className="bankuai-banzhu">
                                版主：
                                <a>MC，</a><a>浮生，</a><a>在菲小俊杰，</a><a>马尼拉的王，</a><a>xx666</a>
                            </p>
                            <p className="bankuai-desc">
                                聊你所想的，所说的。
                            </p>
                        </div>
                    </div>
                </div>
                <div className="forum-details-body">
                    <h4>帖子列表</h4>
                    <h4>分页组件</h4>
                    <h4>帖子分类选项卡</h4>
                    <ul>
                        <li>帖子1111111111</li>
                        <li>帖子2222222222</li>
                        <li>帖子3333333333</li>
                        <li>帖子4444444444</li>
                        <li>帖子5555555555</li>
                        <li>帖子6666666666</li>
                        <li>帖子7777777777</li>
                        <li>帖子8888888888</li>
                        <li>帖子9999999999</li>
                        <li>帖子1010101010</li>
                    </ul>
                    <h4>分页组件</h4>
                </div>
            </div>
        )
    }
}

export default ForumDetails
