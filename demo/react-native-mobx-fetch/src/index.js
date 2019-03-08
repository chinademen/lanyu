/**
 * 主入口
 */
import React, {Component} from 'react'
import {
    View,
    StatusBar
} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components'
import {observer, inject} from 'mobx-react/native'
import Router from '@/route'

@inject(({app, loginStore}) => {
    return {
        barStyle: app.barStyle,
        userLogin: loginStore.userLogin,
    }
})
@observer
export default class App extends Component {

    // 场景转换动画配置
    configureScene = route => {
        if (route.sceneConfig) return route.sceneConfig;
        return {
            ...Navigator.SceneConfigs.PushFromRight,
            gestures: {}    // 禁用左滑返回手势
        }
    }

    // 路由跳转 渲染场景
    renderScene = (route, navigator) => {
        let Component = Router[route.id].default;
        return <Component navigator={navigator} {...route.passProps}/>;
    }

    render() {
        const { barStyle } = this.props;
        // 初始化登录页面  (ios自带过渡页，直接进入Login页)
        const initialPage = __IOS__ ? 'Login' : 'Splash';
        return (
            <View style={{flex: 1}}>
                {/* 设备顶部状态栏组件 */}
                <StatusBar barStyle={barStyle} animated />
                {/* 路由导航组件 */}
                <Navigator
                    // 路由初始化配置信息 
                    initialRoute={{id: initialPage}}
                    configureScene={this.configureScene}
                    renderScene={this.renderScene}
                />
            </View>
        )
    }
}