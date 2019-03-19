/**
 * 报表查询
 */

import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
} from 'react-native'
import {observer, inject} from 'mobx-react/native'
import LinearGradient from 'react-native-linear-gradient'
import Svg from '@/components/Svg'

const list = [
    { key: 'overview', title: i18n.REPORT_MODULE_OVERVIEW, icon: 'item_top_all', page: 'Overview' },
    { key: 'profitloss', title: i18n.REPORT_MODULE_PROFITLOSS, icon: 'item_top_yk', page: 'ProfitLoss' },
    { key: 'accountchange', title: i18n.REPORT_MODULE_ACCOUNTCHANGE, icon: 'item_top_gg', page: 'AccountChange' },
    { key: 'dayknot', title: i18n.REPORT_MODULE_DAYKNOT, icon: 'item_top_bank', page: 'DayKnot' },
    { key: 'recharge', title: i18n.REPORT_MODULE_RECHARGE, icon: 'item_top_yk', page: 'Recharge' },
    { key: 'bet', title: i18n.REPORT_MODULE_BET, icon: 'item_top_tz', page: 'Bet' },
    { key: 'contract', title: i18n.REPORT_MODULE_CONTRACT, icon: 'item_top_xg', page: 'Contract' },
    { key: 'proxy', title: i18n.REPORT_MODULE_PROXY, icon: 'item_top_dl', page: 'Proxy' },
];

@inject(({ app }) => {
    return {
        appSkin: app.appSkin
    }
})
@observer
export default class Report extends Component {
    // 报表tab列表渲染
    reportList = () => {
        return list.map(item => {
            const { fill } = this.props.appSkin;
            let { key, title, icon, page } = item;
            return (
                <TouchableOpacity
                    activeOpacity={0.75}
                    style={styles.staticCell}
                    onPress={() => this.toPage(page)}
                    key={key}
                >
                    <View style={styles.svgBox}>
                        <Svg icon={icon} size="20" color={fill} />
                    </View>
                    <View style={[styles.cellStyle]}>
                        <Text style={{color: 'gray'}}>{title}</Text>
                    </View>
                </TouchableOpacity>
            )
        })
    }

    // 跳转事件
    toPage = (page) => {
        this.props.navigator.push({
            id: page
        })
    }

    render() {
        let cellStyle = {
            borderTopWidth: gScreen.onePix,
            borderBottomWidth: gScreen.onePix,
        }

        return (
            <View style={styles.container}>
                <LinearGradient
                    start={{ x: 0.2, y: 0.2 }}
                    end={{ x: 0.8, y: 0.8 }}
                    colors={this.props.appSkin.background}
                    style={styles.header}>
                    <Text style={styles.headerText}>{i18n.REPORT_TITLE_REPORT_SERCH}</Text>
                </LinearGradient>
                <View style={[styles.cellContainer, cellStyle]}>
                    {this.reportList()}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#f5f5f5'
    },
    header: {
        height: scaleSize(37.5),
        width: gScreen.width,
        marginTop: __IOS__ ? 20 : 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fb5458'
    },
    headerText: {
        color: 'white', 
        fontSize: scaleSize(16)
    },
    settingContainer: {
        height: __IOS__ ? 44 : 50,
        width: __IOS__ ? 44 : 50,
        position: 'absolute',
        top: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatarContainer: {
        width: 90,
        height: 90,
        borderRadius: 45,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15
    },
    loginContainer: {
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 2
    },
    cellContainer: {
        borderColor: '#d9d9d9',
        backgroundColor: 'white'
    },
    staticCell: {
        flexDirection: 'row',
        height: scaleSize(48),
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: scaleSize(1),
        borderColor: '#e5e5e5'
    },
    svgBox: {
        marginHorizontal: scaleSize(15)
    },
    cellStyle: {
        flex: 1,
        height: 46,
        borderColor: '#d9d9d9',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 15
    }
});