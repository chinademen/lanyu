/**
 * 盈亏报表
 */
import React, { Component, Fragment } from 'react'
import {
    StyleSheet,
    TextInput,
    Image,
    Alert,
} from 'react-native'
import { Container, Header, Title, Content, Left, Right, Body, Text, Button } from 'native-base'
import {observer, inject} from 'mobx-react/native'
import CommonHeader from '@/components/Header'
import LodingBtn from '@/components/LodingBtn'

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

        return (
            <Container>
                <CommonHeader title={i18n.REPORT_MODULE_PROFITLOSS} onBack={this.onBack}/>
                <Content>
                    <Text>盈亏报表</Text>
                </Content>
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