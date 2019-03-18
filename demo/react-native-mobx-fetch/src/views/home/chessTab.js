/**
 * 棋牌
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
export default class ChessTab extends PureComponent {
    goBetPage() {
        alert('敬请期待')
    }

    render() {
        const { pageBackground, background } = this.props.appSkin;
        const { chessItem } = styles;

        return (
            <View style={{flex: 1}}>
                <View style={[styles.chessList, { backgroundColor: pageBackground }]}>
                    <TouchableOpacity 
                        activeOpacity={0.75}
                        onPress={() => this.goBetPage()}>
                        <LinearGradient colors={background} style={chessItem}>
                            <Image style={chessItem}
                                source={require('@/assets/dh/images/game/chess/dsqp.png')}
                                resizeMode={"contain"}
                            />
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        activeOpacity={0.75}
                        onPress={() => this.goBetPage()}>
                        <LinearGradient colors={background} style={chessItem}>
                            <Image style={chessItem}
                                source={require('@/assets/dh/images/game/chess/kyqp.png')}
                                resizeMode={"contain"}
                            />
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        activeOpacity={0.75}
                        onPress={() => this.goBetPage()}>
                        <LinearGradient colors={background} style={chessItem}>
                            <Image style={chessItem}
                                source={require('@/assets/dh/images/game/chess/lyqp.png')}
                                resizeMode={"contain"}
                            />
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        activeOpacity={0.75}
                        onPress={() => this.goBetPage()}>
                        <LinearGradient colors={background} style={chessItem}>
                            <Image style={chessItem}
                                source={require('@/assets/dh/images/game/chess/vgqp.png')}
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
    chessList: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        width: gScreen.width  * 1,
        paddingTop: scaleSize(10),
        // backgroundColor: '#322b33'
    },
    chessItem: {
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