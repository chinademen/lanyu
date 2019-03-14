/**
 * 主页
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
} from 'react-native'
import { Tab, Tabs, ScrollableTab } from 'native-base'
import { observer, inject } from 'mobx-react/native'
import NetInfoDecorator from '@/components/NetInfoDecorator'
import Banner from './Banner'
import Notice from './Notice'
import Balance from './Balance'
import LotteryTab from './lotteryTab'
import ChessTab from './chessTab'
import VideoTab from './videoTab'
import SportTab from './sportTab'
import ElectronTab from './electronTab'
import FishTab from './fishTab'


@NetInfoDecorator
@inject(({ account, app, homeStore }) => {
    return {
        thirdGameList: homeStore.thirdGameList,
        workroomThirdgameList: homeStore.workroomThirdgameList,
        name: account.name,
        updateBarStyle: app.updateBarStyle,
    }
})
@observer
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        const {  workroomThirdgameList } = this.props; 
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
                   
                    <Tabs renderTabBar={() => <ScrollableTab navigator={navigator} />}>
                        <Tab heading="彩票">
                            <LotteryTab />
                        </Tab>
                        <Tab heading="棋牌">
                            <ChessTab />
                        </Tab>
                        <Tab heading="真人">
                            <VideoTab />
                        </Tab>
                        <Tab heading="体育">
                            <SportTab />
                        </Tab>
                        <Tab heading="电子">
                            <ElectronTab />
                        </Tab>
                        <Tab heading="捕鱼">
                            <FishTab />
                        </Tab>
                    </Tabs>
                  
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  
})