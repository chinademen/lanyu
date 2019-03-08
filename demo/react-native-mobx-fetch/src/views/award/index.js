/**
 * 开奖详情 
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

@inject(({ homeStore }) => {
    return {
        noticeList: homeStore.noticeList,
        getNotice: homeStore.getNotice,
    }
})
@observer
export default class Award extends PureComponent {
    render() {
        return (
            <View>
                <Text>开奖详情</Text>
            </View>
        )
    }
}