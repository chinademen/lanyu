/**
 * 充提报表
 */
import React, { Component } from 'react'
import {
    StyleSheet,
} from 'react-native'
import { Container } from 'native-base'
import {observer, inject} from 'mobx-react/native'
import CommonHeader from '@/components/Header'
import CommonTab from '@/common/CommonTab'
import AccountDetails from './AccountDetails'
import Withdraw from './Withdraw'

const tabs = [
    { name: i18n.REPORT_TAB_RECHARGE_DETAILS, component: AccountDetails },
    { name: i18n.REPORT_TAB_RECHARGE_RECORD, component: Withdraw },
];

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
                <CommonTab tabs={tabs} navigator={navigator} />
            </Container>
        )
    }
}

const styles = StyleSheet.create({

})