/**
 * 初始化过渡页面
 */
import React, { Component } from 'react'
import { Image } from 'react-native'

export default class Splash extends Component {
    componentDidMount() {
        const { navigator } = this.props;
        // 2秒后调到登录
        this.timer = setTimeout(() => {
            navigator.resetTo({id: 'Test'})
        }, 2000)
    }

    componentWillUnmount() {
        clearTimeout(this.timer)
    }

    render() {
        return (
            <Image
                style={{width: gScreen.width, height: gScreen.height}}
                source={require('@/assets/dh/images/splash.png')}
            />
        )
    }
}