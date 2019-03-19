/**
 * 电子
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
    { event: goBetPage, img: require('@/assets/dh/images/game/electron/ag.png') },
    { event: goBetPage, img: require('@/assets/dh/images/game/electron/bbin.png') },
    { event: goBetPage, img: require('@/assets/dh/images/game/electron/pt.png') },
    { event: goBetPage, img: require('@/assets/dh/images/game/electron/jdb.png') },
    { event: goBetPage, img: require('@/assets/dh/images/game/electron/mg.png') },
    { event: goBetPage, img: require('@/assets/dh/images/game/electron/psdz.png') },
    { event: goBetPage, img: require('@/assets/dh/images/game/electron/pt2.png') },
    { event: goBetPage, img: require('@/assets/dh/images/game/electron/sw.png') },
    { event: goBetPage, img: require('@/assets/dh/images/game/electron/yp.png') },
];

export default class ElectronTab extends PureComponent {
    render() {
        const { navigator } = this.props;
        return (
            <View style={{flex: 1}}>
                <TabList navigator={navigator} list={list} />
            </View>
        )
    }
}
