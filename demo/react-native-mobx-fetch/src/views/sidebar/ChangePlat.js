/**
 * 一键换平台
 */
import React, { PureComponent } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native'
import { observer, inject } from 'mobx-react/native'
import LinearGradient from 'react-native-linear-gradient'
import CommonHeader from '@/components/Header'

@inject(({ app }) => {
    return {
        appSkin: app.appSkin,
        changeSkin: app.changeSkin,
        appPlat: app.appPlat,
        changePlat: app.changePlat
    }
})
@observer
export default class ChangePlat extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
        }
    }

    onBack = () => {
        this.props.navigator.pop()
    }

    changePlat(newPlat) {
        // 切换静态global平台
        global.platName = newPlat;
        // 切换store中的平台
        this.props.changePlat(newPlat);
        this.setState({
            active: false,
        })
    }

    render() {
        const { appPlat } = this.props;
        const { text, background } = this.props.appSkin;
        const { lotteryItem, lotteryText } = styles;

        return(
            <View style={styles.container}>
                <CommonHeader title={i18n.SIDE_TEXT_CHANGEPLAT} onBack={this.onBack}/>
                <View style={styles.lotteryList}>
                    <TouchableOpacity 
                        activeOpacity={0.75}
                        onPress={() => this.changePlat('east')}
                        key={'east'}>
                        <LinearGradient colors={background} style={lotteryItem}>
                            <Text style={[lotteryText, { color: text }]} >{'东皇娱乐'}</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        activeOpacity={0.75}
                        onPress={() => this.changePlat('weat')}
                        key={'weat'}>
                        <LinearGradient colors={background} style={lotteryItem}>
                            <Text style={[lotteryText, { color: text }]} >{'西皇娱乐'}</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        activeOpacity={0.75}
                        onPress={() => this.changePlat('south')}
                        key={'south'}>
                        <LinearGradient colors={background} style={lotteryItem}>
                            <Text style={[lotteryText, { color: text }]} >{'南皇娱乐'}</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        activeOpacity={0.75}
                        onPress={() => this.changePlat('north')}
                        key={'north'}>
                        <LinearGradient colors={background} style={lotteryItem}>
                            <Text style={[lotteryText, { color: text }]} >{'北皇娱乐'}</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        activeOpacity={0.75}
                        onPress={() => this.changePlat('middle')}
                        key={'middle'}>
                        <LinearGradient colors={background} style={lotteryItem}>
                            <Text style={[lotteryText, { color: text }]} >{'中皇娱乐'}</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    lotteryList: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        width: gScreen.width  * 1,
        paddingTop: scaleSize(10),
        backgroundColor: '#fff'
    },
    lotteryItem: {
        width: gScreen.width * 0.28,
        alignItems:'center',
        justifyContent: 'center',
        height: scaleSize(80),
        margin: gScreen.width * 0.0266,
        borderRadius: scaleSize(9),
        overflow: 'hidden',
        elevation: 2,
        shadowOffset: {width: 0, height: 0},
        shadowColor: '#c1d6f8',
        shadowOpacity: 1,
        shadowRadius: scaleSize(5),
    },
    lotteryText: {
        fontSize: scaleSize(16),
        fontWeight: 'bold',
    },
})