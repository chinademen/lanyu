/**
 * 轮播
 */
import React, { PureComponent } from 'react'
import {
    StyleSheet,
    Image,
    ImageBackground,
} from 'react-native'
import { toJS } from 'mobx'
import { observer, inject } from 'mobx-react/native'
import Swiper from 'react-native-swiper'
import imgSrc from '@/config/imgSrc'

@inject(({ homeStore }) => {
    return {
        bannerList: homeStore.bannerList,
        getBanner: homeStore.getBanner,
    }
})
@observer
export default class Banner extends PureComponent {
    componentDidMount() {
        const { getBanner } = this.props;
        getBanner()
    }

    render() {
        let { bannerList } = this.props;
        //  ios中 Swiper 的 style需要换成 containerStyle
        if (__IOS__) {
            if (bannerList && bannerList.length > 0) {
                // 网络获取
                return (
                    <Swiper containerStyle={styles.headerContainer} showsPagination={false}>
                        {toJS(bannerList).map((a, i) => {
                            return <Image style={styles.headerContainer} source={{ uri: a.url }}></Image>;
                        })}
                    </Swiper>
                )
            } else {
                // 本地获取
                return (
                    <Swiper containerStyle={styles.headerContainer} showsPagination={false}>
                        {imgSrc.bannerSrc.map((a, i) => {
                            return <ImageBackground style={styles.slide} source={a}></ImageBackground>;
                        })}
                    </Swiper>
                )
            }
        } else {
            if (bannerList && bannerList.length > 0) {
                // 网络获取
                return (
                    <Swiper style={styles.headerContainer} showsPagination={false}>
                        {toJS(bannerList).map((a, i) => {
                            return <Image style={styles.headerContainer} source={{ uri: a.url }}></Image>;
                        })}
                    </Swiper>
                )
            } else {
                // 本地获取
                return (
                    <Swiper style={styles.headerContainer} showsPagination={false}>
                        {imgSrc.bannerSrc.map((a, i) => {
                            return <ImageBackground style={styles.slide} source={a}></ImageBackground>;
                        })}
                    </Swiper>
                )
            }
        }
       
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        width: gScreen.width,
        height: scaleSize(200),
        alignItems: 'center'
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: gScreen.width,
        height: scaleSize(200),
    },
})