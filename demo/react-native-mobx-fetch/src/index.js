/**
 * 主入口
 */
import React, {PureComponent} from 'react'
import {
    View,
    StatusBar
} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components'
import {observer, inject} from 'mobx-react/native'
import Router from '@/route'
import LoginStore from '@/store/loginStore';
import FoodEncyclopediaStore from '@/store/foodEncyclopediaStore'

@inject(({app}) => {
    return {
        barStyle: app.barStyle,
    }
})
@observer
export default class App extends PureComponent {
    loginStore = new LoginStore()
    foodEncyclopediaStore = new FoodEncyclopediaStore()

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
        // 初始化页面
        const initialPage = __IOS__ ? 'TabBarView' : 'Splash';
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

    componentDidMount() {
        // alert(this.loginStore.getServerApi)
        // this.foodEncyclopediaStore.fetchCategoryList
        this.loginStore.getServerApi({ host: 'www.yuleyun.app' })
    }

}