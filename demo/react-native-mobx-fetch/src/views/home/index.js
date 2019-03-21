/**
 * 主页
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    TouchableOpacity,
} from 'react-native'
import { observer, inject } from 'mobx-react/native'
import LinearGradient from 'react-native-linear-gradient'
import Svg from '@/components/Svg'
import NetInfoDecorator from '@/components/NetInfoDecorator'
import CommonTab from '@/common/CommonTab'
import Banner from './Banner'
import Notice from './Notice'
import WinnerList from './WinnerList'
import Balance from './Balance'
import LotteryTab from './LotteryTab'
import ChessTab from './ChessTab'
import VideoTab from './VideoTab'
import SportTab from './SportTab'
import ElectronTab from './ElectronTab'
import FishTab from './FishTab'
import LotteryList from './LotteryList'
import EastTabs from './east/EastTabs'

const tabs = [
    { name: i18n.HOME_TEXT_LOTTERY, component: LotteryTab },
    { name: i18n.HOME_TEXT_CHESS, component: ChessTab },
    { name: i18n.HOME_TEXT_VIDEO, component: VideoTab },
    { name: i18n.HOME_TEXT_SPORT, component: SportTab },
    { name: i18n.HOME_TEXT_ELECTRON, component: ElectronTab },
    { name: i18n.HOME_TEXT_FISH, component: FishTab },
];

const LeftItem = ({onPress}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.75}
            style={styles.leftItem}
            onPress={onPress}
        >
            <Svg icon='drawer' size='20' />
        </TouchableOpacity>
    )
}

@NetInfoDecorator
@inject(({ app, homeStore, lotteryStore }) => {
    return {
        appSkin: app.appSkin,
        appPlat: app.appPlat,
        thirdGameList: homeStore.thirdGameList,
        workroomThirdgameList: homeStore.workroomThirdgameList,
        enterLottery: lotteryStore.enterLottery,
        getLotteryBetMode: homeStore.getLotteryBetMode,
    }
})
@observer
export default class Home extends Component {

    componentDidMount() {
        const {  workroomThirdgameList, enterLottery, getLotteryBetMode } = this.props;
        enterLottery()
        getLotteryBetMode()
        // workroomThirdgameList()
    }

    render() {
        let { appSkin, navigator, appPlat, openDrawer } = this.props;
        
        return (
            <View style={{flex: 1, backgroundColor: appSkin.pageBackground }}>
                <LinearGradient
                    start={{ x: 0.2, y: 0.2 }}
                    end={{ x: 0.8, y: 0.8 }}
                    colors={appSkin.background}
                    style={styles.header}>
                    <LeftItem onPress={openDrawer}/>
                    <Text style={styles.headerText}>{i18n.HOME_TITLE_HOMEPAGE}</Text>
                </LinearGradient>
                
                {/* 公告 */}
                {platName !== 'east' && <Notice navigator={navigator} />}

                <ScrollView
                    bounces={false}
                    showsVerticalScrollIndicator={false}
                    automaticallyAdjustContentInsets={false}
                    removeClippedSubviews
                    style={{ width: gScreen.width, height: gScreen.height }}
                    contentContainerStyle={{ alignItems: 'center', backgroundColor: appSkin.pageBackground, paddingBottom: 10 }}
                >
                    
                    {/* 公告 */}
                    {platName === 'east' && <Notice navigator={navigator} />}

                    {/* banner轮播 */}
                    <Banner />

                    <View style={[styles.container, { backgroundColor: appSkin.tab }]}>
                        {/* 中奖公告 */}
                        <WinnerList />
                        {/* 余额 */}
                        <Balance navigator={navigator} />
                    </View>

                    {/* 游戏 */}
                    {platName === 'east' && <EastTabs navigator={navigator} />}
                    {platName === 'weat' && <LotteryList navigator={navigator} />}
                    {platName === 'south' && <CommonTab tabs={tabs} navigator={navigator} />}
                    {platName === 'north' && <CommonTab tabs={tabs} navigator={navigator} />}
                    {platName === 'middle' && <CommonTab tabs={tabs} navigator={navigator} />}

                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: gScreen.width * 0.9468,
        margin: gScreen.width * 0.0266,
        top: scaleSize(-30),
        borderRadius: scaleSize(8),
    },
    header: {
        height: scaleSize(37.5),
        width: gScreen.width,
        marginTop: __IOS__ ? 20 : 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fb5458'
    },
    leftItem: {
        zIndex: 999,
        position: 'absolute',
        top: !__IOS__ ? 0 : scaleSize(10),
        // top: scaleSize(25),
        left: 0,
        height: !__IOS__ ? scaleSize(37.5) : scaleSize(33),
        width: scaleSize(40),
        paddingLeft: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        color: 'white', 
        fontSize: scaleSize(16)
    },
})