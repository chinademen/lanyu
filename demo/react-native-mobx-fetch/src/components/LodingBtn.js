import React, { PureComponent } from 'react'
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    ActivityIndicator,
} from 'react-native'

export default class LodingBtn extends PureComponent {

    render() {
        /**
         * @param submiting [{Boolean}]     是否正在进行提交操作
         * @param text      [{string}]      按钮文字
         * @param fontSize  [{fontSize}]    字体大小
         * @param color     [{color}]       字体颜色
         */ 
        const { activeOpacity, style, onPress, submiting, fontSize, color, text } = this.props;
        let opacity = submiting ? 0.75 : 1;
        return (
            <TouchableOpacity
                activeOpacity={activeOpacity || 0.75}
                style={[styles.btn, style, { opacity: opacity }]}
                onPress={onPress}
            >
                {submiting && <ActivityIndicator color="white" />}
                <Text style={{fontSize: fontSize || 16, color: color || '#fff'}}>{text || '提交'}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    btn: {
        flexDirection: 'row',
        width: gScreen.width * 0.8,
        marginTop: 10,
        height: 45,
        borderRadius: 25,
        backgroundColor: '-webkit-gradient(linear, 0 0, 0 bottom, from(#fb4d7e), to(rgba(255, 77, 79, 1)))!important',
        // boxShadow: '0px 2px 3px #bbbbb8 !important',
        // shadowColor: '#bbbbb8',
        // shadowOpacity: 0.3,
        // shadowOffset: {width: 1, height: -1},
        // shadowRadius: 2,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    }
})