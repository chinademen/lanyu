import React, { Component, Fragment } from 'react';
import { Tabs } from 'antd';
import Hoc from '@/components/Hoc';

const TabPane = Tabs.TabPane;

export default class BasicTabs extends Component {
    constructor(props) {
        super(props);
        this.state = {

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
                    const NewComponent = Hoc(item.component);
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
        const { firstTabs, secondTabs, tabsMenu } = this.props;
        return (
            <Fragment>
                <Tabs defaultActiveKey={ firstTabs || tabsMenu[0].key }>
                    {this.handleCreateTabs(tabsMenu, firstTabs, secondTabs)}
                </Tabs>
            </Fragment>
        );
    }
}