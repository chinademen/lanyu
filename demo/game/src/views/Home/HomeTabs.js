import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { Tabs, Card } from 'antd';
import { lotterymenu } from '@/mock/lottery';
import { opStorage } from '@/utils/db';

const TabPane = Tabs.TabPane;
const { Meta } = Card;

@withRouter
@inject('commonStore', 'lotteryStore') @observer
class HomeTabs extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    /* 选项卡切换 */
    handleChange = () => {

    }

    /* 生成选项卡区域 */
    createTabPane = (list) => {
        if (list && list.length > 0) {
            const result = list.map(item => {
                return (
                    <TabPane tab={item.name} key={item.type}>
                        {this.createContent(item.children)}
                    </TabPane>
                )
            });
            return result;
        }
        return null;
    }

    /* 生成内容 */
    createContent = (children) => {
        if (children && children.length > 0) {
            const result = children.map(item => {
                return (
                    <Card
                        hoverable
                        key={item.type}
                        className="lotteryCard"
                        cover={<img alt={item.name} src={item.src} />}
                        onClick={() => this.toLotteryPage(item)}
                    >
                        <Meta
                            title={item.name}
                            description={item.desc}
                        />
                    </Card>
                )
            });
            return result;
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

    render() {
        return (
            <div>
                <Tabs defaultActiveKey="ssc" onChange={this.handleChange}>
                    {this.createTabPane(lotterymenu)}
                </Tabs>
            </div>
        )
    }
}
export default HomeTabs;