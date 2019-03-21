import React, { PureComponent } from 'react'
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    ActivityIndicator,
} from 'react-native'
import throttle from 'lodash.throttle'
import LinearGradient from 'react-native-linear-gradient'

export default class LodingBtn extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
        this.onPress = this.props.onPress.bind(this);
        this.onPressThrottle = throttle(this.onPress, 5000);
    }

    render() {
        /**
         * @param submiting [{Boolean}]     是否正在进行提交操作
         * @param text      [{string}]      按钮文字
         * @param fontSize  [{fontSize}]    字体大小
         * @param color     [{color}]       字体颜色
         */ 
        const { activeOpacity, style, submiting, fontSize, color, text } = this.props;
        let opacity = submiting ? 0.75 : 1;
        return (
            <TouchableOpacity
                activeOpacity={activeOpacity || 0.75}
                style={[style, { opacity: opacity }]}
                onPress={this.onPressThrottle}
            >
                <LinearGradient colors={skin.background} style={styles.btn}>
                    {submiting && <ActivityIndicator color="white" />}
                    <Text style={{fontSize: fontSize || scaleSize(16), color: color || '#fff'}}>{text || '提交'}</Text>
                </LinearGradient>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    btn: {
        flexDirection: 'row',
        width: gScreen.width * 0.8,
        marginTop: scaleSize(10),
        height: scaleSize(45),
        borderRadius: scaleSize(22.5),
        elevation: 2,
        shadowOffset: {width: 0, height: 0},
        shadowColor: '#bbbbb8',
        shadowOpacity: 1,
        shadowRadius: scaleSize(8),
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    }
})