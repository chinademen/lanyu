/**
 * 登陆
 */
import React, { PureComponent } from 'react'
import {
    StyleSheet,
    View,
    Image,
    TextInput,
    ImageBackground,
    Text,
} from 'react-native'
import {observer, inject} from 'mobx-react/native'
import CheckBox from 'react-native-check-box'
import LodingBtn from '@/components/LodingBtn'
import { checkUserName, checkPassWord } from '@/util/filter'

@inject(({ app, loginStore }) => {
    return {
        barStyle: app.barStyle,
        updateBarStyle: app.updateBarStyle,
        submiting: app.submiting,
        changeSubmit: app.changeSubmit,
        setToken: app.setToken,
        userLogin: loginStore.userLogin,
    }
})
@observer
export default class Login extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            username: '',       // 用户名
            password: '',       // 密码
            usernameError: '',  // 用户名输入错误提示
            passwordError: '',  // 密码输入错误提示
            isChecked: false,   // 记住密码
            loginText: i18n.LOGIN_LOGIN_BTN,  // 登录 | 登录中...
        }
    }

    componentWillMount() {
        const { barStyle, updateBarStyle } = this.props;
        barStyle === 'light-content' && updateBarStyle('default');
        this.getIsChecked();
    }

    // 初始化是否记住密码
    async getIsChecked() {
        let isChecked = await storage.get('isChecked');
        this.setState({ isChecked });
        if (isChecked) {
            this.getUserInfo()
        }
    }

    // 自动填写用户名密码
    async getUserInfo() {
        let userInfo = await storage.get('userInfo');
        const { username, password } = userInfo;
        if (username && password) {
            this.setState({
                username,
                password
            })
        }
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

    // 记住密码
    rememberPassword = () => {
        this.setState({
            isChecked: !this.state.isChecked
        })
    }

    // 忘记密码
    forgetPassword = () => {
        this.setState({
            username: '',
            password: '', 
            usernameError: '',
            passwordError: ''
        });
        // 跳转验证账号页
        this.props.navigator.push({
            id: 'ForgetPassword'
        })
    }

    // 登陆
    loginEvent = () => {
        const { setToken, changeSubmit } = this.props;
        const { username, password } = this.state;
        if (username === '') return this.setState({ usernameError: i18n.LOGIN_INPUT_ACCOUNT });
        if (!checkUserName(username)) return this.setState({ usernameError: i18n.LOGIN_INCORRECT_ACCOUNT });
        if (password === '') return this.setState({ passwordError: i18n.LOGIN_INPUT_PASSWORD });
        if (!checkPassWord(password)) return this.setState({ passwordError: i18n.LOGIN_INCORRECT_PASSWORD });
        const params = {
            username,
            password,
        };
        changeSubmit(true)
        this.setState({ loginText: i18n.LOGIN_LOGINING_BTN })
        this.props.userLogin(params, res => {
            // 保存token
            setToken(res.token)
            storage.set('token', res.token)
            this.saveUserInfo()
            changeSubmit(false)
            this.setState({ loginText: i18n.LOGIN_LOGIN_BTN })
            // 跳转主页
            this.props.navigator.replace({
                id: 'TabBarView',
            })
        }).catch(err => {
            changeSubmit(false)
            this.setState({ loginText: i18n.LOGIN_LOGIN_BTN })
        })
    }

    // 判断是否需要保存用户名密码
    saveUserInfo() {
        const { username, password, isChecked } = this.state;
        // 保存用户名密码
        if (isChecked) {
            storage.set('isChecked', true)
            storage.set('userInfo', {
                username,
                password
            })
        } else {
            storage.set('isChecked', false)
            this.removeUser()
        }
    }

    // 移除用户名密码
    async removeUser() {
        const res = await storage.remove('userInfo');
    }

    render() {
        const { submiting } = this.props;
        const { username, password, usernameError, passwordError, isChecked, loginText } = this.state;
        const platStyle = {
            content: {
                paddingTop: iphoneX ? 64 : 0,
            },
            checkBox: {
                width: __IOS__ ? gScreen.width * 0.6 : gScreen.width * 0.7,
            },
            forgetPassword: {
                left: __IOS__ ? 20 : 6,
            }
        };

        return (
            <ImageBackground
                source={require('@/assets/dh/images/login/loginbg.png')}
                style={styles.container}
            >
                <View style={[styles.content, platStyle.content]}>
                    <Image  
                        style={styles.logo}
                        source={require('@/assets/dh/images/login/logo.png')}
                    />
                    <TextInput 
                        style={styles.input} 
                        placeholder="请输入您的账号"
                        maxLength={16}
                        onChangeText={val => this.handleInput(val, 'username')}
                        value={username}
                    ></TextInput>
                    <Text style={styles.error}>{usernameError}</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="请输入您的密码"
                        maxLength={16}
                        secureTextEntry
                        onChangeText={val => this.handleInput(val, 'password')}
                        value={password}
                    ></TextInput>
                    <Text style={styles.error}>{passwordError}</Text>
                    <View style={styles.checkboxContainer}>
                        <CheckBox
                            style={[styles.checkBox, platStyle.checkBox]}
                            onClick={this.rememberPassword}
                            isChecked={isChecked}
                            rightText={i18n.LOGIN_REMEMBER_PASSWORD}
                        />
                        <Text style={[styles.forgetPassword, platStyle.forgetPassword]} onPress={this.forgetPassword}>{i18n.LOGIN_FORGET_PASSWORD}</Text>
                    </View>
                    <LodingBtn
                        onPress={this.loginEvent}
                        submiting={submiting}
                        text={loginText}
                    />
                </View>
                <Text style={{ textAlign: 'center', bottom: 60 }}>{i18n.LOGIN_DONGHUANG_FOOTER}</Text>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: { // 容器
        flex: 1,
    }, 
    content: { // 盒子
        height: gScreen.height * 1,
    },
    logo: { // logo
        width: scaleSize(100),
        height: scaleSize(100),
        alignSelf: 'center',
        marginTop: scaleSize(80),
        marginBottom: scaleSize(40),
    },
    input: { // 输入框
        height: scaleSize(45),
        width: gScreen.width * 0.8,
        marginTop: scaleSize(5),
        borderColor: '#c0bebc',
        borderWidth: scaleSize(1),
        borderRadius: scaleSize(22.5),
        overflow: 'hidden',
        alignSelf: 'center', // 自身居中
        paddingHorizontal: scaleSize(20), // paddingLeft + paddingRight
    },
    error: { // 用户名/密码 输入错误提示
        textAlign: 'center',
        color: 'red',
        paddingTop: scaleSize(5)
    },
    checkboxContainer: { // 忘记密码/记住密码 外层
        flexDirection: 'row',
        marginBottom: scaleSize(10),
    },
    checkBox: { // 记住密码
        left: gScreen.width * 0.1,
        marginTop: 0,
    },
    forgetPassword: { // 忘记密码
        textDecorationLine:'underline',
        marginTop: scaleSize(4),
    },
})

    