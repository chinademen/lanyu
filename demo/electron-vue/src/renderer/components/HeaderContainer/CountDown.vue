<!-- 倒计时 -->
<template>
    <div class="count-down">
        <span class="count-down-title">据第 <em>181107057</em> 期开奖</span>
        <span class="count-down-content">00:00:30</span>
    </div>
</template>

<script>

    export default {
        name: 'count-down',
        components: {
    
        }
    }
</script>

<style>
    .count-down {
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
        background: rgb(90, 90, 212);
    }
    .count-down-content {
        display: inline-block;
        width: 100%;
        height: 90px;
        line-height: 90px;
        text-align: center;
        color: red;
        font-size: 28px;
        font-weight: bold;
    }
</style>
                      