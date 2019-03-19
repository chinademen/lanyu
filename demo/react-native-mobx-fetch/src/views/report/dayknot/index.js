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
import CommonTab from '@/common/CommonTab'
import LodingBtn from '@/components/LodingBtn'
import RechargeDayKnot from './RechargeDayKnot'
import ActiveDayKnot from './ActiveDayKnot'
import LotteryDayKnot from './LotteryDayKnot'
import AgDayKnot from './AgDayKnot'
import PtDayKnot from './PtDayKnot'

const tabs = [
    { name: i18n.REPORT_TAB_DAYKNOT_RECHARGE, component: RechargeDayKnot },
    { name: i18n.REPORT_TAB_DAYKNOT_ACTIVE, component: ActiveDayKnot },
    { name: i18n.REPORT_TAB_DAYKNOT_LOTTERY, component: LotteryDayKnot },
    { name: i18n.REPORT_TAB_DAYKNOT_AG, component: AgDayKnot },
    { name: i18n.REPORT_TAB_DAYKNOT_PT, component: PtDayKnot },
];

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
                <CommonTab tabs={tabs} navigator={navigator} />
            </Container>
        )
    }
}

const styles = StyleSheet.create({

})