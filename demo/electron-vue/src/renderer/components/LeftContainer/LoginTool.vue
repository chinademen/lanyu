<!-- 登录框 -->
<template>
    <div class="login">
        <div class="no-login" v-if="!islogin">
            <span>会员账号：</span>
            <input type="text" name="username" @input="username = $event.target.value" />
            <span>会员密码：</span>
            <input type="password" name="password" @input="password = $event.target.value" />
            <div class="login-btn-group">
                <button @click="login">账号登录</button>
            </div>
        </div>
        <div class="is-login" v-if="islogin">
            <p>
                <span>当前线路：</span>
                <em>线路1</em>
                <a>811ms</a>
            </p>
            <p>会员账号：<span>{{userInfo.username}}</span></p>
            <p>账户余额：<span>{{userInfo.balance}}</span></p>
            <div class="logout-btn-group">
                <button @click="logout">退出登陆</button>
            </div>
        </div>
        <div class="lottery-select">
            <span>投注彩种：</span>
            <select v-model="lotteryName" @change="toggleLotteryName">
                <option v-for="(item, index) in lotteryList" :value="item.name" :key="item.lotteryId">{{item.name}}</option>
            </select>
        </div>
        <div class="award-number">
            <div class="award-number-title">
                <span>{{lotteryName}}</span> 第 <em>181108003</em> 期开奖号码
            </div>
            <ul class="award-number-content">
                <li>6</li>
                <li>8</li>
                <li>8</li>
                <li>7</li>
                <li>6</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        name: 'login-tool',
        data() {
            return {
                lotteryList: [{ // 彩种列表
                    "lotteryId": "cqssc",
                    "name": "重庆时时彩"
                }, {
                    "lotteryId": "tjssc",
                    "name": "天津时时彩"
                }, {
                    "lotteryId": "txffc",
                    "name": "腾讯分分彩"
                }],
                // lotteryType: 'cqssc', // 彩种类型
                lotteryName: '重庆时时彩', // 彩种名称
                username: '', // 用户名
                password: '', // 密码
            }
        },
        computed: {
            ...mapState({
                islogin: state => state.LoginTool.islogin,
                userInfo: state => state.LoginTool.userInfo,
            })
        },
        methods: {
            // 登陆
            login() {
                const { username, password } = this;
                const params = { username, password };
                this.$store.dispatch('UserLogin', params)
            },
            // 退出登陆
            logout() {
                this.$store.dispatch('UserLogout')
            },
            // 切换彩种
            toggleLotteryName(e) {
             
            }
        },
    }
</script>

<style lang="less">
    .login {
        width: 100%;
        height: 350px;
        border-bottom: 2px solid #333;
        font-weight: bold;
        /* 公用select, input样式 */
        select, input {
            display: inline-block;
            width: 216px;
            height: 20px;
            line-height: 20px;
            margin: 0 10px;
            color: #000;
        }
        select {
            border-radius: 3px;
            border: 1px solid #333;
            background: rgb(240, 240, 240);
            padding: 2px;
        }
        option {
            background: #fff;
        }
        /* 登陆框 */
        .no-login {
            width: 100%;
            height: 152px;
            span, p, div {
                box-sizing: border-box;
                display: inline-block;
                width: 100%;
                padding: 5px 10px;
                font-size: 12px;
                color: #000;
            }
            .login-btn-group {
                text-align: center;
                button {
                    width: 100%;
                    padding: 5px 8px;
                    height: 26px;
                    font-weight: bold;
                    cursor: pointer;
                }
            }
        }
        /* 用户信息 */
        .is-login {
            width: 100%;
            height: 152px;
            p {
                box-sizing: border-box;
                display: inline-block;
                width: 100%;
                padding: 5px 10px;
                font-size: 12px;
                color: #000;
            }
            a {
                color: #0079f5;
                cursor: pointer;
            }
            .logout-btn-group {
                box-sizing: border-box;
                display: inline-block;
                width: 100%;
                padding: 5px 10px;
                text-align: center;
                button {
                    width: 100%;
                    padding: 5px 8px;
                    height: 26px;
                    font-weight: bold;
                    cursor: pointer;
                }
            }
        }
        /* 彩种选择 */
        .lottery-select {
            width: 100%;
            height: 100px;
            span, p, div {
                box-sizing: border-box;
                display: inline-block;
                width: 100%;
                padding: 5px 10px;
                font-size: 12px;
                color: #000;
            }
        }
        /* 上期开奖号码 */
        .award-number {
            display: inline-block;
            width: 100%;
            height: 100px;
            border-right: 2px solid #333;
        }
        .award-number-title {
            display: inline-block;
            width: 100%;
            height: 30px;
            line-height: 30px;
            text-align: center;
            font-size: 12px;
            color: #fff;
            background: rgb(70, 130, 180);
        }
        .award-number-content {
            display: inline-block;
            width: 100%;
            height: 100px;
            text-align: center;
            color: red;
            font-size: 22px;
            font-weight: bold;
            padding-top: 10px;
            padding-left: 2px;
            li {
                float: left;
                color: #fff;
                background: rgb(250, 0, 0);
                width: 26px;
                height: 26px;
                line-height: 26px;
                margin: 10px;
                border-radius: 50%;
                box-shadow: 0 0 5px 1px black;
            }
        }
    }
</style>
              