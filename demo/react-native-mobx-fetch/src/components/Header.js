/**
 * 公共头部
 */
import React, {Component} from 'react'
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Svg from '@/components/Svg'


const LeftItem = ({onPress}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.75}
            style={styles.leftItem}
            onPress={onPress}
        >
            {/* <Image style={{width: scaleSize(20), height: scaleSize(20)}}
                   source={require('@/assets/dh/images/ic_back_dark.png')}
                   resizeMode={"contain"}
            /> */}
            <Svg icon='left' size='20' />
        </TouchableOpacity>
    )
}

const RightItem = ({onPress, text}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.75}
            style={styles.rightItem}
            onPress={onPress}
        >
            <Text style={{fontSize: 15, color: '#666666'}}>{text}</Text>
        </TouchableOpacity>
    )
}

const RightIconItem = ({onPress, icon}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.75}
            style={styles.rightIconItem}
            onPress={onPress}
        >
            <Image style={{width: 18, height: 18}} source={icon} resizeMode={"contain"}/>
        </TouchableOpacity>
    )
}

export default class Header extends Component {

    static defaultProps = {
        showGoBack: true
    }

    render() {
        const {
            title, titleStyle,
            showGoBack, onBack,
            style, rightTitle, onRight, rightIcon,
            renderRightItem
        } = this.props

        return (
            <LinearGradient
                start={{ x: 0.2, y: 0.2 }}
                end={{ x: 0.8, y: 0.8 }}
                colors={skin.background}
                style={[styles.header, style]}
            >
                {showGoBack && <LeftItem onPress={onBack}/>}
                <Text style={[styles.title, titleStyle]}>{title || ''}</Text>
                {rightTitle && <RightItem text={rightTitle} onPress={onRight}/>}
                {rightIcon && <RightIconItem icon={rightIcon} onPress={onRight}/>}
                {renderRightItem &&
                    <TouchableOpacity
                        activeOpacity={0.75}
                        style={styles.renderRight}
                        onPress={onRight}
                    >
                        {renderRightItem()}
                    </TouchableOpacity>
                }
            </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        // height: !__IOS__ ? 50 : 64,
        height: scaleSize(37.5),
        marginTop: __IOS__ ? 20 : 0,
        // paddingTop: scaleSize(30),
        width: gScreen.width,
        justifyContent: 'center',
        // alignItems: 'center',
        borderColor: gColors.border,
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    title: {
        textAlign: 'center',
        justifyContent: 'center',
        color: '#fff',
        fontSize: scaleSize(16),
    },
    leftItem: {
        zIndex: 999,
        position: 'absolute',
        top: !__IOS__ ? 0 : scaleSize(10),
        // top: scaleSize(25),
        left: 0,
        height: !__IOS__ ? scaleSize(37.5) : scaleSize(33),
        width: scaleSize(40),
        paddingLeft: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    rightItem: {
        position: 'absolute',
        top: !__IOS__ ? 0 : 20,
        right: 0,
        height: !__IOS__ ? 50 : 44,
        paddingRight: 10,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    rightIconItem: {
        position: 'absolute',
        top: !__IOS__ ? 0 : 20,
        right: 0,
        height: !__IOS__ ? 50 : 44,
        paddingRight: 10,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    renderRight: {
        position: 'absolute',
        top: !__IOS__ ? 0 : 20,
        right: 0,
        height: !__IOS__ ? 50 : 44,
        paddingRight: 10,
        justifyContent: 'center',
        alignItems: 'flex-end'
    }
})