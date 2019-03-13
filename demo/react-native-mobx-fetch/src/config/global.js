/**
 * 全局对象
 */
import { Dimensions, Platform, PixelRatio } from 'react-native'
import i18n from '@/assets/dh/i18n'

global.projectName = 'dh';
global.i18n = i18n;

global.iphoneX = false;
global.__IOS__ = false;
global.__ANDROID__ = true;

global.gScreen = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    navBarHeight: __IOS__ ? 64 : 50,
    navBarPaddingTop: __IOS__ ? 20 : 0,
    onePix: 1 / PixelRatio.get(),
}

global.gColors = {
    theme: 'rgb(217, 51, 58)',
    background: '#f5f5f5',
    border: '#d5d5d5',
    healthGreen: 'rgb(142, 213, 7)',
    healthYellow: 'rgb(254, 210, 10)',
    healthRed: 'rgb(251, 25, 8)'
}

/**
 * 尺寸重置
 */
let screenW = Dimensions.get('window').width;
let screenH = Dimensions.get('window').height;
let pixelRatio = PixelRatio.get();
//像素密度
const DEFAULT_DENSITY = 2;
//px转换成dp
//以iphone6为基准,如果以其他尺寸为基准的话,请修改下面的defaultWidth和defaultHeight为对应尺寸即可. 以下为1倍图时
const defaultWidth = 375;
const defaultHeight = 667;
const w2 = defaultWidth / DEFAULT_DENSITY;
//px转换成dp
const h2 = defaultHeight / DEFAULT_DENSITY;

// 尺寸适配
global.scaleSize = function (size) {
    let scaleWidth = screenW / w2;
    let scaleHeight = screenH / h2;
    let scale = Math.min(scaleWidth, scaleHeight);
    size = Math.round((size * scale + 0.5));
    return size / DEFAULT_DENSITY;
}

/**
 * 判断是否为iphoneX
 * @returns {boolean}
 */
global.isIphoneX = function () {
    return (
        Platform.OS === 'ios' && (screenW === 812 || screenH === 812 || screenW === 896 || screenH === 896)
    )
}

/**
 * 根据是否是iPhoneX返回不同的样式
 * @param iphoneXStyle
 * @param iosStyle
 * @param androidStyle
 * @returns {*}
 */
global.ifIphoneX = function (iphoneXStyle, iosStyle = {}, androidStyle) {
    if (global.isIphoneX()) {
        return iphoneXStyle;
    } else if (Platform.OS === 'ios') {
        return iosStyle
    } else {
        if (androidStyle) return androidStyle;
        return iosStyle
    }
}


export default global