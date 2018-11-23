<!-- 历史号码 -->
<template>
    <div class="history-number">
        <p class="history-number-title">近期开奖</p>
        <div class="history-number-column">
            <span id="history-number-fwq">期号</span>
            <span id="history-number-status">开奖号码</span>
        </div>
       
        <ul class="history-number-list">
            
            <li>
                <span>713705</span>
                <span>1,6,3,2,5,10,8,9,7,4</span>
            </li>
            <li>
                <span>713706</span>
                <span>6,3,2,5,10,8,9,7,4,2</span>
            </li>
            <li>
                <span>713707</span>
                <span>2,8,3,2,5,0,8,9,7,4</span>
            </li>
            <li>
                <span>713708</span>
                <span>5,6,1,2,5,10,8,6,7,4</span>
            </li>
            <li>
                <span>713709</span>
                <span>6,6,3,2,6,10,8,9,7,4</span>
            </li>
        </ul>
    </div>
</template>

<script>

    export default {
        name: 'history-number',
    }
</script>

<style lang="less">
    .history-number {
        position: relative;
        width: 100%;
        height: calc(100% - 352px);
        border-bottom: 1px solid #ddd;
    }
    .history-number-title {
        height: 20px;
        padding: 10px;
        background: #EEE;
        color: #000;
        text-align: center;
    }
    .history-number-column {
        height: 30px;
        font-size: 12px;
        #history-number-fwq, #history-number-status {
            display: inline-block;
            height: 30px;
            line-height: 30px;
            text-align: center;
        }
        #history-number-fwq {
            width: 45.6%;
            border-right: 1px solid #b5b5b5;
        }
        #history-number-status  {
            width: 49%;
        }
    }
    .history-number-list {
        position: absolute;
        top: 70px;
        bottom: 0;
        width: 100%;
        overflow-y: scroll;
        font-size: 12px;
        li {
            border: 1px solid #b5b5b5;
            border-bottom: none;
            &:nth-of-type(odd) {
                background:  #FFF3EC;
            }
            span {
                &:nth-of-type(1), &:nth-of-type(2) {
                    display: inline-block;
                    height: 30px;
                    line-height: 30px;
                    text-align: center;
                    color: #000;
                }
                &:nth-of-type(1) {
                    display: inline-block;
                    width: 49%;
                    border-right: 1px solid #b5b5b5;
                }
                &:nth-of-type(2) {
                    display: inline-block;
                    width: 49%;
                }
            }
            &:last-of-type {
                border-bottom: 1px solid #b5b5b5;
            }
        }
    }
</style>
