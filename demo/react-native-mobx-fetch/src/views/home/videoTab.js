/**
 * 真人视讯
 */
import React, { PureComponent } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
} from 'react-native'
import { observer, inject } from 'mobx-react/native'

@inject(({ app }) => {
    return {
        app: app,
    }
})
@observer
export default class VideoTab extends PureComponent {
    render() {
        return (
            <View>
                <Text>
                    真人视讯
                </Text>
            </View>
        )
    }
}