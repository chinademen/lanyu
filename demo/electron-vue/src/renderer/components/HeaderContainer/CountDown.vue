<!-- 倒计时 -->
<template>
    <div class="count-down">
        <div class="count-down-title">
            <p>
                据第 <span>181107057</span> 期开奖
            </p>    
        </div>
        <div class="count-down-content">
            <div class="time-box">
                <span>0</span>
                <span>0</span>
                <em>:</em>
                <span>0</span>
                <span>0</span>
                <em>:</em>
                <span>3</span>
                <span>0</span>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'count-down',
    }
</script>

<style lang="less">
    .count-down {
        float: left;
        display: inline-block;
        box-sizing: border-box;
        width: 240px;
        height: 120px;
        background: #EDEDED;
        color: #454646;
    }
    .count-down-title {
        position: relative;
        display: inline-block;
        width: 100%;
        height: 35px;
        line-height: 35px;
        font-size: 12px;
        p {
            display: inline-block;
            position: absolute;
            width: 100%;
            height: 20px;
            text-align: center;
            bottom: 0;
        }
    }
    .count-down-content {
        display: inline-block;
        width: 100%;
        height: 85px;
        text-align: center;
        font-weight: bold;
        .time-box {
            width: 100%;
            height: 50px;
            margin: 5px auto;
        }
        span {
            display: inline-block;
            color: #fff;
            width: 30px;
            height: 40px;
            line-height: 40px;
            background: #454646;
            border-radius: 5px;
            font-size: 26px;
        }
    }
</style>
                      