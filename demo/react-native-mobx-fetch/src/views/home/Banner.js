/**
 * 轮播
 */
import React, { PureComponent } from 'react'
import {
    StyleSheet,
    Image,
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
        // 网络获取 || 本地获取
        let list = (bannerList && bannerList.length > 0) ? toJS(bannerList) : imgSrc.bannerSrc;
        //  ios中 Swiper 的 style需要换成 containerStyle
        if (__IOS__) {
            return(
                <Swiper containerStyle={styles.headerContainer} 
                        // showsPagination={false}
                        dotColor='#5b4529'
                        activeDotColor='#ca9c64'
                        paginationStyle={{ width: gScreen.width, paddingLeft: gScreen.width * 0.7 }}
                        autoplay={true}
                        autoplayTimeout={4}
                >
                    {list.map(a => {
                        let source = (bannerList && bannerList.length > 0) ? { uri: a.url } : a;
                        return <Image style={styles.headerContainer} source={source} resizeMode={'stretch'}></Image>;
                    })}
                </Swiper>
            )
        } else {
            return(
                <Swiper style={styles.headerContainer} 
                        // showsPagination={false}
                        dotColor='#5b4529'
                        activeDotColor='#ca9c64'
                        paginationStyle={{ width: gScreen.width, paddingLeft: gScreen.width * 0.7 }}
                        autoplay={true}
                        autoplayTimeout={4}
                >
                    {list.map(a => {
                        let source = (bannerList && bannerList.length > 0) ? { uri: a.url } : a;
                        return <Image style={styles.headerContainer} source={source} resizeMode={'stretch'}></Image>;
                    })}
                </Swiper>
            )
        }
       
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        flex: 1,
        width: gScreen.width,
        height: scaleSize(gScreen.width * 0.4),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
})