import React, { Component } from 'react';
import { Card, Tabs } from 'antd';
import HightComponent from '@/components/HightComponent/HightComponent';
import tabsMenu from './config';

const TabPane = Tabs.TabPane;

export default class CreateTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstTabs: 'Hobby',
            secondTabs: 'Game'
        };
    }

    handleCreateTabs = (tabsMenu, firstTabs, secondTabs) => {
        if (tabsMenu && tabsMenu.length > 0) {
            const tabs = tabsMenu.map(item => {
                // 有子tabs
                if (item.children) {
                    const defaultActiveKey = (firstTabs === item.key && secondTabs) ? secondTabs : item.children[0].key;
                    return (
                        <TabPane tab={item.tab} key={item.key}>
                            <Tabs defaultActiveKey={defaultActiveKey}>
                                {this.handleCreateTabs(item.children)}
                            </Tabs>
                        </TabPane>
                    )
                } else {
                    // 无子tabs
                    const NewComponent = HightComponent(item.component);
                    return (
                        <TabPane tab={item.tab} key={item.key}>
                            <NewComponent />
                        </TabPane>
                    )
                }
            });
            return tabs;
        }
    }

    render() {
        const { firstTabs, secondTabs } = this.state;

        return (
            <Card>
                <Tabs defaultActiveKey={ firstTabs || tabsMenu[0].key }>
                    {this.handleCreateTabs(tabsMenu, firstTabs, secondTabs)}
                </Tabs>
            </Card>
        );
    }
}