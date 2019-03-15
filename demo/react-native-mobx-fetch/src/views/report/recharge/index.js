/**
 * 充提报表
 */
import React, { Component } from 'react'
import {
    StyleSheet,
} from 'react-native'
import { Container, Tab, Tabs, ScrollableTab } from 'native-base'
import {observer, inject} from 'mobx-react/native'
import CommonHeader from '@/components/Header'
import AccountDetails from './AccountDetails'
import Withdraw from './Withdraw'

@inject(({ app }) => {
    return {
        submiting: app.submiting,
    }
})
@observer
export default class Recharge extends Component {

    onBack = () => {
        this.props.navigator.pop()
    }

    render() {
        const { navigator } = this.props;

        return (
            <Container>
                <CommonHeader title={i18n.REPORT_MODULE_RECHARGE} onBack={this.onBack}/>
                <Tabs renderTabBar={() => <ScrollableTab navigator={navigator} />}>
                    <Tab heading={i18n.REPORT_TAB_RECHARGE_DETAILS}>
                        <AccountDetails />
                    </Tab>
                    <Tab heading={i18n.REPORT_TAB_RECHARGE_RECORD}>
                        <Withdraw />
                    </Tab>
                </Tabs>
            </Container>
        )
    }
}

const styles = StyleSheet.create({

})