/**
 * 公共头部
 */
import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    Platform
} from 'react-native'
import PropTypes from 'prop-types'
import ViewPropTypes from 'ViewPropTypes'


const LeftItem = ({onPress}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.75}
            style={styles.leftItem}
            onPress={onPress}
        >
            <Image style={{width: 20, height: 20}}
                   source={require('@/assets/images/ic_back_dark.png')}
                   resizeMode={"contain"}
            />
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
    static propTypes = {
        style: ViewPropTypes.style,
        title: PropTypes.string,
        showGoBack: PropTypes.bool,
        onBack: PropTypes.func,
        titleStyle: PropTypes.object,
        rightTitle: PropTypes.string,
        onRight: PropTypes.func,
        rightIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        renderRightItem: PropTypes.func
    }

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
            <View style={[styles.header, style]}>
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
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        // height: Platform.OS !== "ios" ? 50 : 64,
        height: 37.5,
        width: gScreen.width,
        paddingTop: Platform.OS !== "ios" ? 0 : 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: gColors.border,
        borderBottomWidth: StyleSheet.hairlineWidth,
        backgroundColor: '-webkit-gradient(linear, 0 0, 0 bottom, from(#fb4d7e), to(rgba(255, 77, 79, 1)))!important'
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 16,
    },
    leftItem: {
        position: 'absolute',
        top: Platform.OS !== "ios" ? 0 : 10,
        left: 0,
        height: Platform.OS !== "ios" ? 37.5 : 33,
        width: 60,
        paddingLeft: 5,
        justifyContent: 'center'
    },
    rightItem: {
        position: 'absolute',
        top: Platform.OS !== "ios" ? 0 : 20,
        right: 0,
        height: Platform.OS !== "ios" ? 50 : 44,
        paddingRight: 10,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    rightIconItem: {
        position: 'absolute',
        top: Platform.OS !== "ios" ? 0 : 20,
        right: 0,
        height: Platform.OS !== "ios" ? 50 : 44,
        paddingRight: 10,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    renderRight: {
        position: 'absolute',
        top: Platform.OS !== "ios" ? 0 : 20,
        right: 0,
        height: Platform.OS !== "ios" ? 50 : 44,
        paddingRight: 10,
        justifyContent: 'center',
        alignItems: 'flex-end'
    }
})