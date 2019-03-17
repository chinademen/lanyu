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
                    <Swiper containerStyle={styles.headerContainer} 
                            showsPagination={false}
                            autoplay={true}
                            autoplayTimeout={4}
                    >
                        {toJS(bannerList).map((a, i) => {
                            return <Image style={styles.headerContainer} source={{ uri: a.url }} resizeMode={'stretch'}></Image>;
                        })}
                    </Swiper>
                )
            } else {
                // 本地获取
                return (
                    <Swiper containerStyle={styles.headerContainer} 
                            showsPagination={false}
                            autoplay={true}
                            autoplayTimeout={4}   
                    >
                        {imgSrc.bannerSrc.map((a, i) => {
                            return <Image style={styles.slide} source={a} resizeMode={'stretch'}></Image>;
                        })}
                    </Swiper>
                )
            }
        } else {
            if (bannerList && bannerList.length > 0) {
                // 网络获取
                return (
                    <Swiper style={styles.headerContainer} 
                            showsPagination={false}
                            autoplay={true}
                            autoplayTimeout={4}
                    >
                        {toJS(bannerList).map((a, i) => {
                            return <Image style={styles.headerContainer} source={{ uri: a.url }} resizeMode={'stretch'}></Image>;
                        })}
                    </Swiper>
                )
            } else {
                // 本地获取
                return (
                    <Swiper style={styles.headerContainer} 
                            showsPagination={false}
                            autoplay={true}
                            autoplayTimeout={4}   
                    >
                        {imgSrc.bannerSrc.map((a, i) => {
                            return <Image style={styles.slide} source={a} resizeMode={'stretch'}></Image>;
                        })}
                    </Swiper>
                )
            }
        }
       
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        flex: 1,
        width: gScreen.width,
        height: scaleSize(gScreen.width * 0.4),
        alignItems: 'center',
        justifyContent:'center',
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: gScreen.width,
        height: scaleSize(gScreen.width * 0.4),
    },
})