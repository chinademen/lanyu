/**
 * 公告详情
*/
import React, { PureComponent } from 'react';
import {
    StyleSheet,
} from 'react-native'
import { Container, Content, Text } from 'native-base'
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
   
})