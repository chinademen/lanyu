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
import { Container, Picker } from 'native-base'
import {observer, inject} from 'mobx-react/native'
import LodingBtn from '@/components/LodingBtn'
import Select from '@/components/Select'

@inject(({ app }) => {
    return {
        appSkin: app.appSkin,
        submiting: app.submiting,
    }
})
@observer
export default class LotteryChangeReport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lotteryid: 0,
            mode: 0,
            type: 0,
            time: 'day1',
            includesub: 1,
        }
    }

    // 无数据
    createNoData = () => {
        return (
            <View style={styles.noData}>
                <Text style={{ color: '#fff' }}>暂无数据</Text>
            </View> 
        )
    }

    onValueChange(name, value) {
        this.setState({
            [name]: value
        });
    }

    render() {
        const { appSkin } = this.props;

        return (
            <View style={[styles.container, { backgroundColor: appSkin.pageBackground }]}>
                {/* 查询条件 悬浮 */}
                <View style={styles.searchBox}>
                    <Select />
                    {/* <Picker
                        note
                        mode="dialog"
                        style={{ width: gScreen.width * 0.33 }}
                        selectedValue={this.state.lotteryid}
                        onValueChange={(value) => this.onValueChange('lotteryid', value)}
                        >
                        <Picker.Item label="所有彩种" value="0" />
                        <Picker.Item label="重庆时时彩" value="1" />
                        <Picker.Item label="北京PK10" value="2" />
                        <Picker.Item label="腾讯分分彩" value="3" />
                        <Picker.Item label="新疆时时彩" value="4" />
                    </Picker>
                    <Picker
                        note
                        mode="dropdown"
                        style={{ width: gScreen.width * 0.33 }}
                        selectedValue={this.state.mode}
                        onValueChange={(value) => this.onValueChange('mode', value)}
                        >
                        <Picker.Item label="所有模式" value="0" />
                        <Picker.Item label="1元" value="1" />
                        <Picker.Item label="1角" value="2" />
                        <Picker.Item label="1分" value="3" />
                        <Picker.Item label="2元" value="4" />
                    </Picker>
                    <Picker
                        note
                        mode="dropdown"
                        style={{ width: gScreen.width * 0.33 }}
                        selectedValue={this.state.type}
                        onValueChange={(value) => this.onValueChange('type', value)}
                        >
                        <Picker.Item label="所有类型" value="0" />
                        <Picker.Item label="投注扣款" value="1" />
                        <Picker.Item label="投注返点" value="2" />
                        <Picker.Item label="奖金派送" value="3" />
                        <Picker.Item label="创建追号扣款" value="4" />
                    </Picker> */}
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
                    {this.createNoData()}
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
    },
    noData: {
        height: scaleSize(42),
        alignItems:'center',
        justifyContent: 'center',
        color: '#fff'
    },
})