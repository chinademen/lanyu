import React, { Component } from 'react'
import { Icon } from 'antd'
import './index.less'

export default class NavTab extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className='nav_tab'>
                <div className='nav_tab_main'>
                    <ul className='list'>
                        <li className='item'>
                            <Icon type="facebook" />
                            <span>首页</span>
                        </li>
                        <li className='item'>
                            <Icon type="facebook" />
                            <span>彩票</span>
                        </li>
                        <li className='item'>
                            <Icon type="facebook" />
                            <span>电游</span>
                        </li>
                        <li className='item'>
                            <Icon type="facebook" />
                            <span>真人</span>
                        </li>
                        <li className='item'>
                            <Icon type="facebook" />
                            <span>体育</span>
                        </li>
                        <li className='item'>
                            <Icon type="facebook" />
                            <span>活动</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}