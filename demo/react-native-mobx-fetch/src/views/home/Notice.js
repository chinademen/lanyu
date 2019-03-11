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
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        const { getNotice } = this.props;
        getNotice()
    }

    // 跳转到详情页
    // toNoticeDetails = () => {
    //     this.props.navigator.push({
    //         id: 'NoticeDetails',
    //     })
    // }

    // 跳转到列表页
    toNoticeList = () => {
        this.props.navigator.push({
            id: 'NoticeList',
        })
    }

    render() {
        let { noticeList } = this.props;

        return (
            <View style={styles.container}>
                <Image source={require('@/assets/dh/images/home/sound.png')}></Image>
                <TouchableOpacity style={styles.scrollBox} onPress={() => {
                    this.props.navigator.push({
                        id: 'NoticeDetails',
                        data: noticeList[this.index]
                    })
                }}>
                    <ScrollVertical
                        onChange={(index => {
                            this.index = index;
                        })}
                        enableAnimation={true}
                        data={toJS(noticeList)}
                        delay={2500}
                        duration={1000}
                        scrollHeight={scaleSize(30)}
                        scrollStyle={styles.scrollStyle}
                        textStyle={styles.textStyle}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.more} onPress={() => this.toNoticeList()}>
                    <Text style={{fontSize: scaleSize(14)}}>更多>></Text>
                </TouchableOpacity>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: scaleSize(30),
        paddingLeft: gScreen.width * 0.05,
        backgroundColor: '#FFF', 
        width: gScreen.width,
        flexDirection: 'row',
        alignItems: 'center', // 子元素上下居中
    },
    scrollBox: {
        height: scaleSize(30),
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
        fontSize: scaleSize(14), 
        backgroundColor: '#fff',
        flexDirection:'row',
    },
    more: {
        height: scaleSize(30),
        paddingLeft: scaleSize(5),
        paddingRight: scaleSize(15),
        color: '#333',
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor:'#fff', 
        position: 'absolute', 
        right: 0, 
        top: 0, 
        bottom: 0,
    }
})