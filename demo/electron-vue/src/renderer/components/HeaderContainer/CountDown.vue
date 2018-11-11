<!-- 倒计时 -->
<template>
    <div class="count-down">
        <div class="count-down-title">据第 <span>181107057</span> 期开奖</div>
        <div class="count-down-content">00:00:30</div>
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
        width: 240px;
        height: 120px;
        border-right: 2px solid #333;
    }
    .count-down-title {
        display: inline-block;
        width: 100%;
        height: 30px;
        line-height: 30px;
        text-align: center;
        font-size: 12px;
        color: #fff;
        background: rgb(70, 130, 180);
    }
    .count-down-content {
        display: inline-block;
        width: 100%;
        height: 88px;
        line-height: 88px;
        text-align: center;
        color: rgb(250, 0, 0);
        font-size: 40px;
        font-weight: bold;
    }
</style>
                      