/**
 * 公告详情
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

@inject(({ app }) => {
    return {
        submiting: app.submiting,
    }
})
@observer
export default class NoticeDetails extends PureComponent {

    onBack = () => {
        const { navigator } = this.props;
        navigator.pop()
    }

    render() {
        // const { title, content, updatetime } = this.props.navigator.state.data;
        const { data } = this.props.navigator.state
        // alert(JSON.stringify(data))

        return (
            <Container>
                    {/* {__IOS__ ? <Header style={styles.header}>
                        <Left>
                            <Button onPress={this.onBack} style={styles.backBtn}>
                                <Image style={styles.back} source={require('@/assets/dh/images/login/left.png')}/>
                            </Button>
                        </Left>
                        <Body>
                            <Title style={styles.headertitle}>公告详情</Title>
                        </Body>
                        <Right />
                    </Header> : <CommonHeader title="公告详情" onBack={this.onBack}/>
                    } */}
                    <CommonHeader title="公告详情" onBack={this.onBack}/>
                    <Content style={{ padding: 20 }}>
                        <Text style={{ fontSize: 16 }}>{'文章标题1'}</Text>
                        <Text style={{ fontSize: 10, color: 'gray', textAlign: 'center' }}>{'2019-3-11'}</Text>
                        <Text style={{ fontSize: 14 }}>亲爱的用户：</Text>
                        <Text style={{ fontSize: 14 }}>{'公告内容测试'}</Text>
                        <Text style={{ fontSize: 12, textAlign: 'right' }}>东皇运营部</Text>
                        <Text style={{ fontSize: 12, textAlign: 'right' }}>{'2019-3-11'}</Text>
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