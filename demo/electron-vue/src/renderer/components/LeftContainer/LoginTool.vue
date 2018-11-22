<!-- 登录框 -->
<template>
    <div class="login">
        <!-- 登录框 -->
        <div class="no-login" v-if="!islogin">
            <p class="row">
                <span class="col col-3">线路</span>
                <select class="col col-5">
                    <option value="1">线路1</option>
                    <option value="2">线路2</option>
                    <option value="3">线路3</option>
                </select>
                <button class="col col-3" @click="changeLine">最优</button>
            </p>
            <p class="row">
                <span class="col col-3">用户名</span>
                <input class="col col-8" type="text" name="username" @input="username = $event.target.value" />
            </p>
            <p class="row">
                <span class="col col-3">密码</span>
                <input class="col col-8" type="password" name="password" @input="password = $event.target.value" />
            </p>
            <p class="row">
                <span class="col col-3"></span>
                <input class="col col-1" type="checkbox" />
                <span>记住密码</span>
            </p>
            <div class="login-btn-group">
                <button @click="login">账号登录</button>
            </div>
        </div>
        <!-- 用户信息 -->
        <div class="is-login" v-if="islogin">
            <p>
                <span>当前线路：</span>
                <span>线路1</span>
                <a>811ms</a>
            </p>
            <p>
                会员账号：<span>{{userInfo.username}}</span>
            </p>
            <p>
                账户余额：<span>{{userInfo.balance}}</span>
                <span class="icon-loop2 reflash"></span>
            </p>
            <div class="logout-btn-group">
                <button @click="logout">退出登陆</button>
            </div>
        </div>
        <!-- 彩种选择 -->
        <!--
            <div class="lottery-select">
                <select v-model="lotteryType" @change="toggleLotteryName" class="select-lotteryType">
                    <option v-for="(item, index) in lotteryList" :value="item.type" :key="item.type">{{item.name}}</option>
                </select>
            </div>
        -->
        <div class="lottery-select">
            <span class="currentLotteryName">{{lotteryInfo && lotteryInfo.lotteryname}}</span>
            <span class="toggleLotteryList">></span>
            <div class="lotteryList-box">
                <div class="row">
                    <span>高频彩</span>
                    <ul class="lottery-ul">
                        <li class="lottery-item" value="cqssc" @click="toggleLotteryName">重庆时时彩</li>
                        <li class="lottery-item" value="txffc" @click="toggleLotteryName">腾讯分分彩</li>
                        <li class="lottery-item" value="bjpk10" @click="toggleLotteryName">北京PK10</li>
                        <li class="lottery-item" value="bjkl8" @click="toggleLotteryName">北京快乐8</li>
                    </ul>
                    <div class="clearfix"></div>
                </div>
                <div class="row">
                    <span>快3系</span>
                    <ul class="lottery-ul">
                        <li class="lottery-item" value="jsk3" @click="toggleLotteryName">江苏快3</li>
                        <li class="lottery-item" value="ahk3" @click="toggleLotteryName">安徽快3</li>
                    </ul>
                    <div class="clearfix"></div>
                </div>
                <div class="row">
                    <span>11选5</span>
                    <ul class="lottery-ul">
                        <li class="lottery-item" value="gd11x5" @click="toggleLotteryName">广东11选5</li>
                        <li class="lottery-item" value="jx11x5" @click="toggleLotteryName">江西11选5</li>
                        <li class="lottery-item" value="jnd11x5" @click="toggleLotteryName">加拿大11选5</li>
                    </ul>
                    <div class="clearfix"></div>
                </div>
                <div class="row">
                    <span>30秒系</span>
                    <ul class="lottery-ul">
                        <li class="lottery-item" value="dccq30s" @click="toggleLotteryName">多彩重庆30秒</li>
                        <li class="lottery-item" value="dctx30s" @click="toggleLotteryName">多彩腾讯30秒</li>
                        <li class="lottery-item" value="jnd30s" @click="toggleLotteryName">加拿大30秒</li>
                    </ul>
                    <div class="clearfix"></div>
                </div>
                <div class="row">
                    <span>低频彩</span>
                    <ul class="lottery-ul">
                        <li class="lottery-item" value="pl5" @click="toggleLotteryName">排列5</li>
                        <li class="lottery-item" value="fc3d" @click="toggleLotteryName">福彩3D</li>
                        <li class="lottery-item" value="pl3" @click="toggleLotteryName">排列3</li>
                    </ul>
                    <div class="clearfix"></div>
                </div>
            </div>
        </div>
        <!-- 上期开奖号码 -->
        <div class="award-number">
            <div class="award-number-title">
                第 <em>{{lotteryInfo && lotteryInfo.awardperiod || 0}}</em> 期开奖号码
            </div>
            <ul class="award-number-content">
                <li v-for="(number, index) in lotteryInfo && lotteryInfo.lastnumber.split('|')"
                    :key="index"
                    :class="setBallsClass(lotteryInfo.lastnumber)"
                >
                    {{number}}
                </li>
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
                lotteryType: 'cqssc', // 彩种类型
                lotteryname: '重庆时时彩', // 彩种名称
                username: '', // 用户名
                password: '', // 密码
            }
        },
        created() {
            // 获取彩种列表
            this.$store.dispatch('getLotteryList');
            // 初始化当前彩种
            this.$store.dispatch('ChangeLotteryType', { type: this.lotteryType });
        },
        computed: {
            ...mapState({
                islogin: state => state.LoginTool.islogin,
                userInfo: state => state.LoginTool.userInfo,
                lotteryList: state => state.LoginTool.lotteryList,
                lotteryInfo: state => state.LoginTool.lotteryInfo,
            })
        },
        methods: {
            // 设置号码球样式
            setBallsClass (num) {
                let len = num.split('|').length;
                let cls = len <= 5 ? 'balls-5' : len <= 10 ? 'balls-10' : 'balls-20';
                return cls;
            },
            // 切换最优线路
            changeLine () {
                alert('功能开发中...')
            },
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
                // console.log(e.target.getAttribute('value'));
                this.$store.dispatch('ChangeLotteryType', { type: e.target.getAttribute('value') })
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
        .select-lotteryType {
            position: absolute;
            height: 40px;
            border: none;
            font-size: 30px;
            margin: 30px 40px;
            cursor: pointer;
            background: #fff;
        }
        .is-login, .award-number {
            select, input {
                display: inline-block;
                width: 230px;
                height: 20px;
                line-height: 20px;
                margin: 0 10px;
                color: #000;
            }
            select {
                padding: 2px;
            }
            .reflash {
                float: right;
                cursor: pointer;
            }
        }
        select {
            border-radius: 3px;
            border: 1px solid #333;
            background: rgb(240, 240, 240);
        }
        option {
            background: #fff;
        }
        /* 登陆框 */
        .no-login {
            width: 100%;
            height: 152px;
            p, div {
                box-sizing: border-box;
                display: inline-block;
                width: 100%;
                padding: 8px 10px;
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
                padding: 8px 10px;
                font-size: 14px;
                color: #000;
            }
            a {
                margin-left: 10px;
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
            position: relative;
            width: 100%;
            height: 100px;
            p, div {
                box-sizing: border-box;
                display: inline-block;
                width: 100%;
                padding: 5px 10px;
                font-size: 12px;
                color: #000;
            }
            .currentLotteryName {
                display: inline-block;
                width: 160px;
                height: 30px;
                line-height: 30px;
                font-size: 26px;
                font-weight: bold;
                text-align: center;
                margin-top: 35px;
                margin-left: 33px;
            }
            .toggleLotteryList {
                position: absolute;
                display: inline-block;
                top: 34px;
                border-radius: 50%;
                text-align: center;
                width: 30px;
                height: 30px;
                line-height: 30px;
                background: #333;
                color: #fff;
                font-size: 18px;
                cursor: pointer;
                &:hover {
                    & + .lotteryList-box {
                        display: block;
                    }
                }
            }
            .lotteryList-box {
                position: absolute;
                display: none;
                top: 50px;
                left: 215px;
                width: 600px;
                background: #333;
                font-size: 12px;
                z-index: 999;
                border-radius: 5px;
                padding: 15px 30px;
                &:hover {
                    display: block;
                }
                .row {
                    position: relative;
                }
                .lottery-ul {
                    float: left;
                    width: 410px;
                }
                li {
                    display: inline-block;
                    box-sizing: border-box;
                    width: 80px;
                    height: 30px;
                    text-align: center;
                    line-height: 30px;
                    margin: 5px 15px 10px 0;
                }
                span {
                    display: inline-block;
                    float: left;
                    padding: 5px;
                    color: #fff;
                    font-size: 20px;
                    width: 100px;
                }
                .lottery-item {
                    background: #ddd;
                    border-radius: 5px;
                    color: #3385ff;
                    cursor: pointer;
                    &:hover {
                        background: #3385ff;
                        color: #fff;
                    }
                }
            }
        }
        /* 上期开奖号码 */
        .award-number {
            box-sizing: border-box;
            display: inline-block;
            width: 100%;
            height: 100px;
            border-right: 2px solid #333;
        }
        .award-number-title {
            box-sizing: border-box;
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
            box-sizing: border-box;
            display: inline-block;
            width: 100%;
            height: 70px;
            text-align: center;
            color: red;
            font-size: 22px;
            font-weight: bold;
            padding-top: 8px;
            padding-left: 2px;
            li {
                float: left;
                color: #fff;
                background: rgb(250, 0, 0);
                border-radius: 50%;
                box-shadow: 0 0 5px 1px black;
            }
            /* 小于等于5个号码 */
            .balls-5 {    
                width: 28px;
                height: 28px;
                line-height: 28px;
                margin: 10px;
            }
            /* 小于等于10个号码 */
            .balls-10, .balls-20 {
                width: 17px;
                height: 17px;
                line-height: 17px;
                margin: 4px;
                margin-top: 15px;
                font-size: 10px;
            }
            /* 小于等于20个号码 */
            .balls-20 {
                margin-top: 5px;
            }
        }
    }
</style>
              