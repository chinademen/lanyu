/**
 * 主页
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
} from 'react-native'
import { Tab, Tabs, ScrollableTab, Button, Icon, Fab } from 'native-base'
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
                    <Tabs renderTabBar={() => <ScrollableTab navigator={navigator} />}>
                        <Tab heading={i18n.HOME_TEXT_LOTTERY}>
                            <LotteryTab />
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
                
                {/* 快速充提 */}
                <Fab
                    active={this.state.active}
                    direction="up"
                    containerStyle={{ }}
                    style={{ backgroundColor: '#5067FF' }}
                    position="bottomRight"
                    onPress={() => this.setState({ active: !this.state.active })}>
                    <Icon name="share" />
                    <Button style={{ backgroundColor: '#34A34F' }}>
                    <Icon name="logo-whatsapp" />
                    </Button>
                    <Button style={{ backgroundColor: '#3B5998' }}>
                    <Icon name="logo-facebook" />
                    </Button>
                    <Button disabled style={{ backgroundColor: '#DD5144' }}>
                    <Icon name="mail" />
                    </Button>
                </Fab>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  
})