/**
 * 忘记密码 ---> 验证账号 ---> 重置密码
 */
import React, { Component, Fragment } from 'react'
import {
    StyleSheet,
    TextInput,
    Alert,
} from 'react-native'
import { Container, Content, Text } from 'native-base'
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
            submitText: i18n.FORGET_SUBMIT_BTN,         // 提交 | 正在提交...
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
            if (username === '') return this.setState({ usernameError: i18n.LOGIN_INPUT_ACCOUNT });
            if (!checkUserName(username)) return this.setState({ usernameError: i18n.LOGIN_INCORRECT_ACCOUNT });
            if (fundsPassword === '') return this.setState({ fundsPasswordError: i18n.LOGIN_INPUT_PASSWORD });
            if (!checkPassWord(fundsPassword)) return this.setState({ fundsPasswordError: i18n.FORGET_INCORRECT_FUNDS_PASSWORD });
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
            if (newPassword === '') return this.setState({ newPasswordError: i18n.FORGET_INPUT_NEW_PASSWORD });
            if (!checkPassWord(newPassword)) return this.setState({ newPasswordError: i18n.LOGIN_INCORRECT_PASSWORD });
            if (confirmPassword === '') return this.setState({ confirmPasswordError: i18n.FORGET_AGAIN_INPUT_PASSWORD });
            if (!checkPassWord(confirmPassword)) return this.setState({ confirmPasswordError: i18n.LOGIN_INCORRECT_PASSWORD });
            if (newPassword !== confirmPassword) return Alert.alert(i18n.FORGET_TWO_PASSWORD_DIFFERENT);
            this.setSubmitBtn()
            const params = {
                userid,
                password: newPassword,
                repeat_password: confirmPassword, 
            };
            this.props.userFindPassword(params, res => {
                changeSubmit(false)
                this.setState({ submitText: i18n.FORGET_SUBMIT_BTN })
                // 跳回登陆页
                this.props.navigator.push({
                    id: 'Login' 
                })
                Alert.alert(i18n.FORGET_PASSWORD_UPDATEED);
            }).catch(err => {
                changeSubmit(false)
                this.setState({ submitText: i18n.LOGIN_LOGIN_BTN })
            })
        }
    }

    // 设置提交按钮状态
    setSubmitBtn = () => {
        this.props.changeSubmit(true)
        this.setState({ submitText: i18n.FORGET_SUBMITING_BTN })
    } 

    // 账号验证
    checkAccount = () => {
        const { usernameError, fundsPasswordError } = this.state;
        return (
            <Fragment>
                <Text style={styles.titletwo}>{i18n.FORGET_ACCOUNT_CHECK}</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder={i18n.LOGIN_INPUT_ACCOUNT}
                        maxLength={16}
                        onChangeText={val => this.handleInput(val, 'username')}
                    ></TextInput>
                    <Text style={styles.error}>{usernameError}</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder={i18n.FORGET_INPUT_FUNDS_PASSWORD}
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
                <Text style={styles.titletwo}>{i18n.FORGET_RESET_PASSWORD}</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder={i18n.FORGET_CHECK_NUMBER_LETTER}
                        maxLength={16}
                        secureTextEntry
                        onChangeText={val => this.handleInput(val, 'newPassword')}
                    ></TextInput>
                    <Text style={styles.error}>{newPasswordError}</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder={i18n.FORGET_CHECK_NUMBER_LETTER}
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
                <CommonHeader title={i18n.FORGET_RESET_PASSWORD} onBack={this.onBack}/>
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
        width: scaleSize(14),
        height: scaleSize(14)
    },
    headertitle: {
        color: '#fff',
        textAlign: 'center',
    },
    titletwo: {
        left: gScreen.width * 0.15,
        height: scaleSize(20),
        marginTop: scaleSize(15),
        marginBottom: scaleSize(10), 
    },
    input: {
        height: scaleSize(45),
        width: gScreen.width * 0.8,
        marginTop: scaleSize(5),
        borderColor: '#c0bebc',
        borderWidth: scaleSize(1),
        borderRadius: scaleSize(22.5),
        overflow: 'hidden',
        alignSelf: 'center',
        paddingHorizontal: scaleSize(20),
    },
    error: {
        textAlign: 'center',
        color: 'red',
        paddingTop: scaleSize(5)
    }
})