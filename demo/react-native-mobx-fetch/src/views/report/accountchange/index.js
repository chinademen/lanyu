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
import CommonTab from '@/common/CommonTab'
import LotteryChangeReport from './LotteryChangeReport'
import AgChangeReport from './AgChangeReport'
import PtChangeReport from './PtChangeReport'

const tabs = [
    { name: i18n.REPORT_TAB_ACCOUNTCHANGE_LOTTERY, component: LotteryChangeReport },
    { name: i18n.REPORT_TAB_ACCOUNTCHANGE_AG, component: AgChangeReport },
    { name: i18n.REPORT_TAB_ACCOUNTCHANGE_PT, component: PtChangeReport },
];

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
                <CommonTab tabs={tabs} navigator={navigator} />
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