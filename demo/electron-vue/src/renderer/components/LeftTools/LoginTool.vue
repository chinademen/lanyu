<!-- 登录框 -->
<template>
    <div class="login">
        <span>选择平台：</span>
        <select v-model="platName">
            <option v-for="item in platList" :value="item.platId">{{item.name}}</option>
        </select>
        <span>投注彩种：</span>
        <select v-model="lotteryType">
            <option v-for="item in lotteryList" :value="item.lotteryId">{{item.name}}</option>
        </select>
        <span>会员账号：</span>
        <input type="text" name="username" @input="username = $event.target.value" />
        <span>会员密码：</span>
        <input type="password" name="password" @input="password = $event.target.value" />
        <p class="login-error-info" v-if="isLoginError">错误提示</p>
        <p class="login-error-info" v-if="!isLoginError">&nbsp;</p>
        <div class="login-btn-group">
            <button>隐藏账号</button>
            <button @click="login">账号登录</button>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        name: 'login-tool',
        data() {
            return {
                platList: [{    // 平台列表
                　　"platId": "dh",
                　　"name": "东皇娱乐"
            　　}],
                platName: '', // 平台名称
                lotteryList: [ // 彩种列表
                {
                    "lotteryId": "cqssc",
                    "name": "重庆时时彩"
                },
                {
                    "lotteryId": "tjssc",
                    "name": "天津时时彩"
                },
                {
                    "lotteryId": "txffc",
                    "name": "腾讯分分彩"
                }],
                lotteryType: '', // 彩种名称
                username: '', // 用户名
                password: '', // 密码
            }
        },
        computed: {
            ...mapState({
                isLoginError: state => state.LoginTool.isLoginError
            })
        },
        methods: {
            // 登陆
            login() {
                const { username, password } = this;
                const params = { username, password };
                this.$store.dispatch('UserLogin', params)
            },
        },
    }
</script>

<style>
    .login {
        width: 100%;
        height: 273px;
        border-bottom: 2px solid #333;
    }
    .login span, .login p, .login div {
        display: inline-block;
        width: 100%;
        padding: 5px 10px;
        font-size: 12px;
        color: #000;
    }
    .login select, .login input {
        display: inline-block;
        width: 216px;
        height: 20px;
        line-height: 20px;
        margin: 0 10px;
        color: #000;
    }
    .login select {
        border-radius: 3px;
        border: 1px solid #333;
        background: rgb(240, 240, 240);
    }
    .login option {
        background: #fff;
    }
    .login p.login-error-info {
        color: red;
    }
    .login-btn-group {
        border-top: 1px solid #333;
    }
    .login-btn-group button {
        margin-left: 26px;
    }
</style>
          