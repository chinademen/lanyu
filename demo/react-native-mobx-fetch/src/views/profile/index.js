/**
 * 我的
 */
import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    Image,
    ImageBackground,
} from 'react-native'
import {Navigator} from 'react-native-deprecated-custom-components'
import {observer, inject} from 'mobx-react/native'

@inject('app')
@observer
export default class Profile extends Component {

    _settingAction = () => alert('setting')

    _onLogin = () => {
        const {app, navigator} = this.props
        app.updateBarStyle('default')
        navigator.push({
            id: 'Login',
            sceneConfig: Navigator.SceneConfigs.FloatFromBottom,
            passProps: {onResetBarStyle: ()=>app.updateBarStyle('light-content')}
        })
    }

    _onPressStaticCell = title => alert(title)

    render() {
        let cellStyle = {
            borderTopWidth: gScreen.onePix,
            borderBottomWidth: gScreen.onePix,
        }

        return (
            <View style={{flex: 1, backgroundColor: '#f5f5f5'}}>
                <HeaderView settingAction={this._settingAction} loginAction={this._onLogin}/>
                <View style={[styles.cellContainer, cellStyle]}>
                    <ProfileStaticCell
                        title="充值取款"
                        style={{borderBottomWidth: gScreen.onePix}}
                        imageName={require('@/assets/dh/images/report/check.png')}
                        onPress={this._onPressStaticCell}
                    />
                    <ProfileStaticCell
                        title="报表查询"
                        style={{borderBottomWidth: gScreen.onePix}}
                        imageName={require('@/assets/dh/images/report/check.png')}
                        onPress={this._onPressStaticCell}
                    />
                    <ProfileStaticCell
                        title="契约分红"
                        imageName={require('@/assets/dh/images/report/check.png')}
                        onPress={this._onPressStaticCell}
                    />
                </View>
            </View>
        )
    }
}

const HeaderView = ({settingAction, loginAction}) => {
    return (
        <ImageBackground
            style={{width: gScreen.width, height: 200, alignItems: 'center', backgroundColor: 'transparent'}}
            source={require('@/assets/dh/images/report/check.png')}
        >
            <View style={[styles.header2, {width: gScreen.width}]}>
                <Text style={{color: 'white', fontSize: 16, marginTop: 50}}>amao001</Text>
                <Text style={{color: 'white', fontSize: 16}}>彩票余额(元)</Text>
                <TouchableOpacity
                    activeOpacity={0.75}
                    style={styles.settingContainer}
                    onPress={settingAction}
                >
                    <Image
                        style={{width: 20, height: 20}}
                        source={require('@/assets/dh/images/report/check.png')}
                    />
                </TouchableOpacity>
            </View>
            <View style={{
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <View style={styles.avatarContainer}>
                    <Text style={{color: 'white', fontSize: 26, marginTop: 50}}>999999.9999</Text>
                </View>
                <View style={styles.btnContainer}>
                    <TouchableOpacity
                        activeOpacity={0.75}
                        style={styles.loginContainer}
                        onPress={loginAction}
                    >
                        <Text style={{color: 'white'}}>充值</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.75}
                        style={styles.loginContainer2}
                        onPress={loginAction}
                    >
                        <Text style={{color: 'white'}}>提现</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    )
};

const ProfileStaticCell = ({
    title,
    imageName,
    style,
    onPress
}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.75}
            style={styles.staticCell}
            onPress={()=>onPress(title)}
        >
            <Image style={{width: 20, height: 20, marginHorizontal: 15}} source={imageName}/>
            <View style={[styles.cellStyle, style || style]}>
                <Text style={{color: 'gray'}}>{title}</Text>
                <Image style={{width: 20, height: 20}} source={require('@/assets/dh/images/report/check.png')}/>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    // header: {
    //     height: scaleSize(57.5),
    //     width: gScreen.width,
    //     marginTop: __IOS__ ? 20 : 0,
    //     paddingTop: scaleSize(30),
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     backgroundColor: '#fb5458'
    // },
    // headerText: {
    //     color: 'white', 
    //     fontSize: scaleSize(16)
    // },
    header2: {
        height: __IOS__ ? 44 : 50,
        marginTop: __IOS__ ? 20 : 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    settingContainer: {
        height: __IOS__ ? 44 : 50,
        width: __IOS__ ? 44 : 50,
        position: 'absolute',
        top: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatarContainer: {
        // width: 30,
        height: 30,
        // borderRadius: 45,
        // backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15
    },
    btnContainer: {
        marginTop: 50,
        height: 30,
        width: gScreen.width - 16 * 2,
        alignItems: 'center',
        flexDirection: 'row',
        shadowColor: 'gray',
        shadowOpacity: 0.3,
        shadowOffset: {width: 1, height: -1},
        shadowRadius: 2,
    },
    loginContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 2
    },
    loginContainer2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 2
    },
    cellContainer: {
        borderColor: '#d9d9d9',
        marginTop: 15,
        backgroundColor: 'white'
    },
    staticCell: {
        flexDirection: 'row',
        height: 46,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cellStyle: {
        flex: 1,
        height: 46,
        borderColor: '#d9d9d9',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 15
    }
});