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
                <span class="plat-address-fwq">服务器</span>
                <span class="plat-address-status">状态</span>
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

<style>
    .plat-address {
        width: 100%;
        height: 160px;
        border-bottom: 1px solid #ddd;
    }
    .plat-address-btngroup {
        height: 35px;
        padding: 4px 2px;
        border-bottom: 1px solid #333;
    }
    .plat-address-btngroup button {
        margin-left: 18px;
    }
    .plat-address-list {
        width: 100%;
        height: 125px; 
        overflow-y: scroll;
        font-size: 12px;
    }
    .plat-address-list li {
        border: 1px solid #b5b5b5;
        border-bottom: none;
    }
    .plat-address-fwq, .plat-address-status {
        color: #fff;
        background: rgb(70, 130, 180);
        float: left;
    }
    .plat-address .plat-address-list .plat-address-status  {
        width: 30%;
    }
    .plat-address-list li span:nth-of-type(1), .plat-address-list li span:nth-of-type(2) {
        display: inline-block;
        height: 30px;
        line-height: 30px;
        text-align: center;
        color: #000;
    }
    .plat-address-list li span:nth-of-type(1) {
        display: inline-block;
        width: 69.9%;
        border-right: 1px solid #b5b5b5;
    }
    .plat-address-list li span:nth-of-type(2) {
        display: inline-block;
        width: 28.6%;
    }
    /* 滚动条样式设置 */
    /*
    .plat-address-list::-webkit-scrollbar {
        border-bottom: 1px solid #ddd;
    }
    .plat-address-list::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);  
        border-radius: 10px;  
        background-color: #c1e2f1;  
    }
    .plat-address-list::-webkit-scrollbar-thumb  
    {  
        border-radius: 10px;  
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);  
        background-color: #1f7ebe;  
        color: #c1e2f1;
    }
    */
</style>
          