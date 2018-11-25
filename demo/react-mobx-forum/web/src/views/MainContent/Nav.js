/* 导航 */
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { navMenu, navMenu2 } from '@/config/tabsMenu';
import './index.less';

@inject('commonStore')
@observer
class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.commonStore.getgg()
    }

    // 创建一级导航
    createNav() {
        const { activeNav } = this.props.commonStore;
        const menu = navMenu.map((item, index) => {
            return (
                <li className={activeNav === index && 'active' || ''}
                    key={[index]}
                    onClick={() => this.changeMenu(index, 1)}
                >
                    <span>{item}</span>
                    {/* <ul className="main-menu">
                        {this.createMenu(index)}
                    </ul> */}
                </li>
            )
        });
        return menu;
    }

    // 创建二级导航
    // createMenu(index) {
    //     const menu = navMenu2[index].map((item, index) => {
    //         return (
    //             <li key={[index]}
    //                 onClick={() => this.changeMenu(index, 2)}
    //             >
    //                 <span>{item}</span>
    //             </li>
    //         )
    //     });
    //     return menu;
    // }

    // 目录切换
    changeMenu(index, level) {
        this.props.commonStore.updateTab(index, level)
    }

    render() {
        return (
            <ul className="main-nav">
                {this.createNav()}
            </ul>
        )
    }
}

export default Nav
