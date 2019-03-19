/**
 * 一键换肤
 */
import React, { PureComponent } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native'
import { Button } from 'native-base'
import { observer, inject } from 'mobx-react/native'
import LinearGradient from 'react-native-linear-gradient'
import CommonHeader from '@/components/Header'
import skinStyle from '@/assets/dh/skin'
import Svg from '@/components/Svg'

@inject(({ app }) => {
    return {
        appSkin: app.appSkin,
        changeSkin: app.changeSkin,
    }
})
@observer
export default class ChangeSkin extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
        }
    }

    onBack = () => {
        this.props.navigator.pop()
    }

    changeAllSkin(newSkin) {
        // 改变静态global皮肤
        global.skin = newSkin;
        // 改变store中的皮肤
        this.props.changeSkin(newSkin);
        this.setState({
            active: false,
        })
    }

    render() {
        const { appSkin } = this.props;
        const { text, background } = this.props.appSkin;
        const { lotteryItem, lotteryText } = styles;

        return(
            <View style={styles.container}>
                <CommonHeader title={i18n.SIDE_TEXT_CHANGESKIN} onBack={this.onBack}/>
                <View style={styles.lotteryList}>
                    <TouchableOpacity 
                        activeOpacity={0.75}
                        onPress={() => this.changeAllSkin(skinStyle.brown)}
                        key={'skin_brown'}>
                        <LinearGradient colors={['#9e9e9e','#9e9e9e']} style={lotteryItem}>
                            <Svg icon={'skin_brown'} size="40" />
                            <Text style={[lotteryText, { color: '#fff' }]} >{'都市灰'}</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        activeOpacity={0.75}
                        onPress={() => this.changeAllSkin(skinStyle.red)}
                        key={'skin_red'}>
                        <LinearGradient colors={['#D82741','#D82741']} style={lotteryItem}>
                            <Svg icon={'skin_red'} size="40" />
                            <Text style={[lotteryText, { color: '#fff' }]} >{'樱桃红'}</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        activeOpacity={0.75}
                        onPress={() => this.changeAllSkin(skinStyle.blue)}
                        key={'skin_blue'}>
                        <LinearGradient colors={['#4477FF','#4477FF']} style={lotteryItem}>
                            <Svg icon={'skin_blue'} size="40" />
                            <Text style={[lotteryText, { color: '#fff' }]} >{'天空蓝'}</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        activeOpacity={0.75}
                        onPress={() => this.changeAllSkin(skinStyle.black)}
                        key={'skin_black'}>
                        <LinearGradient colors={['#9e9e9e','#9e9e9e']} style={lotteryItem}>
                            <Svg icon={'skin_black'} size="40" />
                            <Text style={[lotteryText, { color: '#fff' }]} >{'乌木黑'}</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        activeOpacity={0.75}
                        onPress={() => this.changeAllSkin(skinStyle.gold)}
                        key={'skin_gold'}>
                        <LinearGradient colors={['#f09c15','#f09c15']} style={lotteryItem}>
                            <Svg icon={'skin_gold'} size="40" />
                            <Text style={[lotteryText, { color: '#fff' }]} >{'沙滩金'}</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        activeOpacity={0.75}
                        onPress={() => this.changeAllSkin(skinStyle.green)}
                        key={'skin_green'}>
                        <LinearGradient colors={['#428739','#428739']} style={lotteryItem}>
                            <Svg icon={'skin_green'} size="40" />
                            <Text style={[lotteryText, { color: '#fff' }]} >{'典雅绿'}</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        activeOpacity={0.75}
                        onPress={() => this.changeAllSkin(skinStyle.silver)}
                        key={'skin_silver'}>
                        <LinearGradient colors={['#000','#000']} style={lotteryItem}>
                            <Svg icon={'skin_silver'} size="40" />
                            <Text style={[lotteryText, { color: '#fff' }]} >{'香槟银'}</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        activeOpacity={0.75}
                        onPress={() => this.changeAllSkin(skinStyle.purple)}
                        key={'skin_purple'}>
                        <LinearGradient colors={['#6F50E7','#6F50E7']} style={lotteryItem}>
                            <Svg icon={'skin_purple'} size="40" />
                            <Text style={[lotteryText, { color: '#fff' }]} >{'贵族紫'}</Text>
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