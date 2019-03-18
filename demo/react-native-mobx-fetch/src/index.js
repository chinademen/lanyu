/**
 * 主入口
 */
import React, {Component} from 'react'
import {
    View,
    StatusBar,
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
        // 沉侵式状态栏
        StatusBar.setBarStyle('dark-content', true);
        if (!__IOS__) {
            StatusBar.setBackgroundColor('rgba(0,0,0,0)', true);
            StatusBar.setTranslucent(true);
        }

        return <Component navigator={navigator} {...route.passProps}/>;
    }

    render() {
        let { barStyle } = this.props;
        // 初始化登录页面  (ios自带过渡页，直接进入Login页)
        const initialPage = __IOS__ ? 'Login' : 'Splash';
        // const initialPage = 'Test';
        // let navPaddingTop = ifIphoneX({ paddingTop: scaleSize(30) }, { paddingTop: scaleSize(20) }, { paddingTop: StatusBar.currentHeight });
        barStyle = __IOS__ ? 'dark-content' : barStyle;
        
        return (
            // <View style={[{flex: 1}, navPaddingTop]}>
            <View style={[{flex: 1}]}>
                {/* 设备顶部状态栏组件 */}
                <StatusBar 
                    barStyle={barStyle} 
                    animated={'slide'}
                    hidden={false}
                    translucent={true}
                />
                {/* 路由导航组件 */}
                <Navigator
                    // 路由初始化配置信息 
                    initialRoute={{id: initialPage}}
                    configureScene={this.configureScene}
                    // 返回需要渲染的场景的回调函数
                    renderScene={this.renderScene}
                />
            </View>
        )
    }
}