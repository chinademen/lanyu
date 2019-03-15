/**
 * 盈亏报表
 */
import React, { Component } from 'react'
import {
    StyleSheet,
} from 'react-native'
import { Container, Tab, Tabs, ScrollableTab } from 'native-base'
import {observer, inject} from 'mobx-react/native'
import CommonHeader from '@/components/Header'
import LotteryPLReport from './LotteryPLReport'
import AgPLReport from './AgPLReport'
import PtPLReport from './PtPLReport'

@inject(({ app }) => {
    return {
        submiting: app.submiting,
    }
})
@observer
export default class ProfitLoss extends Component {

    onBack = () => {
        this.props.navigator.pop()
    }

    render() {
        const { navigator } = this.props;

        return (
            <Container>
                <CommonHeader title={i18n.REPORT_MODULE_PROFITLOSS} onBack={this.onBack}/>
                <Tabs renderTabBar={() => <ScrollableTab navigator={navigator} />}>
                    <Tab heading={i18n.REPORT_TAB_PROFITLOS_LOTTERY}>
                        <LotteryPLReport />
                    </Tab>
                    <Tab heading={i18n.REPORT_TAB_PROFITLOS_AG}>
                        <AgPLReport />
                    </Tab>
                    <Tab heading={i18n.REPORT_TAB_PROFITLOS_PT}>
                        <PtPLReport />
                    </Tab>
                </Tabs>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
  
})