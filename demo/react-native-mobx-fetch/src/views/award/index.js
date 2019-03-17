/**
 * 开奖详情 
 */
import React, { PureComponent } from 'react'
import {
    View,
    WebView,
} from 'react-native'
import { observer, inject } from 'mobx-react/native'

@inject(({ lotteryStore }) => {
    return {
        awardUrl: lotteryStore.awardUrl,
    }
})
@observer
export default class Award extends PureComponent {
    render() {
        const { awardUrl } = this.props;
        return (
            <View style={{flex: 1}}>
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