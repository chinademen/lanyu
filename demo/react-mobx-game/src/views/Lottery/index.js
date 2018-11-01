import React, { Component } from 'react';
import { Card, Tabs } from 'antd';
import PlayGroup from './PlayGroup';
import SelectZone from './SelectZone';
import { playGroups } from './mock';
import '@/index.less';

const TabPane = Tabs.TabPane;

export default class Lottery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabName: null,
        };
    }

    onTabClick(key) {

    }

    onTabChange(key) {
        this.setState({ tabName: key });
    }

    createGroup(group) {
        if (group && group.length > 0) {
            let arr = group.map(item => {
                return (
                    <TabPane tab={item} key={item}></TabPane>
                )
            });
            return arr;
        }
    }

    render() {
        const { tabName } = this.state;
        // 玩法组
        const keys = [...playGroups.keys()];
        return (
            <div className="lottery_container">
                {/* 玩法组 */}
                    <Tabs
                        type="card"
                        activeKey={tabName || keys[0]}
                        onTabClick={activeKey => this.onTabClick(activeKey)}
                        onChange={activeKey => this.onTabChange(activeKey)}
                    >
                        {this.createGroup(keys)}
                    </Tabs>
                {/* 玩法群 */}
                <PlayGroup 
                    currentGroup={tabName || keys[0]}
                />
                {/* 选码区域 */}
                <SelectZone />
            </div>
        )
    }
}