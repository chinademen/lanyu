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

    // 公告切换
    changeNotice = (index) => {
        // alert(index)
    }

    render() {
        let { noticeList } = this.props;

        return (
            <View style={styles.container}>
                <Image source={require('@/assets/dh/images/home/sound.png')}></Image>
                <TouchableOpacity style={styles.scrollBox} onPress={() => {
                    // alert(this.index)
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
                    <Text style={{fontSize: scaleSize(14), color: '#A39175' }}>{i18n.HOME_TEXT_MORE}</Text>
                </TouchableOpacity>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: scaleSize(30),
        paddingLeft: gScreen.width * 0.05,
        backgroundColor: '#FEF6E5', 
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
        color: '#A39175', 
        fontSize: scaleSize(14),
        fontWeight: 'bold',
        backgroundColor: '#FEF6E5',
        flexDirection:'row',
    },
    more: {
        height: scaleSize(30),
        paddingLeft: scaleSize(5),
        paddingRight: scaleSize(15),
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor:'#FEF6E5', 
        position: 'absolute', 
        right: 0, 
        top: 0, 
        bottom: 0,
    }
})