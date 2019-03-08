/**
 * 主页
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity,
    ScrollView,
} from 'react-native'
import { Navigator } from 'react-native-deprecated-custom-components'
import { observer, inject } from 'mobx-react/native'
import Toast from 'react-native-easy-toast'
import NetInfoDecorator from '@/components/NetInfoDecorator'
// import Loading from '@/components/Loading'
import Banner from './Banner'
import Notice from './Notice'

@NetInfoDecorator
@inject(({ account, app, homeStore }) => {
    return {
        userInfo: homeStore.userInfo,
        lotteryList: homeStore.lotteryList,
        thirdGameList: homeStore.thirdGameList,
        getUserInfo: homeStore.getUserInfo,
        getUserLotteryList: homeStore.getUserLotteryList,
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
        const { getUserInfo,  getUserLotteryList,  workroomThirdgameList } = this.props;
        // getUserInfo()  
        // getUserLotteryList()  
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
                    contentContainerStyle={{ alignItems: 'center', backgroundColor: '#f5f5f5', paddingBottom: 10 }}
                >
                    {/* banner轮播 */}
                    <Banner />
                    {/* 公告 */}
                    <Notice />
                    {/* 余额 */}

                    {/* 中奖公告 */}

                    {/* 时时彩 分分彩 11选5 低频彩  PK10/赛马 其他 */}
                    {/* 高频彩 */}
                    <ProfileStaticCell
                        title="高频彩"
                        style={{ borderBottomWidth: gScreen.onePix }}
                    />
                    {/* 快3系列 */}
                    <ProfileStaticCell
                        title="快3系列"
                        style={{ borderBottomWidth: gScreen.onePix }}
                    />
                    {/* 11选5系列 */}
                    <ProfileStaticCell
                        title="11选5系列"
                        style={{ borderBottomWidth: gScreen.onePix }}
                    />
                    {/* 30秒彩系列 */}
                    <ProfileStaticCell
                        title="30秒彩系列"
                        style={{ borderBottomWidth: gScreen.onePix }}
                    />
                    {/* 低频彩 */}
                    <ProfileStaticCell
                        title="低频彩"
                        style={{ borderBottomWidth: gScreen.onePix }}
                    />
                </ScrollView>
                <Toast ref={toast => this.toast = toast}/>
            </View>
        )
    }
}


const ProfileStaticCell = ({
    title,
    style,
}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.75}
            style={styles.staticCell}
        >
            <View style={[styles.cellStyle, style || style]}>
                <Text style={{color: 'gray'}}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    staticCell: {
        width: gScreen.width - 16 * 2,
        flexDirection: 'row',
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'left',
    },
    line: {
        height: 50,
        width: 0.5,
        backgroundColor: '#d9d9d9'
    },
})