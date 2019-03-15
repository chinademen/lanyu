/**
 * 投注页面 
 */
import React, { PureComponent } from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native'
import { toJS } from 'mobx'
import { observer, inject } from 'mobx-react/native'
import ScrollVertical from '@/components/ScrollVertical'
import CommonHeader from '@/components/Header'

@inject(({ homeStore }) => {
    return {
        noticeList: homeStore.noticeList,
        getNotice: homeStore.getNotice,
    }
})
@observer
export default class Bet extends PureComponent {
    onBack = () => {
        this.props.navigator.pop()
    }

    render() {
        return (
            <View>
                <CommonHeader title={i18n.REPORT_MODULE_BET} onBack={this.onBack}/>
                <Text>投注页面</Text>
            </View>
        )
    }
}