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
@inject(({ homeStore, lotteryStore }) => {
    return {
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
        let { navigator } = this.props;
        
        return (
            <View style={{flex: 1}}>
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
  
})