/**
 * 彩票账变报表
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
export default class LotteryChangeReport extends Component {

    render() {
        return (
            <View>
                <Text>彩票账变报表</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  
})