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
export default class LotteryBet extends PureComponent {
    onBack = () => {
        this.props.navigator.pop()
    }

    render() {
        // alert(JSON.stringify(this.props.navigator.state.routeStack[1].lotteryid))
        return (
            <View>
                <CommonHeader title={'投注页面'} onBack={this.onBack}/>
                <Text>{'投注页面'}</Text>
                <Text>{this.props.navigator.state.routeStack[1].lotteryid || '预加载'}</Text>
            </View>
        )
    }
}