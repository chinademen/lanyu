import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { Tabs, Card } from 'antd';
import { lotterymenu } from '@/mock/lottery';

const TabPane = Tabs.TabPane;
const { Meta } = Card;
@withRouter
@inject('commonStore')
@observer
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
        this.props.commonStore.changeCurrentLotteryName(item.name);
        this.props.history.replace(`/lottery/${item.type}`);
    }

    render() {
        return (
            <div>
                <Tabs defaultActiveKey="ffc" onChange={this.handleChange}>
                    {this.createTabPane(lotterymenu)}
                </Tabs>
            </div>
        )
    }
}
export default HomeTabs;