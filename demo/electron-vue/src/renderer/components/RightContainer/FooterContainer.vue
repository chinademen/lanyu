<template>
    <div class="footer-container">
        <span>投注记录显示数量：</span>
        <input type="number" /> 条
        <span>当前登录人数：<em>3556</em></span>
    </div>
</template>

<script>

    export default {
        name: 'footer-container',
    }
</script>

<style lang="less">
    .footer-container {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 30px;
        border: 2px solid #333;
        background: rgb(240, 240, 240);
        font-size: 12px;
        span {
            display: inline-block;
            height: 30px;
            line-height: 30px;
            &:nth-of-type(1) {
                padding: 0 5px;
            }
            &:nth-of-type(2) {
                position: absolute;
                right: 15px;
            }
        }
        em {
            color: rgb(70, 130, 180);
        }
        input[type="number"] {
            width: 50px;
        }
    }
</style>
  