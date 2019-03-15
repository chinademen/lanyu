/**
 * 账变报表
 */
import React, { Component } from 'react'
import {
    StyleSheet,
} from 'react-native'
import { Container, Tab, Tabs, ScrollableTab } from 'native-base'
import {observer, inject} from 'mobx-react/native'
import CommonHeader from '@/components/Header'
import LotteryChangeReport from './LotteryChangeReport'
import AgChangeReport from './AgChangeReport'
import PtChangeReport from './PtChangeReport'

@inject(({ app }) => {
    return {
        submiting: app.submiting,
    }
})
@observer
export default class AccountChange extends Component {

    onBack = () => {
        this.props.navigator.pop()
    }

    render() {
        const { navigator } = this.props;

        return (
            <Container>
                <CommonHeader title={i18n.REPORT_MODULE_ACCOUNTCHANGE} onBack={this.onBack}/>
                <Tabs renderTabBar={() => <ScrollableTab navigator={navigator} />}>
                    <Tab heading={i18n.REPORT_TAB_ACCOUNTCHANGE_LOTTERY}>
                        <LotteryChangeReport />
                    </Tab>
                    <Tab heading={i18n.REPORT_TAB_ACCOUNTCHANGE_AG}>
                        <AgChangeReport />
                    </Tab>
                    <Tab heading={i18n.REPORT_TAB_ACCOUNTCHANGE_PT}>
                        <PtChangeReport />
                    </Tab>
                </Tabs>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5'
    },
})