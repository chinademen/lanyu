/* 其他社区 */
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import './index.less';

@inject('commonStore')
@observer
class OtherCommunity extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="other-community">

            </div>
        )
    }
}

export default OtherCommunity
