/**
 * 棋牌
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
    { event: goBetPage, img: require('@/assets/dh/images/game/chess/dsqp.png') },
    { event: goBetPage, img: require('@/assets/dh/images/game/chess/kyqp.png') },
    { event: goBetPage, img: require('@/assets/dh/images/game/chess/lyqp.png') },
    { event: goBetPage, img: require('@/assets/dh/images/game/chess/vgqp.png') },
];

export default class ChessTab extends PureComponent {
    render() {
        const { navigator } = this.props;
        return (
            <View style={{flex: 1}}>
                <TabList navigator={navigator} list={list} />
            </View>
        )
    }
}