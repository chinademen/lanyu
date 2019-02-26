/**
 * 忘记密码 ---> 验证账号 ---> 重置密码
 */
import React, { Component, Fragment } from 'react'
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,
} from 'react-native'
import {observer, inject} from 'mobx-react/native'
import Header from '@/common/Header'

@inject(({ app, loginStore }) => {
    return {
        app,
        userCheckFundPassword: loginStore.userCheckFundPassword,
        userFindPassword: loginStore.userFindPassword,
    }
})
@observer
export default class ForgetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageIndex: 1, // 1 账号验证, 2 密码重置
            username: '', // 用户名
            usernameError: '', // 用户名输入错误提示
            fundsPassword: '', // 密码
            fundsPasswordError: '', // 资金密码输入错误提示
            newPassword: '', // 新密码
            newPasswordError: '', // 新密码输入错误提示
            confirmPassword: '', // 确认密码
            confirmPasswordError: '', // 确认密码输入错误提示
            userid: '', // 验证资金密码返回的用户id
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
            if (username === '') return this.setState({ usernameError: '请输入用户名' });
            if (fundsPassword === '') return this.setState({ fundsPasswordError: '请输入资金密码' });
            const params = {
                username,
                fundpassword: fundsPassword
            };
            this.props.userCheckFundPassword(params, res => {
                this.setState({
                    pageIndex: 2,
                    userid: res.userid
                })
            })
        } else {
            // 重置密码提交
            if (newPassword === '') return this.setState({ newPasswordError: '请输入新密码' });
            if (confirmPassword === '') return this.setState({ confirmPasswordError: '再次输入密码' });
            if (newPassword !== confirmPassword) return Alert.alert('两次密码不一致');
            const params = {
                userid,
                password: newPassword,
                repeat_password: confirmPassword, 
            };
            this.props.userFindPassword(params, res => {
                Alert.alert('恭喜你，修改密码成功');
                this.timer = setTimeout(() => {
                    // 跳回登陆页
                    this.props.navigator.push({
                        id: 'Login' 
                    })
                }, 1500)
            })
        }
    }

    // 账号验证
    checkAccount = () => {
        const { usernameError, fundsPasswordError } = this.state;
        return (
            <Fragment>
                <Text style={styles.title}>账号验证</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder="请输入您的用户名"
                        maxLength={16}
                        onChangeText={val => this.handleInput(val, 'username')}
                    ></TextInput>
                    <Text style={styles.error}>{usernameError}</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="请输入您的资金密码"
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
                <Text style={styles.title}>重置密码</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder="请输入新密码"
                        maxLength={16}
                        secureTextEntry
                        onChangeText={val => this.handleInput(val, 'newPassword')}
                    ></TextInput>
                    <Text style={styles.error}>{newPasswordError}</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="再次输入密码"
                        maxLength={16}
                        secureTextEntry
                        onChangeText={val => this.handleInput(val, 'confirmPassword')}
                    ></TextInput>
                <Text style={styles.error}>{confirmPasswordError}</Text>
            </Fragment>
        )
    }

    render() {
        const { pageIndex } = this.state;

        return (
            <View style={styles.container}>
                <Header title="重置密码" onBack={this.onBack}/>
                {/* 账号验证 */}
                {pageIndex === 1 && this.checkAccount()}
                {/* 重置密码 */}
                {pageIndex === 2 && this.resetPassword()}
                {/* 提交 */}
                <TouchableOpacity
                        activeOpacity={0.75}
                        style={styles.submitBtn}
                        onPress={this.submitEvent}
                    >
                        <Text style={{fontSize: 16, color: '#fff'}}>提交</Text>
                </TouchableOpacity>
            </View>
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
    title: {
        left: gScreen.width * 0.15,
        height: 20,
        marginTop: 15,
        marginBottom: 10
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
    },
    submitBtn: { // 登陆按钮
        width: gScreen.width * 0.8,
        marginTop: 5,
        height: 45,
        borderRadius: 25,
        backgroundColor: '-webkit-gradient(linear, 0 0, 0 bottom, from(#fb4d7e), to(rgba(255, 77, 79, 1)))!important',
        // boxShadow: '0px 2px 3px #bbbbb8 !important',
        // shadowColor: 'gray',
        // shadowOpacity: 0.3,
        // shadowOffset: {width: 1, height: -1},
        // shadowRadius: 2,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    }
})