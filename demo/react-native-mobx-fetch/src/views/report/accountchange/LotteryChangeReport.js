/**
 * 彩票账变报表
 */
import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
} from 'react-native'
import { Container } from 'native-base'
import {observer, inject} from 'mobx-react/native'
import LodingBtn from '@/components/LodingBtn'

@inject(({ app }) => {
    return {
        appSkin: app.appSkin,
        submiting: app.submiting,
    }
})
@observer
export default class LotteryChangeReport extends Component {

    render() {
        const { appSkin } = this.props;

        return (
            <View style={[styles.container, { backgroundColor: appSkin.pageBackground }]}>
                {/* 查询条件 悬浮 */}
                <View style={styles.searchBox}>
                    <Text>查询条件区域</Text>
                </View>

                {/* 表格 滚动区 */}
                <ScrollView
                    bounces={false}
                    showsVerticalScrollIndicator={false}
                    automaticallyAdjustContentInsets={false}
                    removeClippedSubviews
                    style={{ width: gScreen.width, height: gScreen.height }}
                    contentContainerStyle={{ alignItems: 'center', paddingBottom: 10 }}
                >
                    
                </ScrollView>

                {/* 底部合计 */}
                <View style={styles.footer}>
                    <Text style={[styles.footerText, { width: gScreen.width, borderBottomWidth: scaleSize(1), borderColor: '#f6f6f6', paddingLeft: scaleSize(10) }]}>
                        合计：
                    </Text>
                    <Text style={styles.footerText}>资金变动</Text>
                    <Text style={styles.footerText}>0.0000元</Text>
                    <Text style={styles.footerText}>由于彩票数据同步存在延迟如需实时数据请咨询客服</Text>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    searchBox: {
        height: scaleSize(30),
        backgroundColor: '#fff', 
        width: gScreen.width,
        flexDirection: 'row',
        alignItems: 'center',
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        zIndex: 99,
        height: scaleSize(100),
        width: gScreen.width,
        backgroundColor: '#fff',
        flexDirection: 'column',
        alignItems: 'center',
        
    },
    footerText: {
        color: '#333',
        height: scaleSize(25),
        fontSize: scaleSize(14)
    }
})