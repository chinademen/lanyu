/**
 * 忘记密码 ---> 验证账号 ---> 重置密码
 */
import React, { PureComponent } from 'react'
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,
} from 'react-native'
import {observer, inject} from 'mobx-react/native'

@inject(({ app, loginStore }) => {
    return {
        app,
        userLogin: loginStore.userLogin,
    }
})
@observer
export default class ForgetPassword extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            username: '', // 用户名
            fundsPassword: '', // 密码
            newPassword: '', // 新密码
            confirmPassword: '', // 确认密码
            usernameError: '', // 用户名输入错误提示
            passwordError: '', // 密码输入错误提示
            isChecked: false, // 忘记密码
        }
    }
    render() {
        return (
            <View style={styles.container}>
                
                {/* 账号验证 */}
                <Text>账号验证</Text>
                <TextInput 
                    style={styles.input} 
                    placeholder="请输入您的用户名"
                    // autoFocus={true}
                    maxLength={16}
                    onChangeText={this.usernameChange}
                ></TextInput>
                <Text style={styles.error}>{usernameError}</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="请输入您的密码"
                    maxLength={16}
                    secureTextEntry
                    onChangeText={this.passwordChange}
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
                {/* 重置密码 */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#f5f5f5'
    },
    input: {
        height: 40,
        width: gScreen.width * 0.8,
        marginTop: 10,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 20,
        alignSelf: 'center',
        paddingHorizontal: 20,
    },
    error: {
        textAlign: 'center',
        color: 'red',
        paddingTop: 10
    },
    loginBtn: { // 登陆按钮
        width: gScreen.width * 0.8,
        marginTop: 10,
        height: 40,
        borderRadius: 20,
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