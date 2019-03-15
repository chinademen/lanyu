/**
 * 契约分红
 */
import React, { Component } from 'react'
import {
    StyleSheet,
} from 'react-native'
import { Container, Tab, Tabs, ScrollableTab } from 'native-base'
import {observer, inject} from 'mobx-react/native'
import CommonHeader from '@/components/Header'
import ContractBase from './ContractBase'
import ContractLow from './ContractLow'
import ContractReport from './ContractReport'

@inject(({ app }) => {
    return {
        submiting: app.submiting,
    }
})
@observer
export default class Contract extends Component {

    onBack = () => {
        this.props.navigator.pop()
    }

    render() {
        const { navigator } = this.props;

        return (
            <Container>
                <CommonHeader title={i18n.REPORT_MODULE_CONTRACT} onBack={this.onBack}/>
                <Tabs renderTabBar={() => <ScrollableTab navigator={navigator} />}>
                    <Tab heading={i18n.REPORT_TAB_CONTRACT_BASE}>
                        <ContractBase />
                    </Tab>
                    <Tab heading={i18n.REPORT_TAB_CONTRACT_LOW}>
                        <ContractLow />
                    </Tab>
                    <Tab heading={i18n.REPORT_TAB_CONTRACT_REPORT}>
                        <ContractReport />
                    </Tab>
                </Tabs>
            </Container>
        )
    }
}

const styles = StyleSheet.create({

})