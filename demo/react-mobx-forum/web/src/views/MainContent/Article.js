/* 帖子 */
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import './index.less';

@inject('commonStore', 'forumStore')
@observer
class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        return (
            <div className="article clearfix">
                帖子页
            </div>
        )
    }
}

export default Article
