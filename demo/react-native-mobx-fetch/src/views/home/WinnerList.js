/**
 * 中奖名单
*/ 
import React, { PureComponent } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native'
import { toJS } from 'mobx'
// import { observer, inject } from 'mobx-react/native'
import ScrollVertical from '@/components/ScrollVertical'

let list = [
    { name: 'B25***', type: '福彩3D分分彩', number: '2812', time: '28分钟前' },
    { name: 'B95***', type: '福彩分分彩', number: '4356', time: '12分钟前' },
    { name: 'B15***', type: '福彩', number: '0356', time: '22分钟前' },
]

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

    // 消息盒子
    noticebox = () => {
        let result = [];
        list.forEach(item => {
            let { name, type, number, time } = item;
            let obj = {
                content: <View style={{flex: 1, flexDirection: 'row', alignItems:'center'}}>
                    <Text style={styles.text}>{name}</Text>
                    <Text style={[styles.text, {color: '#06ce85'}]}>{type}</Text>
                    <Text style={styles.text}>{i18n.HOME_TEXT_WIN}</Text>
                    <Text style={[styles.text, {color: '#ff4d4d'}]}>{number}</Text>
                    <Text style={[styles.text, {marginLeft: scaleSize(10)}]}>{`(${time})`}</Text>
                </View>
            }
            result.push(obj)
        });
        return result;
    }
    
    render() {
        // let { noticeList } = this.props;

        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.scrollBox}>
                    <ScrollVertical
                        onChange={(index => {
                            this.index = index;
                        })}
                        enableAnimation={true}
                        // data={toJS(noticeList)}
                        data={this.noticebox()}
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
        width: gScreen.width * 0.9468,
        height: scaleSize(38),
        backgroundColor: '#FFF',
        borderTopLeftRadius: scaleSize(8),
        borderTopRightRadius: scaleSize(8),
        paddingHorizontal: gScreen.width * 0.05,
        flexDirection: 'row',
        alignItems: 'center', // 子元素上下居中
    },
    scrollBox: {
        height: scaleSize(38),
        width: gScreen.width * 0.9468,
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
        fontSize: scaleSize(14), 
        backgroundColor: '#fff',
        flexDirection:'row',
    },
    text: {
        fontSize: scaleSize(12),
    }
})