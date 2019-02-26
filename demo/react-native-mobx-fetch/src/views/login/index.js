/**
 * 登陆
 */
import React, { PureComponent } from 'react'
import {
    StyleSheet,
    View,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,
} from 'react-native'
import {observer, inject} from 'mobx-react/native'
import CheckBox from 'react-native-check-box'

@inject(({ app, loginStore }) => {
    return {
        app,
        userLogin: loginStore.userLogin,
    }
})
@observer
export default class Login extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            username: '', // 用户名
            password: '', // 密码
            usernameError: '', // 用户名输入错误提示
            passwordError: '', // 密码输入错误提示
            isChecked: false, // 忘记密码
        }
    }

    componentWillMount() {
        const { app } = this.props;
        app.barStyle === 'light-content' && app.updateBarStyle('default')
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

    // 忘记密码
    rememberPassword = () => {
        this.setState({
            isChecked: !this.state.isChecked
        })
    }

    // 忘记密码
    forgetPassword = () => {
        // 跳转验证账号页
        this.props.navigator.push({
            id: 'forgetPassword'
        })
    }

    // 登陆
    loginEvent = () => {
        // alert(JSON.stringify(this.state))
        const { username, password } = this.state;
        if (username === '') return this.setState({ usernameError: '请输入用户名' });
        if (password === '') return this.setState({ passwordError: '请输入密码' });
        const params = {
            username,
            password,
        };
        this.props.userLogin(params, res => {
            storage.set('token', res.token)
            this.saveUserInfo()
            // 跳转主页
            // this.props.navigator.push({
            //     id: 'TabBarView',
            //     // passProps: {feed}
            // })
        })
    }

    // 判断是否需要保存用户名密码
    saveUserInfo() {
        const { username, password, isChecked } = this.state;
        // 保存
        
        if (isChecked) {
            alert(1)
            storage.set('userInfo', {
                username,
                password
            })
        } else {
            alert(2)
            storage.remove('userInfo')
        }
        this.getUser()
    }

    async getUser() {
        const a = await storage.get('userInfo');
        alert(JSON.stringify(a))
    }

    render() {
        const { usernameError, passwordError, isChecked } = this.state;

        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <Image  
                        style={styles.logo}
                        source={require('@/assets/images/logo.png')}
                    />
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
                        placeholder="请输入您的密码"
                        maxLength={16}
                        secureTextEntry
                        onChangeText={val => this.handleInput(val, 'password')}
                    ></TextInput>
                    <Text style={styles.error}>{passwordError}</Text>
                    <View style={styles.checkboxContainer}>
                        <CheckBox
                            style={styles.checkBox}
                            onClick={this.rememberPassword}
                            isChecked={isChecked}
                            rightText={"记住密码"}
                        />
                        <Text style={styles.forgetPassword} onPress={this.forgetPassword}>忘记密码？</Text>
                    </View>
                    <TouchableOpacity
                        activeOpacity={0.75}
                        style={styles.loginBtn}
                        onPress={this.loginEvent}
                    >
                        <Text style={{fontSize: 16, color: '#fff'}}>登录</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{textAlign: 'center', bottom: 60 }}>Copyright @ 东皇娱乐 版权所有</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: { // 容器
        flex: 1, 
        backgroundColor: '#f5f5f5'
    }, 
    content: { // 盒子
        // paddingTop: 50
        height: gScreen.height * 1
    },
    logo: { // logo
        width: 100,
        height: 100,
        alignSelf: 'center',
        marginTop: 80,
        marginBottom: 40,
    },
    input: { // 输入框
        height: 50,
        width: gScreen.width * 0.8,
        marginTop: 10,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 25,
        alignSelf: 'center', // 自身居中
        paddingHorizontal: 20, // paddingLeft + paddingRight
    },
    error: { // 用户名/密码 输入错误提示
        textAlign: 'center',
        color: 'red',
        paddingTop: 10
    },
    checkboxContainer: { // 忘记密码/记住密码 外层
        flexDirection: 'row',
    },
    checkBox: { // 记住密码
        left: gScreen.width * 0.1,
        width: gScreen.width * 0.7,
    },
    forgetPassword: { // 忘记密码
        textDecorationLine:'underline'
    },
    loginBtn: { // 登陆按钮
        width: gScreen.width * 0.8,
        marginTop: 10,
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