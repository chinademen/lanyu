/**
 * 体育
 */
import React, { PureComponent } from 'react';
import {
    View,
} from 'react-native'
import TabList from '@/common/TabList'

function goBetPage() {
    alert('敬请期待')
}

const list = [
    { event: goBetPage, img: require('@/assets/dh/images/game/sport/hgty.png') },
    { event: goBetPage, img: require('@/assets/dh/images/game/sport/ibcty.png') },
    { event: goBetPage, img: require('@/assets/dh/images/game/sport/sport01.png') },
    { event: goBetPage, img: require('@/assets/dh/images/game/sport/sport02.png') },
];

export default class SportTab extends PureComponent {
    render() {
        const { navigator } = this.props;
        return (
            <View style={{flex: 1}}>
                <TabList navigator={navigator} list={list} />
            </View>
        )
    }
}
