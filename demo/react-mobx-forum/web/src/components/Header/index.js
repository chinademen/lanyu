import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { headerMenu } from '@/config/tabsMenu';
import './index.less';

@inject('commonStore')
@observer
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    // 创建头部目录
    createMenu() {
        const menu = headerMenu.map((item, index) => {
            return (
                <li key={[index]}
                    onClick={() => this.toLink()}
                >
                    <span data-hover={item}>{item}</span>
                </li>
            )
        });
        return menu;
    }

    // 页面跳转
    toLink() {
        console.log('跳转');
    }

    render() {
        return (
            <div className="header">
                <div className="header-content">
                    {/* 头部Logo */}
                    <span className="header-logo"></span>
                    {/* 头部目录 */}
                    <ul className="header-nav">
                        {this.createMenu()}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Header