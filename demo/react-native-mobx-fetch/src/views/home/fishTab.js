/**
 * 捕鱼
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
    { event: goBetPage, img: require('@/assets/dh/images/game/fish/ag.png') },
    { event: goBetPage, img: require('@/assets/dh/images/game/fish/gg.png') },
    { event: goBetPage, img: require('@/assets/dh/images/game/fish/pt.png') },
    { event: goBetPage, img: require('@/assets/dh/images/game/fish/agby.png') },
    { event: goBetPage, img: require('@/assets/dh/images/game/fish/fish02.png') },
    { event: goBetPage, img: require('@/assets/dh/images/game/fish/fish03.png') },
    { event: goBetPage, img: require('@/assets/dh/images/game/fish/ggby.png') },
];

export default class FishTab extends PureComponent {
    render() {
        const { navigator } = this.props;
        return (
            <View style={{flex: 1}}>
                <TabList navigator={navigator} list={list} />
            </View>
        )
    }
}