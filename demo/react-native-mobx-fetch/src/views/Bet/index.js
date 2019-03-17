/**
 * 投注页面 
 */
import React, { PureComponent } from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    WebView,
} from 'react-native'
import { observer, inject } from 'mobx-react/native'
import Loading from '@/components/Loading'

@inject(({ lotteryStore }) => {
    return {
        lotteryUrl: lotteryStore.lotteryUrl
    }
})
@observer
export default class LotteryBet extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            isShow: true
        }
    }

    onBack = () => {
        this.props.navigator.pop()
    }

    renderLoading = () => {
        return (
            <Loading isShow={this.state.isShow} />
        )
    }

    renderEnd = () => {
        this.setState({ isShow: false })
    } 
    
    renderError = () => {
        return(
            <View>
                <Text>网络太慢，加载失败，请重新加载</Text>
            </View>
        )
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
                    startInLoadingState={true}
                    renderLoading={this.renderLoading}
                    onLoadEnd={this.renderEnd}
                    renderError={this.renderError}
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