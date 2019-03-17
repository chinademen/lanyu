/**
 * 电子
 */
import React, { PureComponent } from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Image,
} from 'react-native'
import { observer, inject } from 'mobx-react/native'
import LinearGradient from 'react-native-linear-gradient'

@inject(({ app }) => {
    return {
        appSkin: app.appSkin,
    }
})
@observer
export default class ElectronTab extends PureComponent {
    goBetPage() {
        alert('敬请期待')
    }

    render() {
        const { background } = this.props.appSkin;
        const { electronItem } = styles;
    
        return (
            <View style={{flex: 1}}>
                <View style={styles.electronList}>
                    <TouchableOpacity 
                        activeOpacity={0.75}
                        onPress={() => this.goBetPage()}>
                        <LinearGradient colors={background} style={electronItem}>
                            <Image style={electronItem}
                                source={require('@/assets/dh/images/game/electron/ag.png')}
                                resizeMode={"contain"}
                            />
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        activeOpacity={0.75}
                        onPress={() => this.goBetPage()}>
                        <LinearGradient colors={background} style={electronItem}>
                            <Image style={electronItem}
                                source={require('@/assets/dh/images/game/electron/bbin.png')}
                                resizeMode={"contain"}
                            />
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        activeOpacity={0.75}
                        onPress={() => this.goBetPage()}>
                        <LinearGradient colors={background} style={electronItem}>
                            <Image style={electronItem}
                                source={require('@/assets/dh/images/game/electron/pt.png')}
                                resizeMode={"contain"}
                            />
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        activeOpacity={0.75}
                        onPress={() => this.goBetPage()}>
                        <LinearGradient colors={background} style={electronItem}>
                            <Image style={electronItem}
                                source={require('@/assets/dh/images/game/electron/jdb.png')}
                                resizeMode={"contain"}
                            />
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        activeOpacity={0.75}
                        onPress={() => this.goBetPage()}>
                        <LinearGradient colors={background} style={electronItem}>
                            <Image style={electronItem}
                                source={require('@/assets/dh/images/game/electron/mg.png')}
                                resizeMode={"contain"}
                            />
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        activeOpacity={0.75}
                        onPress={() => this.goBetPage()}>
                        <LinearGradient colors={background} style={electronItem}>
                            <Image style={electronItem}
                                source={require('@/assets/dh/images/game/electron/psdz.png')}
                                resizeMode={"contain"}
                            />
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        activeOpacity={0.75}
                        onPress={() => this.goBetPage()}>
                        <LinearGradient colors={background} style={electronItem}>
                            <Image style={electronItem}
                                source={require('@/assets/dh/images/game/electron/pt2.png')}
                                resizeMode={"contain"}
                            />
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        activeOpacity={0.75}
                        onPress={() => this.goBetPage()}>
                        <LinearGradient colors={background} style={electronItem}>
                            <Image style={electronItem}
                                source={require('@/assets/dh/images/game/electron/sw.png')}
                                resizeMode={"contain"}
                            />
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        activeOpacity={0.75}
                        onPress={() => this.goBetPage()}>
                        <LinearGradient colors={background} style={electronItem}>
                            <Image style={electronItem}
                                source={require('@/assets/dh/images/game/electron/yp.png')}
                                resizeMode={"contain"}
                            />
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    electronList: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        width: gScreen.width  * 1,
        paddingTop: scaleSize(10)

    },
    electronItem: {
        width: gScreen.width * 0.28,
        alignItems:'center',
        justifyContent: 'center',
        height: scaleSize(gScreen.width * 0.28),
        margin: gScreen.width * 0.0266,
        // borderWidth: scaleSize(1),
        // borderColor: '#ec5355',
        borderRadius: scaleSize(gScreen.width * 0.28),
        overflow: 'hidden',
        elevation: 2,
        shadowOffset: {width: 0, height: 0},
        shadowColor: '#c1d6f8',
        shadowOpacity: 1,
        shadowRadius: scaleSize(5),
    },
})