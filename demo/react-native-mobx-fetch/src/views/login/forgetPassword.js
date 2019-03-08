/**
 * 忘记密码 ---> 验证账号 ---> 重置密码
 */
import React, { Component, Fragment } from 'react'
import {
    StyleSheet,
    View,
    TextInput,
    Image,
    Alert,
} from 'react-native'
import { Container, Header, Title, Content, Left, Right, Body, Text, Button } from 'native-base'
import {observer, inject} from 'mobx-react/native'
import CommonHeader from '@/components/Header'
import LodingBtn from '@/components/LodingBtn'
import { checkUserName, checkPassWord } from '@/util/filter'

@inject(({ app, loginStore }) => {
    return {
        submiting: app.submiting,
        changeSubmit: app.changeSubmit,
        userCheckFundPassword: loginStore.userCheckFundPassword,
        userFindPassword: loginStore.userFindPassword,
    }
})
@observer
export default class ForgetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageIndex: 1,               // 1 账号验证, 2 密码重置
            username: '',               // 用户名
            usernameError: '',          // 用户名输入错误提示
            fundsPassword: '',          // 密码
            fundsPasswordError: '',     // 资金密码输入错误提示
            newPassword: '',            // 新密码
            newPasswordError: '',       // 新密码输入错误提示
            confirmPassword: '',        // 确认密码
            confirmPasswordError: '',   // 确认密码输入错误提示
            userid: '',                 // 验证资金密码返回的用户id
            submitText: '提交',         // 提交 | 正在提交...
        }
    }

    // 返回上一页
    onBack = () => {
        const { navigator, onResetBarStyle } = this.props;
        const { pageIndex } = this.state;
        if (pageIndex === 1) {
            onResetBarStyle && onResetBarStyle()
            navigator.pop()
        } else {
            this.resetState()
        }
    }

    // 状态重置
    resetState = () => {
        this.setState({
            pageIndex: 1,
            username: '',
            usernameError: '',
            fundsPassword: '',
            fundsPasswordError: '',
            newPassword: '',
            newPasswordError: '',
            confirmPassword: '',
            confirmPasswordError: '',
            userid: '',
        })
    }

    // 输入框监听
    handleInput = (v, name) => {
        if (v !== '' && this.state[name] !== '') {
            this.setState({ 
                [name]: v,
                [`${name}Error`]: '' 
            })
        } else {
            this.setState({ [name]: v })
        }
    }

    // 提交
    submitEvent = () => {
        const { changeSubmit } = this.props;
        const { 
            pageIndex, 
            username, 
            fundsPassword, 
            newPassword, 
            confirmPassword,
            userid,
        } = this.state;
        // 账号验证提交
        if (pageIndex === 1) {
            if (username === '') return this.setState({ usernameError: '请输入账号' });
            if (!checkUserName(username)) return this.setState({ usernameError: '账号不正确' });
            if (fundsPassword === '') return this.setState({ fundsPasswordError: '请输入资金密码' });
            if (!checkPassWord(fundsPassword)) return this.setState({ fundsPasswordError: '资金密码不正确' });
            this.setSubmitBtn()
            const params = {
                username,
                fundpassword: fundsPassword
            };
            this.props.userCheckFundPassword(params, res => {
                changeSubmit(false)
                this.setState({
                    pageIndex: 2,
                    userid: res.userid,
                    submitText: '提交'
                })
            }).catch(err => {
                changeSubmit(false)
                this.setState({ submitText: '登录' })
            })
        } else {
            // 重置密码提交
            if (newPassword === '') return this.setState({ newPasswordError: '请输入新密码' });
            if (!checkPassWord(newPassword)) return this.setState({ newPasswordError: '密码不正确' });
            if (confirmPassword === '') return this.setState({ confirmPasswordError: '再次输入密码' });
            if (!checkPassWord(confirmPassword)) return this.setState({ confirmPasswordError: '密码不正确' });
            if (newPassword !== confirmPassword) return Alert.alert('两次密码不一致');
            this.setSubmitBtn()
            const params = {
                userid,
                password: newPassword,
                repeat_password: confirmPassword, 
            };
            this.props.userFindPassword(params, res => {
                changeSubmit(false)
                this.setState({ submitText: '提交' })
                // 跳回登陆页
                this.props.navigator.push({
                    id: 'Login' 
                })
                Alert.alert('恭喜你，修改密码成功');
            }).catch(err => {
                changeSubmit(false)
                this.setState({ submitText: '登录' })
            })
        }
    }

    // 设置提交按钮状态
    setSubmitBtn = () => {
        this.props.changeSubmit(true)
        this.setState({ submitText: '正在提交...' })
    } 

    // 账号验证
    checkAccount = () => {
        const { usernameError, fundsPasswordError } = this.state;
        return (
            <Fragment>
                <Text style={styles.titletwo}>账号验证</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder="请输入您的账号"
                        maxLength={16}
                        onChangeText={val => this.handleInput(val, 'username')}
                    ></TextInput>
                    <Text style={styles.error}>{usernameError}</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="请输入资金密码"
                        maxLength={16}
                        secureTextEntry
                        onChangeText={val => this.handleInput(val, 'fundsPassword')}
                    ></TextInput>
                <Text style={styles.error}>{fundsPasswordError}</Text>
            </Fragment>
        )
    }

    // 重置密码
    resetPassword = () => {
        const { newPasswordError, confirmPasswordError } = this.state;
        return (
            <Fragment>
                <Text style={styles.titletwo}>重置密码</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder="请输入6-16位数字+字母组合"
                        maxLength={16}
                        secureTextEntry
                        onChangeText={val => this.handleInput(val, 'newPassword')}
                    ></TextInput>
                    <Text style={styles.error}>{newPasswordError}</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="请输入6-16位数字+字母组合"
                        maxLength={16}
                        secureTextEntry
                        onChangeText={val => this.handleInput(val, 'confirmPassword')}
                    ></TextInput>
                <Text style={styles.error}>{confirmPasswordError}</Text>
            </Fragment>
        )
    }

    render() {
        const { pageIndex, submitText } = this.state;
        const { submiting } = this.props;

            return (
                <Container>
                    {__IOS__ ? <Header style={styles.header}>
                        <Left>
                            <Button onPress={this.onBack} style={styles.backBtn}>
                                <Image style={styles.back} source={require('@/assets/dh/images/login/left.png')}/>
                            </Button>
                        </Left>
                        <Body>
                            <Title style={styles.headertitle}>重置密码</Title>
                        </Body>
                        <Right />
                    </Header> : <CommonHeader title="重置密码" onBack={this.onBack}/>
                    }
                    <Content>
                        {/* 账号验证 */}
                        {pageIndex === 1 && this.checkAccount()}
                        {/* 重置密码 */}
                        {pageIndex === 2 && this.resetPassword()}
                        {/* 提交 */}
                        <LodingBtn
                            onPress={this.submitEvent}
                            submiting={submiting}
                            text={submitText}
                        />
                    </Content>
                </Container>
            )
    }

    componentWillUnmount() {
        clearTimeout(this.timer)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5'
    },
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
    },
    titletwo: {
        left: gScreen.width * 0.15,
        height: 20,
        marginTop: 15,
        marginBottom: 10, 
    },
    input: {
        height: 45,
        width: gScreen.width * 0.8,
        marginTop: 5,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 25,
        alignSelf: 'center',
        paddingHorizontal: 20,
    },
    error: {
        textAlign: 'center',
        color: 'red',
        paddingTop: 5
    }
})