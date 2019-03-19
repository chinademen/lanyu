/**
 * 彩票
 */
import React, { PureComponent } from 'react';
import {
    View,
} from 'react-native'
import LotteryList from './LotteryList'

export default class LotteryTab extends PureComponent {
    render() {
        const { navigator } = this.props;
        return (
            <View>
                {/* 时时彩 分分彩 11选5 低频彩  PK10/赛马 其他 */}
                <LotteryList navigator={navigator} />
            </View>
        )
    }
}