/**
 * 活跃数据报表
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
export default class ActiveDayKnot extends Component {

    render() {
        return (
            <View>
                <Text>活跃数据</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  
})