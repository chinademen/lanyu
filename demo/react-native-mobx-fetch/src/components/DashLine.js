/**
 * 虚线 
*/
import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';
 
/* 
 * type 线的类型    vertical(竖线) | horizontal(横线)
 * style 外传样式
 * len 虚线个数
 * width 总长度
 * backgroundColor 背景颜色
*/
export default class DashLine extends Component {

    render() {
        let { type, len, width, style } = this.props;
        var arr = [];
        for (let i = 0; i < len; i++) {
            arr.push(i);
        }
        // 竖线设置高度，横线设置宽度
        let obj = (type === 'vertical') ? { height: width } : { width };
        let styles = (type === 'vertical') ? verticalStyles : horizontalStyles;
        // 外面没有传样式，默认空对象
        style = style || {};
        // 竖线
        return <View style={[styles.dashLine, obj, style]}>
            {
                arr.map((item, index) => {
                    return <Text style={[styles.dashItem, {backgroundColor: this.props.backgroundColor}]}
                                key={'dash' + index}> </Text>
                })
            }
        </View>
    }
}

// 竖线
const verticalStyles = StyleSheet.create({
    dashLine: {
        flexDirection: 'column',
    },
    dashItem: {
        height: 2,
        width: 2,
        marginTop: 2,
        flex: 1,
    }
})

// 横线
const horizontalStyles = StyleSheet.create({
    dashLine: {
        flexDirection: 'row',
    },
    dashItem: {
        height: 1,
        width: 2,
        marginRight: 2,
        flex: 1,
    }
})