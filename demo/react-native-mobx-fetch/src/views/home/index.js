/**
 * 主页
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
} from 'react-native'
import { observer, inject } from 'mobx-react/native'
import NetInfoDecorator from '@/components/NetInfoDecorator'
import CommonTab from '@/common/CommonTab'
import ChangeSkin from '@/common/ChangeSkin'
import ChangePlat from '@/common/ChangePlat'
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

@NetInfoDecorator
@inject(({ app, homeStore, lotteryStore }) => {
    return {
        appSkin: app.appSkin,
        appPlat: app.appPlat,
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
        let { appSkin, navigator, appPlat } = this.props;
        
        return (
            <View style={{flex: 1, backgroundColor: appSkin.pageBackground }}>

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
                {/* 一键换肤 */}
                <ChangeSkin />
                {/* 一键换平台 */}
                <ChangePlat />
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
    }
})