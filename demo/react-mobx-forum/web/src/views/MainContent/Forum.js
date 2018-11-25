/* 论坛 */
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import './index.less';

@inject('commonStore')
@observer
class Forum extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let { ggList } = this.props.commonStore;
        return (
            <div className="forum">

            </div>
        )
    }
}

export default Forum
