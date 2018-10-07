import React, { Component } from 'react';
import { Card, Tabs } from 'antd';
import BasicTabs from '@/components/BasicTabs';
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

    render() {
        const { firstTabs, secondTabs } = this.state;
        const params = {
            firstTabs,
            secondTabs,
            tabsMenu
        };

        return (
            <Card>
                <BasicTabs {...params} />
            </Card>
        );
    }
}