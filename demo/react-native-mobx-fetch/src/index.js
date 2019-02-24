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
// import LoginStore from '@/store/loginStore';
// import FoodEncyclopediaStore from '@/store/foodEncyclopediaStore'

// 处理application/x-www-form-urlencoded格式数据
function toFormData(config) {
    config.transformRequest = [function (data) {
        let res = '';
        for (let i in data) {
            // 数组处理
            if (data[i] instanceof Array) {
                let len = data[i].length;
                for (let j = 0; j < len; j++) {
                    res += encodeURIComponent(i + '[' + j + ']') + '=' + encodeURIComponent(data[i][j]) + '&';
                }
            } else {
                // 非数组数据处理
                res += encodeURIComponent(i) + '=' + encodeURIComponent(data[i]) + '&';
            }
        }
        res = res.slice(0, res.length - 1);
        return res;
    }];
}

@inject(({app, loginStore}) => {
    return {
        barStyle: app.barStyle,
        userLogin: loginStore.userLogin,
    }
})
@observer
export default class App extends PureComponent {
    // loginStore = new LoginStore()
    // foodEncyclopediaStore = new FoodEncyclopediaStore()

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
        // const params = {
        //     username: 'amao001',
        //     password: '123qwe'
        // };
        // this.props.userLogin(params)
        fetch('https://frontapi.yuleyun.app/passport/user-login', {
        // fetch('http://39.98.181.80/api/webarticlelist', {
            method: 'POST',
            headers: {
                Accept: 'application/json', 
                'Content-Type': 'application/json; charset=utf-8',
            },
            body: JSON.stringify({ 
                // pageSize: 10, 
                // pageNo: 1
                username: 'amao001',
                password: '123qwe',
                devicetype: 1,
                deviceno: 1
            })
        }).then(res => {
            alert(111)
        }).catch(e => {
            alert(JSON.stringify(e))
        })
    }

}