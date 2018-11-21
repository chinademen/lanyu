<!-- 平台地址 -->
<template>
    <div class="plat-address">
        <div class="plat-address-btngroup">
            <button class="plat-address-update">更新线路</button>
            <button class="plat-address-add">添加</button>
            <button class="plat-address-delet">删除</button>
        </div>
        <ul class="plat-address-list">
            <li>
                <span id="plat-address-fwq">服务器</span>
                <span id="plat-address-status">状态</span>
            </li>
            <li>
                <span>https://baidu.com</span>
                <span>正常</span>
            </li>
            <li>
                <span>https://google.com</span>
                <span>正常</span>
            </li>
            <li>
                <span>https://xxxxxx.com</span>
                <span>正常</span>
            </li>
            <li>
                <span>https://xxxxxx.com</span>
                <span>正常</span>
            </li>
            <li>
                <span>https://xxxxxx.com</span>
                <span>正常</span>
            </li>
        </ul>
    </div>
</template>

<script>

    export default {
        name: 'plat-address',
    }
</script>

<style lang="less">
    .plat-address {
        width: 100%;
        height: 160px;
        border-bottom: 1px solid #ddd;
    }
    .plat-address-btngroup {
        display: flex;
        justify-content: space-around;
        height: 28px;
        padding: 4px 2px;
        border-bottom: 1px solid #333;
        button {
            padding: 5px 8px;
            height: 26px;
            font-weight: bold;
            cursor: pointer;
        }
    }
    .plat-address-list {
        width: 100%;
        height: 125px; 
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
                    width: 69.5%;
                    border-right: 1px solid #b5b5b5;
                }
                &:nth-of-type(2) {
                    display: inline-block;
                    width: 28.6%;
                }
            }
        }
    }
    #plat-address-fwq, #plat-address-status {
        color: #fff;
        background: rgb(70, 130, 180);
        float: left;
    }
    #plat-address-status  {
        width: 30%;
    }
   
    /* 滚动条样式设置 */
    /*
    滚动槽
    ::-webkit-scrollbar-track {    
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);   
        border-radius: 10px;
    }
    滚动条滑块
    ::-webkit-scrollbar-thumb {    
        border-radius: 10px;    
        background: #bbb;    
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5);
    }
    激活滚动条样式
    ::-webkit-scrollbar-thumb:window-inactive {    
        /* background: rgba(255,0,0,0.4);
    }
    */
</style>
          