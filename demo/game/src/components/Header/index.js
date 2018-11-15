import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { Icon, Button } from 'antd';
import QRCode from 'qrcode.react';
import { lotterymenu } from '@/mock/lottery.js';
import { opStorage } from '@/utils/db';

@withRouter
@inject('commonStore', 'lotteryStore') @observer
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            path: null, // 二维码保存路径 
        };
    }

    componentDidMount() {
        let storage = opStorage('mobx-game');
        if (storage && storage.currentLottery) {
            const { name, type } = storage.currentLottery;
            if (!type || name === '首页') {
                this.backHome();
                return;
            }
            this.props.commonStore.changeCurrentLotteryName(name);
            this.props.lotteryStore.getMethods(type);
        } 
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
        const { name, type } = item;
        // 改变当前彩种名称
        this.props.commonStore.changeCurrentLotteryName(name);
        // 保存当前彩种名称和类型
        const currentLottery = { name, type };
        opStorage('mobx-game', {
            key: 'currentLottery',
            value: currentLottery,
        });
        this.props.lotteryStore.getMethods(type);
        this.props.history.replace(`/lottery/${type}`);
    }

    // 返回首页
    backHome() {
        this.props.commonStore.changeCurrentLotteryName('首页');
        const currentLottery = {
            name: '首页',
            type: null, 
        }
        opStorage('mobx-game', {
            key: 'currentLottery',
            value: currentLottery,
        });
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
                    {/* 二维码链接 */}
                    <div className="qrcode">
                        <label>二维码</label>
                        <div className="qrcode-img">
                            <QRCode value="http://facebook.github.io/react/" />
                        </div>
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