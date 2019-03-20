/**
 * 侧边弹出栏
 */
import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity    
} from 'react-native'
import {observer, inject} from 'mobx-react/native'
import LinearGradient from 'react-native-linear-gradient'
import Svg from '@/components/Svg'

@inject(({ app, loginStore }) => {
    return {
        appSkin: app.appSkin,
        appPlat: app.appPlat,
        userLogout: loginStore.userLogout,
    }
})
@observer
export default class SideBar extends Component {
    // 功能列表渲染
    sideList = (list) => {
        return list.map(item => {
            const { fill } = this.props.appSkin;
            let { key, title, icon, event } = item;
            return (
                <TouchableOpacity
                    activeOpacity={0.75}
                    style={styles.staticCell}
                    onPress={event}
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

    // 退出登录
    logout = () => {
        this.props.userLogout(res => {
            this.props.navigator.replace({
                id: 'Login'
            })
        })
    } 

    // 跳转切换皮肤页面
    toChangeSkin = () => {
        this.props.navigator.push({
            id: 'ChangeSkin'
        })
    }

    // 跳转切换平台页面
    toChangePlat = () => {
        this.props.navigator.push({
            id: 'ChangePlat'
        })
    }

    render() {
        const { appPlat } = this.props;

        const list = [
            { key: 'logout', title: i18n.SIDE_TEXT_LOGOUT, icon: 'logout', event: this.logout },
            { key: 'changeSkin', title: i18n.SIDE_TEXT_CHANGESKIN, icon: 'east', event: this.toChangeSkin },
            { key: 'changePlat', title: i18n.SIDE_TEXT_CHANGEPLAT, icon: 'skin_brown', event: this.toChangePlat },
        ];

        let cellStyle = {
            borderTopWidth: gScreen.onePix,
            borderBottomWidth: gScreen.onePix,
        };

        let obj = {
            east: i18n.SIDE_TEXT_PLATNAME_EAST,
            weat: i18n.SIDE_TEXT_PLATNAME_WEAT,
            south: i18n.SIDE_TEXT_PLATNAME_SOUTH,
            morth: i18n.SIDE_TEXT_PLATNAME_NORTH,
            middle: i18n.SIDE_TEXT_PLATNAME_MIDDLE,
        };
        let title = obj[appPlat];

        return(
            <View style={styles.container}>
                <LinearGradient
                    colors={this.props.appSkin.background}
                    style={styles.header}>
                    <Text style={styles.headerText}>{title}</Text>
                </LinearGradient>
                <View style={[styles.cellContainer, cellStyle]}>
                    {this.sideList(list)}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        height: scaleSize(120),
        marginTop: __IOS__ ? 20 : 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fb5458'
    },
    headerText: {
        color: 'white', 
        fontSize: scaleSize(16)
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
})