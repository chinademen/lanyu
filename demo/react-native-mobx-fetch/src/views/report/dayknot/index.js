/**
 * 日结报表
 */
import React, { Component } from 'react'
import {
    StyleSheet,
} from 'react-native'
import { Container, Tab, Tabs, ScrollableTab } from 'native-base'
import {observer, inject} from 'mobx-react/native'
import CommonHeader from '@/components/Header'
import LodingBtn from '@/components/LodingBtn'
import RechargeDayKnot from './RechargeDayKnot'
import ActiveDayKnot from './ActiveDayKnot'
import LotteryDayKnot from './LotteryDayKnot'
import AgDayKnot from './AgDayKnot'
import PtDayKnot from './PtDayKnot'

@inject(({ app }) => {
    return {
        submiting: app.submiting,
    }
})
@observer
export default class DayKnot extends Component {

    onBack = () => {
        this.props.navigator.pop()
    }

    render() {
        const { navigator } = this.props;

        return (
            <Container>
                <CommonHeader title={i18n.REPORT_MODULE_DAYKNOT} onBack={this.onBack}/>
                <Tabs renderTabBar={() => <ScrollableTab navigator={navigator} />}>
                    <Tab heading={i18n.REPORT_TAB_DAYKNOT_RECHARGE}>
                        <RechargeDayKnot />
                    </Tab>
                    <Tab heading={i18n.REPORT_TAB_DAYKNOT_ACTIVE}>
                        <ActiveDayKnot />
                    </Tab>
                    <Tab heading={i18n.REPORT_TAB_DAYKNOT_LOTTERY}>
                        <LotteryDayKnot />
                    </Tab>
                    <Tab heading={i18n.REPORT_TAB_DAYKNOT_AG}>
                        <AgDayKnot />
                    </Tab>
                    <Tab heading={i18n.REPORT_TAB_DAYKNOT_PT}>
                        <PtDayKnot />
                    </Tab>
                </Tabs>
            </Container>
        )
    }
}

const styles = StyleSheet.create({

})