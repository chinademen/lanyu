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
        errorMsg: homeStore.errorMsg,
        isNoResult: homeStore.isNoResult,
        fetchCategoryList: homeStore.fetchCategoryList,
        foodCategoryList: homeStore.foodCategoryList,
    }
})
@observer
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            icon: 'hotlottery_nor'
        }
    }

    componentDidMount() {
        const { getUserInfo,  getUserLotteryList,  workroomThirdgameList } = this.props;
        // getUserInfo()  
        // getUserLotteryList()  
        // workroomThirdgameList()
    }

    componentWillReact() {
        const {errorMsg} = this.props;
        errorMsg && this.toast && this.toast.show(errorMsg)
    }

    componentWillReceiveProps(nextProps) {
        const { isConnected } = nextProps;
        const { isNoResult, fetchCategoryList } = this.props;
        if (isConnected && isNoResult) {
            fetchCategoryList()
        }
    }

    resetBarStyle = () => this.props.updateBarStyle('light-content')

    foodHandleAction = (handleTitle) => {
        const { name, navigator } = this.props
        switch (handleTitle) {
            case '饮食分析':
                if (name) {
                    alert(name)
                } else {
                    navigator.push({
                        id: 'Login',
                        sceneConfig: Navigator.SceneConfigs.FloatFromBottom,
                        passProps: {onResetBarStyle: this.resetBarStyle}
                    })
                }
                break;
            case '搜索对比':
                if (name) {
                    alert(name)
                } else {
                    navigator.push({
                        id: 'Login',
                        sceneConfig: Navigator.SceneConfigs.FloatFromBottom,
                        passProps: { onResetBarStyle: this.resetBarStyle }
                    })
                }
                break
            case '扫码对比':
                navigator.push({
                    id: 'Scanner',
                    passProps: {
                        onBarCodeRead: obj => alert(JSON.stringify(obj))
                    }
                })
                break
            default:
                alert(name)
                break

        }
    }

    _onPressCategoryItem = (kind, category) => {
        const { updateBarStyle, navigator } = this.props;
        updateBarStyle('default');

        navigator.push({
            id: 'Foods',
            passProps: {
                kind,
                category,
                onResetBarStyle: this.resetBarStyle
            }
        })
    }

    _reconnectHandle = () => {
        this.props.fetchCategoryList()
    }

    render() {
        const { foodCategoryList, isConnected } = this.props;

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
                    <FoodHandleView handleAction={this.foodHandleAction}/>
                    <FoodHandleView2 handleAction={this.foodHandleAction}/>
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
                    {isConnected ?
                        <View>
                            {foodCategoryList.map(foodCategory => {
                                return (
                                    <FoodCategoryView
                                        key={`FoodCategory-${foodCategory.kind}`}
                                        foodCategory={foodCategory}
                                        onPress={this._onPressCategoryItem}
                                    />
                                )
                            })}
                        </View> : <ReconnectView onPress={this._reconnectHandle}/>}
                </ScrollView>
                {/* <Loading isShow={isFetching}/> */}
                <Toast ref={toast => this.toast = toast}/>
            </View>
        )
    }
}

const ReconnectView = ({onPress}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
            onPress={onPress}
        >
            <Text>网络出错，点击重试~</Text>
        </TouchableOpacity>
    )
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

const FoodHandleView = ({handleAction}) => {
    return (
        <View style={styles.foodHandleContainer}>
            <HandleItem title="重庆时时彩" onPress={() => handleAction('重庆时时彩')} />
            <View style={styles.line}/>
            <HandleItem title="北京PK10" onPress={() => handleAction('北京PK10')} />
            <View style={styles.line}/>
            <HandleItem title="腾讯分分彩" onPress={() => handleAction('腾讯分分彩')} />
            <View style={styles.line}/>
        </View>
    )
};

const FoodHandleView2 = ({handleAction}) => {
     return (
        <View style={styles.foodHandleContainer}>
            <HandleItem title="新疆时时彩" onPress={() => handleAction('新疆时时彩')} />
            <View style={styles.line}/>
            <HandleItem title="瑞典1分彩" onPress={() => handleAction('瑞典1分彩')} />
            <View style={styles.line}/>
            <HandleItem title="瑞典2分彩" onPress={() => handleAction('瑞典2分彩')} />
        </View>
    )
}

const HandleItem = ({
    title,
    onPress
}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.75}
            style={styles.handelItem}
            onPress={onPress}
        >
            <Text style={{fontSize: 13, color: 'gray'}}>{title}</Text>
        </TouchableOpacity>
    )
};

const FoodCategoryView = ({
    foodCategory,
    onPress
}) => {

    let title = '食物分类';
    if (foodCategory.kind === 'brand') {
        title = '热门品牌';
    } else if (foodCategory.kind === 'restaurant') {
        title = '连锁餐饮';
    }

    return (
        <View style={{backgroundColor: 'white', marginTop: 10, overflow: 'hidden'}}>
            <View style={styles.groupHeader}>
                <Text style={{color: 'gray'}}>{title}</Text>
                <View style={{width: gScreen.width - 16 * 2, height: 14, backgroundColor: '#f5f5f5'}}>
                    <Image style={{width: gScreen.width - 16 * 2, height: 14}}
                           source={require('@/assets/dh/images/resource/img_home_list_bg.png')}
                    />
                </View>
            </View>
            <View style={styles.categoryContainer}>
                {foodCategory.categories.map((category) => {
                    return (
                        <TouchableOpacity
                            key={category.id}
                            activeOpacity={0.75}
                            style={styles.category}
                            onPress={() => onPress(foodCategory.kind, category)}
                        >
                            <Image
                                style={styles.categoryIcon}
                                source={{uri: category.image_url}}
                                resizeMode="contain"
                            />
                            <Text style={styles.categoryTitle}>{category.name}</Text>
                        </TouchableOpacity>
                    )
                })}
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    headerLogo: {
        width: 66,
        height: 24,
    },
    headerSearchContainer: {
        height: 50,
        width: gScreen.width - 16 * 2,
        backgroundColor: 'white',
        borderRadius: 4,
        alignItems: 'center',
        flexDirection: 'row'
    },
    foodHandleContainer: {
        height: 60,
        width: gScreen.width - 16 * 2,
        backgroundColor: 'white',
        marginTop: 10,
        alignItems: 'center',
        flexDirection: 'row',
        shadowColor: 'gray',
        shadowOpacity: 0.3,
        shadowOffset: {width: 1, height: -1},
        shadowRadius: 2,
    },
    handelItem: {
        flex: 1,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
    },
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
    categoryContainer: {
        backgroundColor: 'white',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: gScreen.width - 16 * 2
    },
    groupHeader: {
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    category: {
        width: (gScreen.width - 16 * 2) / 3,
        height: 65,
        alignItems: 'center',
        marginBottom: 25,
    },
    categoryIcon: {
        width: 40,
        height: 40,
    },
    categoryTitle: {
        color: 'gray',
        fontSize: 12,
        marginTop: 5,
    },
})