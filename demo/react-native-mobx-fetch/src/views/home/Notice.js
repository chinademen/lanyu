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

const dataArray = [
    {
        title: `降价了降价了降价了降价了降价了降价了降价了降价了降价了降价了降价了降价了降价了
        降价了降价了降价了降价了降价了降价了降价了降价了降价了降价了降价了降价了降价了
        降价了降价了降价了降价了降价了降价了降价了降价了降价了降价了降价了降价了降价了
        降价了降价了降价了降价了降价了降价了降价了降价了降价了降价了降价了降价了降价了
        降价了降价了降价了降价了降价了降价了降价了降价了降价了降价了降价了降价了降价了`,
    },
    {
        title: `全场五折全场五折全场五折全场五折全场五折全场五折全场五折全场五折全场五折
        全场五折全场五折全场五折全场五折全场五折全场五折全场五折全场五折全场五折
        全场五折全场五折全场五折全场五折全场五折全场五折全场五折全场五折全场五折
        全场五折全场五折全场五折全场五折全场五折全场五折全场五折全场五折全场五折
        全场五折全场五折全场五折全场五折全场五折全场五折全场五折全场五折全场五折`,
    },
    {
        title: `打到骨折打到骨折打到骨折打到骨折打到骨折打到骨折打到骨折打到骨折打到骨折打到骨折
        打到骨折打到骨折打到骨折打到骨折打到骨折打到骨折打到骨折打到骨折打到骨折打到骨折
        打到骨折打到骨折打到骨折打到骨折打到骨折打到骨折打到骨折打到骨折打到骨折打到骨折
        打到骨折打到骨折打到骨折打到骨折打到骨折打到骨折打到骨折打到骨折打到骨折打到骨折
        打到骨折打到骨折打到骨折打到骨折打到骨折打到骨折打到骨折打到骨折打到骨折打到骨折`,
    }
];

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
        alert(JSON.stringify(noticeList))
        let list = [];
        for (let item of noticeList) {
            list.push({ content: item.content});
        }
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => {
                                        if (noticeList && noticeList.length > 0) {
                                            alert(noticeList[this.index].title)
                                        }
                                    }} 
                    style={styles.box}>
                    <Image source={require('@/assets/images/home/sound.png')}></Image>
                    <View style={styles.scrollBox}>
                        <ScrollVertical
                            onChange={(index => {
                                this.index = index;
                            })}
                            enableAnimation={true}
                            data={list}
                            delay={2500}
                            duration={1000}
                            scrollHeight={34}
                            scrollStyle={styles.scrollStyle}
                            textStyle={styles.textStyle}
                        />
                    </View>
                    <Text style={styles.more}>更多>></Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 5, 
        backgroundColor: '#FFF', 
        width: gScreen.width
    },
    box: {
        flexDirection: 'row', 
        backgroundColor: "#FFF", 
        alignItems: 'center'
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