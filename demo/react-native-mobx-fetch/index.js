/** @format */

import React, { Component } from 'react'
import {Platform, Animated, StyleSheet, View, Text, AppRegistry} from 'react-native'
import {Provider} from 'mobx-react/native'
import global from './src/common/GlobalContants';
import {name as appName} from './app.json'
import App from './src'
import stores from './src/store'
import NetInfoDecorator from './src/common/NetInfoDecorator'

if (!__DEV__) {
    global.console = {
        log: () => {}
    }
}

if (Platform.OS === "ios") {
    global.__IOS__ = true;
    global.__ANDROID__ = false;
} else {
    global.__IOS__ = false;
    global.__ANDROID__ = true;
}

@NetInfoDecorator
export default class Root extends Component {
    constructor(props) {
        super(props);
        this.state = {
            promptPosition: new Animated.Value(0)
        }
    }

    componentWillReceiveProps(nextProps) {
        const {isConnected} = nextProps
        // 无网络
        if (!isConnected) {
            Animated.timing(this.state.promptPosition, {
                toValue: 1,
                duration: 200
            }).start(() => {
                setTimeout(() => {
                    Animated.timing(this.state.promptPosition, {
                        toValue: 0,
                        duration: 200
                    }).start()
                }, 2000);
            })
        }
    }

    render() {
        let positionY = this.state.promptPosition.interpolate({
            inputRange: [0, 1],
            outputRange: [-30, __IOS__ ? 20 : 0]
        });
        return (
            <View style={{flex: 1}}>
                <Provider {...stores}>
                    <App />
                </Provider>
                <Animated.View style={[styles.netInfoView, {top: positionY}]}>
                    <Text style={styles.netInfoPrompt}>网络异常，请检查网络稍后重试~</Text>
                </Animated.View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    netInfoView: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        position: 'absolute',
        right: 0,
        left: 0,
        backgroundColor: gColors.theme
    },
    netInfoPrompt: {
        color: 'white',
        fontWeight: 'bold'
    }
})
        
AppRegistry.registerComponent(appName, () => Root);