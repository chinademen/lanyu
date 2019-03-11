/**
 * 余额
 */
import React, { PureComponent } from 'react'
import {
    StyleSheet,
    Image,
} from 'react-native'
import { View, Text } from 'native-base'
import { observer, inject } from 'mobx-react/native'
import DashLine from '@/components/DashLine'
import { scaleSize } from '@/util/ScreenUtil'

@inject(({ homeStore }) => {
    return {
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
        let { userInfo } = this.props;
        let balance = userInfo && userInfo.balance || 0.0000;
        
        return (
            <View style={styles.container}>
                <View style={styles.card}>
                    <View style={styles.left}>
                        <Text>余额：</Text>
                        <Text style={styles.balance}>{balance}</Text>
                        <Text>元</Text>
                    </View>
                    <DashLine type="vertical" backgroundColor='#d9d7ef' len={6} width={36}></DashLine>
                    <View style={styles.item}>
                        <Image style={styles.img} source={require('@/assets/dh/images/home/chrage.png')}></Image>
                    </View>
                    <DashLine type="vertical" backgroundColor='#d9d7ef' len={6} width={36}></DashLine>
                    <View style={styles.item}>
                        <Image style={styles.img} source={require('@/assets/dh/images/home/details.png')}></Image>
                    </View>
                </View>
            </View>
        )
        
       
    }
}

const styles = StyleSheet.create({
    container: {
        width: gScreen.width,
        padding: 10,
        backgroundColor: '#eff3f9',
    },
    card: {
        width: gScreen.width * 0.9,
        backgroundColor: '#fff',
        borderRadius: 10,
        height: 40,
        flex: 1,
        flexDirection: 'row',
        elevation: 2,
        shadowOffset: {width: 0, height: 0},
        shadowColor: '#ccd4f8',
        shadowOpacity: 1,
        shadowRadius: 5,
        alignSelf: 'center',
    },
    line: {
    
    },
    left: {
        flex: 1,
        flexDirection: 'row',
        width: gScreen.width * 0.7,
        paddingLeft: 10,
        height: 40,
        alignItems: 'center',
    },
    balance: {
        width: gScreen.width * 0.4,
        color: '#ff4d4d',
        fontSize: 18,
        fontWeight: 'bold'
    },
    // right: {
    //     flex: 1,
    //     flexDirection: 'row',
    //     width: gScreen.width * 0.2,
    //     paddingRight: 10,
    // },
    item: {
        width: scaleSize(50),
        height: scaleSize(40),
        paddingTop: scaleSize(3),
    },
    img: {
        width: scaleSize(34),
        height: scaleSize(34),
        alignSelf: 'center',
    }
})  