/* 帖子 */
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Icon } from 'antd';
import './index.less';

@inject('commonStore', 'forumStore')
@observer
class Article extends Component {
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
            <div className="article clearfix">
                <div className="article-header">
                    <div className="breadcrumb">
                        <a onClick={() => this.toHomePage()}>论坛首页</a>
                        <Icon type="right" style={{ marginRight: 10 }} />
                        <a onClick={() => this.toForum()}>xxx论坛</a>
                        <Icon type="right" style={{ marginRight: 10 }} />
                        <a>xxx讨论区</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Article
