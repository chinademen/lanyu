/**
 * 真人视讯
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
    { event: goBetPage, img: require('@/assets/dh/images/game/video/ag.png') },
    { event: goBetPage, img: require('@/assets/dh/images/game/video/bbin.png') },
    { event: goBetPage, img: require('@/assets/dh/images/game/video/pt.png') },
    { event: goBetPage, img: require('@/assets/dh/images/game/video/vr.png') },
    { event: goBetPage, img: require('@/assets/dh/images/game/video/wm.png') },
    { event: goBetPage, img: require('@/assets/dh/images/game/video/ag2.png') },
    { event: goBetPage, img: require('@/assets/dh/images/game/video/bbin2.png') },
    { event: goBetPage, img: require('@/assets/dh/images/game/video/bg.png') },
    { event: goBetPage, img: require('@/assets/dh/images/game/video/cg.png') },
    { event: goBetPage, img: require('@/assets/dh/images/game/video/ds.png') },
    { event: goBetPage, img: require('@/assets/dh/images/game/video/ob.png') },
    { event: goBetPage, img: require('@/assets/dh/images/game/video/og.png') },
    { event: goBetPage, img: require('@/assets/dh/images/game/video/tgp.png') },
];

export default class VideoTab extends PureComponent {
    render() {
        const { navigator } = this.props;
        return (
            <View style={{flex: 1}}>
                <TabList navigator={navigator} list={list} />
            </View>
        )
    }
}