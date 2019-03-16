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
        alert(awardUrl)
        return (
            <View style={{flex: 1}}>
                <WebView
                    source={{uri: awardUrl}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    scalesPageToFit={true}
                />
            </View>
        )
    }
}