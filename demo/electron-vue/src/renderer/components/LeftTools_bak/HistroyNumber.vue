<!-- 历史号码 -->
<template>
    <div class="history-number">
        <ul class="history-number-list">
            <li>
                <span id="history-number-fwq">开奖期号</span>
                <span id="history-number-status">号码</span>
            </li>
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
        width: 100%;
        border-bottom: 1px solid #ddd;
    }
    .history-number-list {
        width: 100%;
        // height: 108px;
        // height: calc(100%);
        height: attr(plat-address);
        overflow-y: scroll;
        font-size: 12px;
        li {
            border: 1px solid #b5b5b5;
            border-bottom: none;
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
                    width: 28.3%;
                    border-right: 1px solid #b5b5b5;
                }
                &:nth-of-type(2) {
                    display: inline-block;
                    width: 69.9%;
                }
            }
            
        }
        #history-number-fwq, #history-number-status {
            color: #fff;
            background: rgb(70, 130, 180);
            float: left;
        }
        #history-number-status  {
            width: 71.2%;
        }
    }
</style>
