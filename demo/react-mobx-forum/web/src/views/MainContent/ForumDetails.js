/* 讨论区 */
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import './index.less';

@inject('commonStore', 'forumStore')
@observer
class ForumDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        return (
            <div className="forum-details clearfix">
                讨论区
            </div>
        )
    }
}

export default ForumDetails
