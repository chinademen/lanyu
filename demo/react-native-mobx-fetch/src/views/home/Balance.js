/**
 * 余额
 */
import React, { PureComponent } from 'react'
import {
    StyleSheet,
} from 'react-native'
import { View, Text } from 'native-base'
import { observer, inject } from 'mobx-react/native'
import Svg from '@/components/Svg'

@inject(({ app, homeStore }) => {
    return {
        appSkin: app.appSkin,
        userInfo: homeStore.userInfo,
        getUserInfo: homeStore.getUserInfo,
    }
})
@observer
export default class Balance extends PureComponent {
    componentDidMount() {
        const { getUserInfo } = this.props;
        getUserInfo()
    }

    render() {
        let { appSkin, userInfo } = this.props;
        let balance = userInfo && userInfo.balance || 0.0000;
        
        return (
            // <View style={styles.container}>
                <View style={[styles.card, { backgroundColor: appSkin.tab }]}>
                    <View style={styles.left}>
                        <Text style={[styles.text, { color: appSkin.text }]}>{i18n.HOME_TEXT_BALANCE}</Text>
                        <Text style={[styles.balance, { color: appSkin.text }]}>{balance}</Text>
                        <Text style={[styles.text, { color: appSkin.text }]}>{i18n.HOME_MONEY_YUAN}</Text>
                    </View>
                    <View style={[styles.item, { paddingTop: scaleSize(22) }]}>
                        <Svg icon={'cz'} size="36" color={appSkin.fill} />
                    </View>
                    <View style={[styles.item, { paddingTop: scaleSize(26) }]}>
                        <Svg icon={'search'} size="28" color={appSkin.fill} />
                    </View>
                </View>
            // </View>
        )
        
       
    }
}

const styles = StyleSheet.create({
    // container: {
    //     width: gScreen.width,
    //     padding: scaleSize(10),
    //     backgroundColor: '#322b33',
    //     top: -50,
    // },
    card: {
        width: gScreen.width * 0.9468,
        borderBottomLeftRadius: scaleSize(8),
        borderBottomRightRadius: scaleSize(8),
        paddingHorizontal: scaleSize(20),
        // backgroundColor: '#fff',
        overflow: 'hidden',
        height: scaleSize(80),
        flex: 1,
        flexDirection: 'row',
        elevation: 2,
        shadowOffset: {width: 0, height: 0},
        shadowColor: '#ccd4f8',
        shadowOpacity: 1,
        shadowRadius: scaleSize(5),
        alignSelf: 'center',
    },
    left: {
        flex: 1,
        flexDirection: 'row',
        width: scaleSize(gScreen.width * 0.7),
        paddingHorizontal: scaleSize(30),
        height: scaleSize(80),
        alignItems: 'center',
    },
    text: {
        fontSize: scaleSize(16),
    },
    balance: {
        // width: scaleSize(gScreen.width * 0.4),
        fontWeight: 'bold',
        fontSize: scaleSize(16),
        paddingRight: scaleSize(5),
    },
    // right: {
    //     flex: 1,
    //     flexDirection: 'row',
    //     width: gScreen.width * 0.2,
    //     paddingRight: 10,
    // },
    item: {
        width: scaleSize(50),
        height: scaleSize(80),
    },
})  