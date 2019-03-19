/**
 * 余额
 */
import React, { PureComponent } from 'react'
import {
    StyleSheet,
    TouchableOpacity,
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
    constructor(props) {
        super(props);
        this.state = {
            visible: true
        }
    }

    componentDidMount() {
        const { getUserInfo } = this.props;
        getUserInfo()
    }

    toggle(visible) {
        this.setState({
            visible: !visible
        })
    }

    render() {
        let { appSkin, userInfo } = this.props;
        const { visible } = this.state;
        let balance = visible ? (userInfo && userInfo.balance || 0.0000) : '******';
        let icon = visible ? 'show' : 'hidden';
        
        return (
            <View style={[styles.card, { backgroundColor: appSkin.tab }]}>
                <View style={styles.left}>
                    <Text style={[styles.text, { color: appSkin.text }]}>{i18n.HOME_TEXT_BALANCE}</Text>
                    <Text style={[styles.balance, { color: appSkin.text }]}>{balance}</Text>
                    <Text style={[styles.text, { color: appSkin.text }]}>{i18n.HOME_MONEY_YUAN}</Text>
                    <TouchableOpacity
                        activeOpacity={0.75}
                        style={{ position: 'absolute', right: 10 }}
                        onPress={() => this.toggle(visible)}>
                        <Svg icon={icon} size="24" color={appSkin.text} />
                    </TouchableOpacity>
                </View>
                <View style={[styles.item, { paddingTop: scaleSize(22) }]}>
                    <Svg icon={'cz'} size="36" color={appSkin.fill2} />
                </View>
                <View style={[styles.item, { paddingTop: scaleSize(27) }]}>
                    <Svg icon={'search'} size="26" color={appSkin.fill2} />
                </View>
            </View>
        )
        
       
    }
}

const styles = StyleSheet.create({
    card: {
        width: gScreen.width * 0.9468,
        borderBottomLeftRadius: scaleSize(8),
        borderBottomRightRadius: scaleSize(8),
        paddingLeft: scaleSize(15),
        paddingRight: scaleSize(5),
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
        fontWeight: 'bold',
        fontSize: scaleSize(16),
        paddingRight: scaleSize(5),
    },
    item: {
        width: scaleSize(50),
        height: scaleSize(80),
    },
})  