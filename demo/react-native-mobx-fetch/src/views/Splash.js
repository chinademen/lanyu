/**
 * 初始化过渡页面
 */
import React, { Component } from 'react'
import { Image } from 'react-native'

export default class Splash extends Component {
    componentDidMount() {
        const { navigator } = this.props;
        // 2秒后调到首页
        this.timer = setTimeout(() => {
            navigator.resetTo({id: 'TabBarView'})
        }, 2000)
    }

    componentWillUnmount() {
        clearTimeout(this.timer)
    }

    render() {
        return (
            <Image
                style={{width: gScreen.width, height: gScreen.height}}
                source={require('@/assets/images/splash.png')}
            />
        )
    }
}