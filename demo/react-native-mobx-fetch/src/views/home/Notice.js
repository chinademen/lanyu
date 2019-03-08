/**
 * 公告 
 */
import React, { PureComponent } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native'
import { toJS } from 'mobx'
import { observer, inject } from 'mobx-react/native'
import ScrollVertical from '@/components/ScrollVertical'

@inject(({ homeStore }) => {
    return {
        noticeList: homeStore.noticeList,
        getNotice: homeStore.getNotice,
    }
})
@observer
export default class Notice extends PureComponent {
    componentDidMount() {
        const { getNotice } = this.props;
        getNotice()
    }
    
    render() {
        let { noticeList } = this.props;

        return (
            <View style={styles.container}>
                <Image source={require('@/assets/dh/images/home/sound.png')}></Image>
                <TouchableOpacity style={styles.scrollBox} onPress={() => {
                                if (noticeList && noticeList.length > 0) {
                                        // alert(noticeList[this.index].title)
                                        // alert('跳转到公告详情页')
                                    }
                                }} >
                    <ScrollVertical
                        onChange={(index => {
                            this.index = index;
                        })}
                        enableAnimation={true}
                        data={toJS(noticeList)}
                        delay={2500}
                        duration={1000}
                        scrollHeight={30}
                        scrollStyle={styles.scrollStyle}
                        textStyle={styles.textStyle}
                    />
                </TouchableOpacity>
                <View style={styles.more} onPress={() => { alert('跳转到公告列表页') }}>
                    <Text>更多>></Text>
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 30,
        paddingLeft: gScreen.width * 0.05,
        backgroundColor: '#FFF', 
        width: gScreen.width,
        flexDirection: 'row',
        alignItems: 'center', // 子元素上下居中
    },
    scrollBox: {
        height: 30,
    },
    scrollStyle: {
        flexWrap: 'nowrap', 
        flexDirection: 'row', 
        alignItems:'center', 
        minWidth: 3000, 
        overflow: 'hidden',
    },
    textStyle: {
        paddingLeft: 10, 
        color: '#333', 
        fontSize: 14, 
        backgroundColor: '#fff',
        flexDirection:'row',
    },
    more: {
        height: 30,
        paddingLeft: 5,
        paddingRight: 15,
        color: '#333',
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor:'#fff',
        fontSize: 14, 
        position: 'absolute', 
        right: 0, 
        top: 0, 
        bottom: 0,
    }
})