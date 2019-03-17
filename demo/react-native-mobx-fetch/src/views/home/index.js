/**
 * 主页
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
} from 'react-native'
import { observer, inject } from 'mobx-react/native'
import LinearGradient from 'react-native-linear-gradient'
import NetInfoDecorator from '@/components/NetInfoDecorator'
import CommonTab from '@/components/CommonTab'
import ChangeSkin from '@/components/ChangeSkin'
import Banner from './Banner'
import Notice from './Notice'
import Balance from './Balance'
import LotteryTab from './LotteryTab'
import ChessTab from './ChessTab'
import VideoTab from './VideoTab'
import SportTab from './SportTab'
import ElectronTab from './ElectronTab'
import FishTab from './FishTab'

const tabs = [
    { name: i18n.HOME_TEXT_LOTTERY, component: LotteryTab },
    { name: i18n.HOME_TEXT_CHESS, component: ChessTab },
    { name: i18n.HOME_TEXT_VIDEO, component: VideoTab },
    { name: i18n.HOME_TEXT_SPORT, component: SportTab },
    { name: i18n.HOME_TEXT_ELECTRON, component: ElectronTab },
    { name: i18n.HOME_TEXT_FISH, component: FishTab },
];

@NetInfoDecorator
@inject(({ app, homeStore, lotteryStore }) => {
    return {
        appSkin: app.appSkin,
        thirdGameList: homeStore.thirdGameList,
        workroomThirdgameList: homeStore.workroomThirdgameList,
        enterLottery: lotteryStore.enterLottery
    }
})
@observer
export default class Home extends Component {

    componentDidMount() {
        const {  workroomThirdgameList, enterLottery } = this.props;
        enterLottery()
        // workroomThirdgameList()
    }

    render() {
        let { appSkin, navigator } = this.props;
        
        return (
            <View style={{flex: 1}}>
                <LinearGradient
                    start={{ x: 0.2, y: 0.2 }}
                    end={{ x: 0.8, y: 0.8 }}
                    colors={appSkin.background}
                    style={styles.header}>
                    <Text style={styles.headerText}>{i18n.HOME_TITLE_HOMEPAGE}</Text>
                </LinearGradient>
                <ScrollView
                    bounces={false}
                    showsVerticalScrollIndicator={false}
                    automaticallyAdjustContentInsets={false}
                    removeClippedSubviews
                    style={{ width: gScreen.width, height: gScreen.height }}
                    contentContainerStyle={{ alignItems: 'center', backgroundColor: '#fff', paddingBottom: 10 }}
                >
                    {/* banner轮播 */}
                    <Banner />
                    {/* 公告 */}
                    <Notice navigator={navigator} />
                    {/* 余额 */}
                    <Balance navigator={navigator} />
                
                    {/* 游戏 */}
                    <CommonTab tabs={tabs} navigator={navigator} />
                </ScrollView>
                {/* 一键换肤 */}
                <ChangeSkin />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        height: scaleSize(37.5),
        width: gScreen.width,
        marginTop: __IOS__ ? 20 : 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fb5458'
    },
    headerText: {
        color: 'white', 
        fontSize: scaleSize(16)
    },
})