/**
 * 开奖详情 
 */
import React, { PureComponent } from 'react'
import {
    StyleSheet,
    View,
    WebView,
    Text,
} from 'react-native'
import { observer, inject } from 'mobx-react/native'
// import LinearGradient from 'react-native-linear-gradient'

@inject(({ app, lotteryStore }) => {
    return {
        appSkin: app.appSkin,
        awardUrl: lotteryStore.awardUrl,
    }
})
@observer
export default class Award extends PureComponent {
    render() {
        const { awardUrl } = this.props;
        return (
            <View style={{flex: 1}}>
                {/* ?????? */}
                {/* <LinearGradient
                    start={{ x: 0.2, y: 0.2 }}
                    end={{ x: 0.8, y: 0.8 }}
                    colors={this.props.appSkin.background}
                    style={styles.header}>
                </LinearGradient> */}
                <WebView
                    style={{ width:'100%', height:'100%' }}
                    source={{uri: awardUrl}}
                    // renderLoading={???loading}
                    // renderError={????}
                    startInLoadingState={true}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    scalesPageToFit={true}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    // header: {
    //     height: scaleSize(37.5),
    //     width: gScreen.width,
    //     marginTop: __IOS__ ? 20 : 0,
    //     // paddingTop: scaleSize(20),
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     backgroundColor: '#fb5458'
    // },
    // headerText: {
    //     color: 'white', 
    //     fontSize: scaleSize(16)
    // },
})