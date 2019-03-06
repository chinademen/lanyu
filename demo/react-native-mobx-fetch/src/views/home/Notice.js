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
                    <Image source={require('@/assets/images/home/sound.png')}></Image>
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
                            scrollHeight={34}
                            scrollStyle={styles.scrollStyle}
                            textStyle={styles.textStyle}
                        />
                    </TouchableOpacity>
                    <Text style={styles.more} onPress={() => {
                                        alert('跳转到公告列表页')
                                    }}>更多>></Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 10,
        backgroundColor: '#FFF', 
        width: gScreen.width,
        flexDirection: 'row',
        alignItems: 'center', // 子元素上下居中
    },
    scrollBox: {
        position: 'relative'
    },
    scrollStyle: {
        alignItems: 'flex-start'
    },
    textStyle: {
        paddingLeft: 5, 
        color: '#333', 
        fontSize: 14, 
        backgroundColor: '#fff'
    },
    more: {
        color: '#333', 
        padding: 5, 
        paddingRight: 15, 
        fontSize: 14, 
        position: 'absolute', 
        right: 0, 
        top: 0, 
        bottom: 0, 
        backgroundColor: '#fff'
    }
})