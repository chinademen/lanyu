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
import CommonTab from '@/common/CommonTab'
import LotteryPLReport from './LotteryPLReport'
import AgPLReport from './AgPLReport'
import PtPLReport from './PtPLReport'

const tabs = [
    { name: i18n.REPORT_TAB_PROFITLOS_LOTTERY, component: LotteryPLReport },
    { name: i18n.REPORT_TAB_PROFITLOS_AG, component: AgPLReport },
    { name: i18n.REPORT_TAB_PROFITLOS_PT, component: PtPLReport },
];

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
                <CommonTab tabs={tabs} navigator={navigator} />
            </Container>
        )
    }
}

const styles = StyleSheet.create({
  
})