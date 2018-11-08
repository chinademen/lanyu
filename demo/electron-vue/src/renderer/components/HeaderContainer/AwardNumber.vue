<!-- 上期开奖号码 -->
<template>
    <div class="award-number">
        <div class="award-number-title">
            <span>天津时时彩</span> 第 <em>181108003</em> 期开奖号码
        </div>
        <ul class="award-number-content">
            <li>6</li>
            <li>8</li>
            <li>8</li>
            <li>7</li>
            <li>6</li>
        </ul>
    </div>
</template>

<script>

    export default {
        name: 'award-number',
    }
</script>

<style>
    .award-number {
        float: left;
        display: inline-block;
        width: 360px;
        height: 120px;
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
        height: 88px;
        text-align: center;
        color: red;
        font-size: 36px;
        font-weight: bold;
        padding-top: 10px;
        padding-left: 2px;
    }
    .award-number-content li {
        float: left;
        color: #fff;
        background: rgb(250, 0, 0);
        width: 50px;
        height: 50px;
        line-height: 46px;
        margin: 10px;
        border-radius: 50%;
        box-shadow: 0 0 5px 1px black;
    }
</style>
                  