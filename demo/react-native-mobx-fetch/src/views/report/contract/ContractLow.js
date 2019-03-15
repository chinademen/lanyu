/**
 * 下级契约
 */
import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text
} from 'react-native'
import { Container } from 'native-base'
import {observer, inject} from 'mobx-react/native'
import LodingBtn from '@/components/LodingBtn'

@inject(({ app }) => {
    return {
        submiting: app.submiting,
    }
})
@observer
export default class ContractLow extends Component {

    render() {
        return (
            <View>
                <Text>下级契约</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  
})