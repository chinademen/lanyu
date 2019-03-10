/**
 * 主页
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ScrollView,
} from 'react-native'
import { observer, inject } from 'mobx-react/native'
import Toast from 'react-native-easy-toast'
import NetInfoDecorator from '@/components/NetInfoDecorator'
import DashLine from '@/components/DashLine'
import Banner from './Banner'
import Notice from './Notice'
import Balance from './Balance'
import WinnerList from './WinnerList'
import LotteryList from './LotteryList'

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

    componentWillReact() {

    }

    componentWillReceiveProps(nextProps) {

    }

    render() {

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
                    <Notice />
                    {/* 余额 */}
                    <Balance />
                    {/* 中奖公告 */}
                    <WinnerList />
                    
                    <DashLine 
                        type="horizontal" 
                        backgroundColor='#d9d7ef' 
                        len={30} 
                        width={gScreen.width} 
                        style={{ paddingHorizontal:  gScreen.width * 0.05 }}
                    ></DashLine>

                    {/* 时时彩 分分彩 11选5 低频彩  PK10/赛马 其他 */}
                    <LotteryList />
                </ScrollView>
                <Toast ref={toast => this.toast = toast}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  
})