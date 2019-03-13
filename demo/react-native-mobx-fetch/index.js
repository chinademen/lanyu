import React, { Component } from 'react'
import {Platform, Dimensions, Animated, StyleSheet, View, Text, AppRegistry} from 'react-native'
import {Provider} from 'mobx-react/native'
import SplashScreen from 'react-native-splash-screen'
import global from './src/config/global'
import imgSrc from './src/config/imgSrc'
import skin from './src/config/skin'
import {name as appName} from './app.json'
import App from './src'
import stores from './src/store'
import NetInfoDecorator from './src/components/NetInfoDecorator'
import storage from './src/util/storage'

global.storage = storage;

if (Platform.OS === "ios") {
    global.__IOS__ = true;
    global.__ANDROID__ = false;
    // iphoneX判断
    const { height, width } = global.gScreen;
    if (height === 812 || width === 812 || height === 896 || width === 896) {
        global.iphoneX = true;
    }
} 

// 网络状态检测高阶组件NetInfoDecorator
@NetInfoDecorator
export default class Root extends Component {
    constructor(props) {
        super(props);
        this.state = {
            promptPosition: new Animated.Value(0)
        }
    }

    componentDidMount() {
        SplashScreen.hide(); // 隐藏启动页
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
        
console.ignoredYellowBox = ['Warning: BackAndroid is deprecated. Please use BackHandler instead.','source.uri should not be an empty string','Invalid props.style key'];
console.disableYellowBox = true // 关闭全部黄色警告

AppRegistry.registerComponent(appName, () => Root);