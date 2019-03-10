/**
 * 公告列表
*/
import React, { PureComponent } from 'react';
import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
} from 'react-native'
import { Container, Header, Title, Content, Left, Right, Body, Text, Button } from 'native-base'
import { toJS } from 'mobx'
import { observer, inject } from 'mobx-react/native'
import CommonHeader from '@/components/Header'

@inject(({ homeStore }) => {
    return {
        noticeList: homeStore.noticeList,
        getNotice: homeStore.getNotice,
    }
})
export default class NoticeDetails extends PureComponent {
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

        return (
            <Container>
                    {__IOS__ ? <Header style={styles.header}>
                        <Left>
                            <Button onPress={this.onBack} style={styles.backBtn}>
                                <Image style={styles.back} source={require('@/assets/dh/images/login/left.png')}/>
                            </Button>
                        </Left>
                        <Body>
                            <Title style={styles.headertitle}>公告信息</Title>
                        </Body>
                        <Right />
                    </Header> : <CommonHeader title="公告信息" onBack={this.onBack}/>
                    }
                    <Content>
                        <Text>公告信息</Text>
                    </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '-webkit-gradient(linear, 0 0, 0 bottom, from(#fb4d7e), to(rgba(255, 77, 79, 1)))!important'
    },
    backBtn: {
        backgroundColor: '-webkit-gradient(linear, 0 0, 0 bottom, from(#fb4d7e), to(rgba(255, 77, 79, 1)))!important'
    },
    back: {
        width: 14,
        height: 14
    },
    headertitle: {
        color: '#fff',
        textAlign: 'center',
    }
})