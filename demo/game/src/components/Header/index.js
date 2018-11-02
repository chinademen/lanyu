import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { Icon, Button } from 'antd';
import { lotterymenu } from '@/mock/lottery.js';

@withRouter
@inject('commonStore')
@observer
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    // 生成彩种目录 
    createLotteryMenu(list) {
        if (list && list.length > 0) {
            const menus = list.map(item => {
                return (
                    <Fragment key={item.type}>
                        <span className="lotteryName">{item.name}</span>
                        <ul className="lotteryUl">
                            {this.createMenuLi(item.children)}
                        </ul>
                    </Fragment>
                )
            });
            return menus;
        }
        return null;
    }

    // 遍历生成所有彩种
    createMenuLi(children) {
        if (children && children.length > 0) {
            const menuLi = children.map(item => {
                return (
                    <li key={item.type} onClick={() => this.toLotteryPage(item)}>{item.name}</li>
                )
            });
            return menuLi;
        }
        return null;
    }

    // 跳转彩票页面
    toLotteryPage(item) {
        // 改变当前彩种名称
        this.props.commonStore.changeCurrentLotteryName(item.name);
        this.props.history.replace(`/lottery/${item.type}`);
    }

    // 返回首页
    backHome() {
        this.props.commonStore.changeCurrentLotteryName('首页');
        this.props.history.replace('/home');
    }

    render() {
        return (
            <div className="header">
                <div className="headerContainer">
                    <div className="headerLeft">
                        <Icon type="appstore" theme="filled" style={{ fontSize: '40px', float: 'left', marginTop: '10px', color: '#220ef4f7' }} />
                        <span>{this.props.commonStore.currentLottertyName}</span>
                    </div>
                    {/* 展示所有游戏种类 */}
                    <div className="list">
                        {this.createLotteryMenu(lotterymenu)}
                    </div>
                    <div className='clearfix headerRight'>
                        <span className="headerSpan">张三</span>
                        <span className="headerSpan">9999999.999</span>
                        <Button type="primary" onClick={() => this.backHome()}>返回首页</Button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Header;