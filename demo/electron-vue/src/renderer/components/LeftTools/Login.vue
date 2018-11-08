<!-- 登录框 -->
<template>
    <div class="login">
        <span>选择平台：</span>
        <select>
            <option>东皇娱乐</option>
        </select>
        <span>投注彩种：</span>
        <select>
            <option>重庆时时彩</option>
            <option>天津时时彩</option>
            <option>腾讯分分彩</option>
        </select>
        <span>会员账号：</span>
        <input type="text" />
        <span>会员密码：</span>
        <input type="password" />
        <p class="login-error-info">错误提示</p>
        <div class="login-btn-group">
            <button>隐藏账号</button>
            <button>账号登录</button>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'login',
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
          