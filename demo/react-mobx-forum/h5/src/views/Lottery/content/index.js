import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { Tabs } from 'antd';
import SelectZone from './SelectZone';
import { playGroups } from './mock';
import { inject, observer } from 'mobx-react';
// import '@/index.less';

const TabPane = Tabs.TabPane;

@withRouter
@inject('lotteryStore') @observer
class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabName: null,
            methodName: null,
        };
    }

    onTabClick(key) {

    }

    onTabChange(key) {
        this.setState({ tabName: key });
    }

    // 玩法组
    createGroup(group) {
        let arr = group.map(item => {
            return (
                <TabPane tab={item.name_cn} key={item.name_cn}>
                    {this.createGroup2(item.children)}
                </TabPane>
            )
        });
        return arr;
    }

    // 玩法群
    createGroup2(group) {
        if (group && group.length > 0) {
            let arr = group.map(item => {
                return (
                    <div className="group_box" key={item.name_cn}>
                        <span className="group_name">{item.name_cn}：</span>
                        <ul className="group_ul">
                            {this.createGroup3(item.children)}
                        </ul>
                    </div>
                )
            });
            return arr;
        }
    }

    createGroup3(group) {
        if (group && group.length > 0) {
            let arr = group.map(item => {
                return (
                    <li className="group_li" key={item.name_cn} onClick={() => this.changeMethods(item.series_way_id)}>
                        {item.name_cn}
                    </li>
                )
            });
            return arr;
        }
    }

    // 改变玩法群
    changeMethods(methodName) {
        console.log(methodName);
        this.setState({ methodName });
    }

    render() {
        const { tabName, methodName } = this.state;
        const { gameMethods } = this.props.lotteryStore;
        // 玩法组
        const keys = [...playGroups.keys()];
        return (
            <div className="lottery_content">
                {/* 玩法组 */}
                {gameMethods && gameMethods.length > 0 &&
                    <Fragment>
                        <Tabs
                            type="card"
                            activeKey={tabName || gameMethods[0].name_cn}
                            onTabClick={activeKey => this.onTabClick(activeKey)}
                            onChange={activeKey => this.onTabChange(activeKey)}
                        >
                            {this.createGroup(gameMethods)}
                        </Tabs>
                    </Fragment>
                }
                {/* 选码区域 */}
                <SelectZone methodName={methodName} />
            </div>
        )
    }
}
export default Content