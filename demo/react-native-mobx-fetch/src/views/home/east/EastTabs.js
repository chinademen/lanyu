import React, { PureComponent } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native'
import { Tab, Tabs, ScrollableTab } from 'native-base'
import { observer, inject } from 'mobx-react/native'
import {Navigator} from 'react-native-deprecated-custom-components'
import LinearGradient from 'react-native-linear-gradient'

@inject(({ app, homeStore, lotteryStore }) => {
    return {
        appSkin: app.appSkin,
        newLotteryList: homeStore.newLotteryList,
        getUserLotteryList: homeStore.getUserLotteryList,
        updateLotteryUrl: lotteryStore.updateLotteryUrl,
    }
})
@observer
export default class EastTabs extends PureComponent {
    componentDidMount() {
        const { getUserLotteryList } = this.props;
        getUserLotteryList()
    }

    // 渲染tab
    createTab(newLotteryList) {
        const { appSkin } = this.props;
        return newLotteryList.map(item => {
            return this.createLotteryType(item, appSkin);
        })
    }

    // 类型
    createLotteryType = (item, appSkin) => {
        if (item.list && item.list.length > 0) {
            return (
                <Tab heading={item.name}
                    tabStyle={{ backgroundColor: appSkin.tab }} 
                    textStyle={{ color: appSkin.text }}
                    activeTabStyle={{ backgroundColor: appSkin.active }}
                >
                    {/* 彩种列表 */}
                    <View style={[styles.lotteryList, { backgroundColor: appSkin.pageBackground }]}>
                        {this.createLotteryList(item.list)}
                    </View>
                </Tab>
            )
        }
    }

    // 列表
    createLotteryList = (list) => {
        const { text, background } = this.props.appSkin;
        const { lotteryImg, lotteryItem, lotteryText } = styles;
        return list.map((item, index) => {
            const { isshow, cnname, lotteryid, tag } = item;
            let newOrHot = 
            (tag - 0) === 1 ? <Image style={lotteryImg} source={require('@/assets/dh/images/home/hot.png')} /> 
            : (tag - 0) === 2 ? <Image style={lotteryImg} source={require('@/assets/dh/images/home/new.png')} /> : <Text style={{ position: 'absolute' }}></Text>;
            return (
                isshow !== '0' && <TouchableOpacity 
                    activeOpacity={0.75}
                    onPress={() => this.goBetPage(lotteryid)}
                    key={lotteryid}>
                    <LinearGradient colors={background} style={lotteryItem}>
                        {newOrHot}
                        <Text style={[lotteryText, { color: text }]} >{cnname}</Text>
                    </LinearGradient>
                </TouchableOpacity>
            )
        })
    }

    // 跳转投注页面
    goBetPage(lotteryid) {
        this.props.updateLotteryUrl(lotteryid)
        this.props.navigator.push({
            id: 'LotteryBet',
            sceneConfig: {
                ...Navigator.SceneConfigs.FloatFromBottom,
                gestures: {}    // 禁用左滑返回手势
            }
        })
    }

    render() {
        const { appSkin, newLotteryList } = this.props;
        
        if (newLotteryList && newLotteryList.length > 0) {
            return(
                <Tabs renderTabBar={() => <ScrollableTab style={{ backgroundColor: appSkin.tab }} />}>
                    {this.createTab(newLotteryList)}
                </Tabs>
            )
        } else {
            return (
                <View style={styles.noData}>
                    <Text style={{ color: '#fff' }}>暂无数据</Text>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    noData: {
        height: scaleSize(42),
        alignItems:'center',
        justifyContent: 'center',
    },
    lotteryList: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        width: gScreen.width  * 1,
        paddingTop: scaleSize(10)

    },
    lotteryItem: {
        width: gScreen.width * 0.28,
        alignItems:'center',
        justifyContent: 'center',
        height: scaleSize(46),
        margin: gScreen.width * 0.0266,
        borderRadius: scaleSize(9),
        overflow: 'hidden',
        elevation: 2,
        shadowOffset: {width: 0, height: 0},
        shadowColor: '#c1d6f8',
        shadowOpacity: 1,
        shadowRadius: scaleSize(5),
    },
    lotteryText: {
        fontSize: scaleSize(16),
        fontWeight: 'bold',
    },
    lotteryImg: {
        position: 'absolute',
        width: gScreen.onePix * 89,
        height: gScreen.onePix * 60,
        right: 0,
        top: gScreen.onePix * -1,
    }
})