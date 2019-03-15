/**
 * 彩种列表
*/ 
import React, { PureComponent, Fragment } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native'
import { observer, inject } from 'mobx-react/native'
import DashLine from '@/components/DashLine'

@inject(({ homeStore }) => {
    return {
        newLotteryList: homeStore.newLotteryList,
        getUserLotteryList: homeStore.getUserLotteryList,
    }
})
@observer
export default class LotteryList extends PureComponent {
    componentDidMount() {
        const { getUserLotteryList } = this.props;
        getUserLotteryList()
    }

    // 彩种分类  (彩种分类，是否为新彩种，是否为热门彩种，是否显示该彩种)
    createLottery = (newLotteryList) => {
        return newLotteryList.map((item) => {
            return this.createLotteryType(item);
        })
    }

    // 类型
    createLotteryType = (item) => {
        if (item.list && item.list.length > 0) {
            return (
                <Fragment>
                    {/* 彩种分类 */}
                    <View style={styles.lotteryType}>
                        <View style={styles.point}></View>
                        <View style={styles.title}>
                            <Text style={styles.titleText}>{item.name}</Text>
                        </View>
                    </View>
                    <DashLine 
                        type="horizontal" 
                        backgroundColor='#d9d7ef' 
                        len={30} 
                        width={gScreen.width}
                        style={{paddingHorizontal: gScreen.width * 0.05}}
                    ></DashLine>
                    {/* 彩种列表 */}
                    <View style={styles.lotteryList}>
                        {this.createLotteryList(item.list)}
                    </View>
                </Fragment>
            )
        }
    }

    // 列表
    createLotteryList = (list) => {
        return list.map((item, index) => {
            const { isshow, cnname, lotteryid, tag } = item;
            let newOrHot = 
            (tag - 0) === 1 ? <Image style={styles.lotteryImg} source={require('@/assets/dh/images/home/hot.png')} /> 
            : (tag - 0) === 2 ? <Image style={styles.lotteryImg} source={require('@/assets/dh/images/home/new.png')} /> : <Text style={{ position: 'absolute' }}></Text>;
            return (
                isshow !== '0' && <TouchableOpacity 
                    activeOpacity={0.75}
                    style={styles.lotteryItem}
                    onPress={() => this.goBetPage(lotteryid)}
                    key={lotteryid}>
                    {newOrHot}
                    <Text style={styles.lotteryText} >{cnname}</Text>
                </TouchableOpacity>
            )
        })
    }

    // 跳转投注页面
    goBetPage(lotteryid) {
        this.props.navigator.push({
            id: 'LotteryBet',
            lotteryid,
        })
    }

    // 无数据
    createNoData = () => {
        return (
            <View style={styles.noData}>
                <Text>暂无数据</Text>
            </View> 
        )
    }

    
    render() {
        let { newLotteryList } = this.props;
        return (
            <View style={styles.container}>
                {newLotteryList && newLotteryList.length > 0 && this.createLottery(newLotteryList) || this.createNoData()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF', 
        width: gScreen.width,
    },
    noData: {
        height: scaleSize(42),
        alignItems:'center',
        justifyContent: 'center',
    },
    lotteryType: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        height: scaleSize(42),
        width: gScreen.width,
        paddingHorizontal: gScreen.width * 0.05,
    },
    point: {
        width: scaleSize(8),
        height: scaleSize(8),
        backgroundColor: '#c23d3b',
        borderRadius: scaleSize(8),
        marginHorizontal: scaleSize(10),
    },
    title: {
        height: scaleSize(42),
        flexDirection: 'row',
        alignItems: 'center'
    },
    titleText: {
        fontSize: scaleSize(16),
        color: '#333',
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
        borderWidth: scaleSize(1),
        borderColor: '#ec5355',
        borderRadius: scaleSize(9),
        overflow: 'hidden',
        backgroundColor: '#f5f3ff',
        elevation: 2,
        shadowOffset: {width: 0, height: 0},
        shadowColor: '#c1d6f8',
        shadowOpacity: 1,
        shadowRadius: scaleSize(5),
    },
    lotteryText: {
        fontSize: scaleSize(16),
        fontWeight: 'bold',
        color: '#b02534',
    },
    lotteryImg: {
        position: 'absolute',
        width: gScreen.onePix * 89,
        height: gScreen.onePix * 60,
        right: 0,
        top: gScreen.onePix * -1,
    }
})