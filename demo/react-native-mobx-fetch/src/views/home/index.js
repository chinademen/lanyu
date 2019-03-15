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
import LotteryTab from './LotteryTab'
import ChessTab from './ChessTab'
import VideoTab from './VideoTab'
import SportTab from './SportTab'
import ElectronTab from './ElectronTab'
import FishTab from './FishTab'


@NetInfoDecorator
@inject(({ homeStore }) => {
    return {
        thirdGameList: homeStore.thirdGameList,
        workroomThirdgameList: homeStore.workroomThirdgameList,
    }
})
@observer
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
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
                   
                    {/* 游戏 */}
                    <Tabs renderTabBar={() => <ScrollableTab />}>
                        <Tab heading={i18n.HOME_TEXT_LOTTERY}>
                            <LotteryTab navigator={navigator} />
                        </Tab>
                        <Tab heading={i18n.HOME_TEXT_CHESS}>
                            <ChessTab />
                        </Tab>
                        <Tab heading={i18n.HOME_TEXT_VIDEO}>
                            <VideoTab />
                        </Tab>
                        <Tab heading={i18n.HOME_TEXT_SPORT}>
                            <SportTab />
                        </Tab>
                        <Tab heading={i18n.HOME_TEXT_ELECTRON}>
                            <ElectronTab />
                        </Tab>
                        <Tab heading={i18n.HOME_TEXT_FISH}>
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