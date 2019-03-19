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
export default class TabList extends PureComponent {

    renderList() {
        const { list, appSkin: { background } } = this.props;
        const { item } = styles;
        if (list && list.length > 0) {
            return list.map(a => {
                return (
                    <TouchableOpacity 
                        activeOpacity={0.75}
                        onPress={() => a.event()}>
                        <LinearGradient colors={background} style={item}>
                            <Image style={item}
                                source={a.img}
                                resizeMode={"contain"}
                            />
                        </LinearGradient>
                    </TouchableOpacity>
                )
            })
        } else {
            return (
                <View style={styles.noData}>
                    <Text style={{ color: '#fff' }}>暂无数据</Text>
                </View>
            )
        }
    }

    render() {
        const { pageBackground } = this.props.appSkin;
        
        return (
            <View style={[styles.list, { backgroundColor: pageBackground }]}>
                {this.renderList()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        width: gScreen.width  * 1,
        paddingTop: scaleSize(10),
    },
    item: {
        width: gScreen.width * 0.28,
        alignItems:'center',
        justifyContent: 'center',
        height: scaleSize(gScreen.width * 0.28),
        margin: gScreen.width * 0.0266,
        borderRadius: scaleSize(gScreen.width * 0.28),
        overflow: 'hidden',
        elevation: 2,
        shadowOffset: {width: 0, height: 0},
        shadowColor: '#c1d6f8',
        shadowOpacity: 1,
        shadowRadius: scaleSize(5),
    },
    noData: {
        height: scaleSize(42),
        alignItems:'center',
        justifyContent: 'center',
    }
})