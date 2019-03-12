/**
 * 公告列表
*/
import React, { PureComponent } from 'react';
import {
    StyleSheet,
    FlatList,
    Text,
    View,
    Animated,
    ActivityIndicator,
} from 'react-native'
import { Container, Content } from 'native-base'
import { observer, inject } from 'mobx-react/native'
import CommonHeader from '@/components/Header'

let pageNo = 1; //当前第几页
let totalPage = 5; //总的页数

@inject(({ homeStore }) => {
    return {
        noticeList: homeStore.noticeList,
        getNotice: homeStore.getNotice,
    }
})
@observer
export default class NoticeDetails extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            dataArray: [
                { name: 'a', stargazers_count: 1, description: '1' },
                { name: 'a', stargazers_count: 1, description: '1' },
                { name: 'a', stargazers_count: 1, description: '1' },
                { name: 'a', stargazers_count: 1, description: '1' },
            ],
            showFoot: 0, // 控制foot， 0：隐藏footer  1：已加载完成,没有更多数据   2 ：显示加载中
            isRefreshing: false, // 下拉控制
        }
    }

    componentDidMount() {
        const { getNotice } = this.props;
        getNotice()
    }
    // 返回上一页
    onBack = () => {
        const { navigator } = this.props;
        navigator.pop()
    }

    render() {
        let { noticeList } = this.props;
        // alert(JSON.stringify(noticeList))

        return (
            <Container>
                    <CommonHeader title="公告信息" onBack={this.onBack}/>
                    <Content style={styles.container}>
                        {noticeList && noticeList.length > 0 && this.renderData() || this.createNoData()}
                    </Content>
            </Container>
        )
    }

    // 无数据
    createNoData = () => {
        return (
            <View style={styles.noData}>
                <Text>暂无数据</Text>
            </View> 
        )
    }

    // 渲染数据
    renderData() {
        return (
            <FlatList
                data={this.state.dataArray}
                renderItem={this.renderItemView}
                ListFooterComponent={this.renderFooter.bind(this)}
                onEndReached={this.onEndReached.bind(this)}
                onEndReachedThreshold={1}
                ItemSeparatorComponent={this.line}
            />

        );
    }

    // 每列数据渲染
    renderItemView({item}) {
        return (
            <View style={styles.itembox}>
                <Text style={styles.itemtext}>name: {item.name} ({item.stargazers_count}
                    stars)</Text>
                <Text style={styles.itemtext}>description: {item.description}</Text>
            </View>
        );
    }

    // 加载数据状态
    renderFooter() {
        if (this.state.showFoot === 1) {
            return (
                <View style={styles.footer}>
                    <Text style={styles.itemtext}>
                        没有更多数据了
                    </Text>
                </View>
            );
        } else if(this.state.showFoot === 2) {
            return (
                <View style={styles.footer}>
                    <ActivityIndicator 
                        animating={true}
                        color="gray"
                    />
                    <Text>正在加载...</Text>
                </View>
            );
        } else if(this.state.showFoot === 0){
            return (
                <View style={styles.footer}>
                    <Text></Text>
                </View>
            );
        }
    }

    onEndReached(){
        // 如果是正在加载中或没有更多数据了，则返回
        if(this.state.showFoot != 0 ){
            return;
        }
        // 如果当前页大于或等于总页数，那就是到最后一页了，返回
        if((pageNo != 1) && (pageNo >= totalPage)){
            return;
        } else {
            pageNo++;
        }
        // 底部显示正在加载更多数据
        this.setState({showFoot: 2});
    }

    // 分割线
    line = () => {
        return <View style={styles.line}/>;
    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eff3f9', 
        width: gScreen.width,
        paddingTop: scaleSize(10)
    },
    noData: {
        height: scaleSize(42),
        alignItems:'center',
        justifyContent: 'center',
    },
    itembox: {
        backgroundColor: '#FFF',
        width: gScreen.width,
        height: scaleSize(68),
        paddingVertical: scaleSize(10),
        paddingHorizontal: scaleSize(15),
        alignItems:'center',
        justifyContent:'flex-start'
    },
    itemtext: {
        color:'#999',
        fontSize: scaleSize(14),
    },
    footer: {
        flex: 1,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center',
        height: scaleSize(40),
        backgroundColor:'#fff',
        borderTopWidth: scaleSize(1),
        borderColor: '#f3f3f3',
        marginBottom: scaleSize(20),
        
    },
    line: {
        height: scaleSize(1),
        backgroundColor:'#f3f3f3'
    }
})