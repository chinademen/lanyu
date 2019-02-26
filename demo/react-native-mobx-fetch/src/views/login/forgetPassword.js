/**
 * 忘记密码 ---> 验证账号 ---> 重置密码
 */
import React, { Component } from 'react'
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
        userLogin: loginStore.userLogin,
    }
})
@observer
export default class ForgetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '', // 用户名
            usernameError: '', // 用户名输入错误提示
            fundsPassword: '', // 密码
            fundsPasswordError: '', // 资金密码输入错误提示
            newPassword: '', // 新密码
            newPasswordError: '', // 新密码输入错误提示
            confirmPassword: '', // 确认密码
            confirmPasswordError: '', // 确认密码输入错误提示
        }
    }

    // 返回上一页
    onBack = () => {
        const { navigator, onResetBarStyle } = this.props
        onResetBarStyle && onResetBarStyle()
        navigator.pop()
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
        const { username, fundsPassword } = this.state;
        if (username === '') return this.setState({ usernameError: '请输入用户名' });
        if (fundsPassword === '') return this.setState({ fundsPasswordError: '请输入密码' });
    }

    render() {
        const { usernameError, fundsPasswordError } = this.state;

        return (
            <View style={styles.container}>
                <Header title="密码重置" onBack={this.onBack}/>
                {/* 账号验证 */}
                <Text style={styles.title}>账号验证</Text>
                <TextInput 
                    style={styles.input} 
                    placeholder="请输入您的用户名"
                    // autoFocus={true}
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
                {/* 重置密码 */}
                {/* 提交 */}
                <TouchableOpacity
                        activeOpacity={0.75}
                        style={styles.submitBtn}
                        onPress={this.submitEvent}
                    >
                        <Text style={{fontSize: 16, color: '#fff'}}>登录</Text>
                </TouchableOpacity>
            </View>
        )
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
        height: 50,
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
        height: 50,
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