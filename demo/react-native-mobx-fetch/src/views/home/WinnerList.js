/**
 * 中奖名单
*/ 
import React, { PureComponent } from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
} from 'react-native'
import { toJS } from 'mobx'
// import { observer, inject } from 'mobx-react/native'
import ScrollVertical from '@/components/ScrollVertical'

// @inject(({ homeStore }) => {
//     return {
//         noticeList: homeStore.noticeList,
//         getNotice: homeStore.getNotice,
//     }
// })
// @observer
export default class WinnerList extends PureComponent {
    // componentDidMount() {
    //     const { getNotice } = this.props;
    //     getNotice()
    // }
    
    render() {
        // let { noticeList } = this.props;
        let noticeList = [
            { content: 'B25***福彩3D分分彩 中奖：2812                    （28分钟前）' },
            { content: 'B95***福彩分分彩 中奖：4356                        （12分钟前）' },
            { content: 'B15***福彩 中奖：0356                                     （22分钟前）' },
        ]

        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.scrollBox}>
                    <ScrollVertical
                        onChange={(index => {
                            this.index = index;
                        })}
                        enableAnimation={true}
                        data={toJS(noticeList)}
                        delay={2500}
                        duration={1000}
                        scrollHeight={38}
                        scrollStyle={styles.scrollStyle}
                        textStyle={styles.textStyle}
                    />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 38,
        backgroundColor: '#FFF', 
        width: gScreen.width,
        paddingHorizontal: gScreen.width * 0.05,
        flexDirection: 'row',
        alignItems: 'center', // 子元素上下居中
    },
    scrollBox: {
        height: 38,
        width: gScreen.width * 0.9,
    },
    scrollStyle: {
        flexWrap: 'nowrap', 
        flexDirection: 'row', 
        alignItems:'center', 
        minWidth: 3000, 
        overflow: 'hidden',
    },
    textStyle: {
        color: '#333', 
        fontSize: 14, 
        backgroundColor: '#fff',
        flexDirection:'row',
    }
})