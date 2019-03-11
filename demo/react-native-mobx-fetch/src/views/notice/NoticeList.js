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

const REQUEST_URL = 'https://api.github.com/search/repositories?q=javascript&sort=stars&page=';
let pageNo = 1;//当前第几页
let totalPage=5;//总的页数
let itemNo=0;//item的个数

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
            isLoading: true,
            //网络请求状态
            error: false,
            errorInfo: "",
            dataArray: [],
            showFoot:0, // 控制foot， 0：隐藏footer  1：已加载完成,没有更多数据   2 ：显示加载中
            isRefreshing:false,//下拉控制
        }
    }

    componentDidMount() {
        const { getNotice } = this.props;
        getNotice()
        //请求数据
        this.fetchData( pageNo );
    }

    // 模拟获取数据
    //网络请求——获取第pageNo页数据
    fetchData(pageNo) {
        //这个是js的访问网络的方法
        fetch(REQUEST_URL+pageNo)
            .then((response) => response.json())
            .then((responseData) => {
                let data = responseData.items;
                let dataBlob = [];
                let i = itemNo;

                data.map(function (item) {
                    dataBlob.push({
                        key: I,
                        value: item,
                    })
                    I++;
                });
                itemNo = I;
                console.log("itemNo:"+itemNo);
                let foot = 0;
                if(pageNo>=totalPage){
                    foot = 1;//listView底部显示没有更多数据了
                }

                this.setState({
                    //复制数据源
                    dataArray:this.state.dataArray.concat(dataBlob),
                    isLoading: false,
                    showFoot:foot,
                    isRefreshing:false,
                });
                data = null;
                dataBlob = null;
            })
            .catch((error) => {
                this.setState({
                    error: true,
                    errorInfo: error
                })
            })
            .done();
    }

    // 返回上一页
    onBack = () => {
        const { navigator } = this.props;
        navigator.pop()
    }

    render() {
        let { noticeList } = this.props;

        // alert(JSON.stringify(noticeList))
        // 第一次加载等待的view
        if (this.state.isLoading && !this.state.error) {
            alert(1)
            return this.renderLoadingView();
        } else if (this.state.error) {
            //请求失败view
            alert(2)
            return this.renderErrorView();
        }
        //加载数据
        alert(3)
        return this.renderData();

        // return (
        //     <Container>
        //             <CommonHeader title="公告信息" onBack={this.onBack}/>
        //             <Content>
        //                 <ActivityIndicator
        //                     animating={true}
        //                     color="gray"
        //                     size="large"
        //                 />
        //                 {/* <FlatList
        //                     style={styles.container}
        //                     data={this.state.data}
        //                     //item显示的布局
        //                     renderItem={({item}) => this._createListItem(item)}
        //                     // 空布局
        //                     ListEmptyComponent={this._createEmptyView}
        //                     //添加头尾布局
        //                     ListHeaderComponent={this._createListHeader}
        //                     ListFooterComponent={this._createListFooter}
        //                     //下拉刷新相关
        //                     onRefresh={() => this._onRefresh()}
        //                     refreshing={this.state.isRefresh}
        //                     //加载更多
        //                     onEndReached={() => this._onLoadMore()}
        //                     onEndReachedThreshold={0.1}
        //                 /> */}
        //             </Content>
        //     </Container>
        // )
    }

    // 无数据
    renderLoadingView() {
        return (
            <View style={styles.container}>
                <ActivityIndicator
                    animating={true}
                    color='red'
                    size="large"
                />
            </View>
        );
    }

    //加载错误
    renderErrorView() {
        return (
            <View style={styles.container}>
                <Text>
                    Fail
                </Text>
            </View>
        );
    }

    // 渲染数据
    renderData() {
        return (
            <FlatList
                data={this.state.dataArray}
                renderItem={this._renderItemView}
                ListFooterComponent={this._renderFooter.bind(this)}
                onEndReached={this._onEndReached.bind(this)}
                onEndReachedThreshold={1}
                ItemSeparatorComponent={this._separator}
            />

        );
    }

    //返回itemView
    _renderItemView({item}) {
        return (
            <View>
                <Text style={styles.title}>name: {item.value.name} ({item.value.stargazers_count}
                    stars)</Text>
                <Text style={styles.content}>description: {item.value.description}</Text>
            </View>
        );
    }

    _renderFooter(){
        if (this.state.showFoot === 1) {
            return (
                <View style={{height:30,alignItems:'center',justifyContent:'flex-start',}}>
                    <Text style={{color:'#999999',fontSize:14,marginTop:5,marginBottom:5,}}>
                        没有更多数据了
                    </Text>
                </View>
            );
        } else if(this.state.showFoot === 2) {
            return (
                <View style={styles.footer}>
                    <ActivityIndicator />
                    <Text>正在加载更多数据...</Text>
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

    _onEndReached(){
        //如果是正在加载中或没有更多数据了，则返回
        if(this.state.showFoot != 0 ){
            return ;
        }
        //如果当前页大于或等于总页数，那就是到最后一页了，返回
        if((pageNo!=1) && (pageNo>=totalPage)){
            return;
        } else {
            pageNo++;
        }
        //底部显示正在加载更多数据
        this.setState({showFoot:2});
        //获取数据
        this.fetchData( pageNo );
    }

    _separator(){
        return <View style={{height:1,backgroundColor:'#999999'}}/>;
    }

}

const styles = StyleSheet.create({
   
})