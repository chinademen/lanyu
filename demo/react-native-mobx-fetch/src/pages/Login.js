/**
 * Created by ljunb on 2017/2/22.
 */
import React, { PureComponent } from 'react'
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableOpacity
} from 'react-native'
import {observer, inject} from 'mobx-react/native'

@inject('app')
@observer
export default class Login extends PureComponent {

    accounts = [
        {name: 'QQ', icon: require('../resource/ic_account_qq.png')},
        {name: '微信', icon: require('../resource/ic_account_wechat.png')},
        {name: '微博', icon: require('../resource/ic_account_weibo.png')},
        {name: '薄荷', icon: require('../resource/ic_account_boohee.png')}
    ]

    componentWillMount() {
        const {app} = this.props
        app.barStyle === 'light-content' && app.updateBarStyle('default')
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <TouchableOpacity
                        activeOpacity={0.75}
                        style={styles.loginBtn}
                    >
                        <Text style={{fontSize: 16, color: '#fff'}}>登录</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{textAlign: 'center'}}>Copyright @ 东皇娱乐 版权所有</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#f5f5f5'
    }, 
    content: {
        paddingTop: 50
    },
    accountItem: {
        alignItems: 'center'
    },
    loginBtn: {
        width: gScreen.width * 0.8,
        marginTop: 20,
        height: 40,
        borderRadius: 20,
        backgroundColor: '-webkit-gradient(linear, 0 0, 0 bottom, from(#fb4d7e), to(rgba(255, 77, 79, 1)))!important',
        // boxShadow: '0px 2px 3px #bbbbb8 !important',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    }
})