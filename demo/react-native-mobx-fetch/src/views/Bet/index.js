/**
 * 投注页面 
 */
import React, { PureComponent } from 'react'
import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    WebView,
} from 'react-native'
import { observer, inject } from 'mobx-react/native'

@inject(({ lotteryStore }) => {
    return {
        lotteryUrl: lotteryStore.lotteryUrl
    }
})
@observer
export default class LotteryBet extends PureComponent {
    onBack = () => {
        this.props.navigator.pop()
    }

    render() {
        const { lotteryUrl } = this.props;

        return (
            <View style={{flex: 1}}>
                <TouchableOpacity
                    activeOpacity={0.75}
                    style={styles.leftItem}
                    onPress={this.onBack}
                >
                    <Image style={{width: scaleSize(18), height: scaleSize(18)}}
                        source={require('@/assets/dh/images/ic_back_dark.png')}
                        resizeMode={"contain"}
                    />
                </TouchableOpacity>
                <WebView
                    source={{uri: lotteryUrl}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    scalesPageToFit={true}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    leftItem: {
        zIndex: 1,
        position: 'absolute',
        // top: !__IOS__ ? 0 : scaleSize(5),
        left: 0,
        height: !__IOS__ ? scaleSize(37) : scaleSize(32),
        width: scaleSize(40),
        paddingLeft: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
})