<!-- 工具栏 -->
<template>
    <div class="app-tools">
        <ul class="app-tools-title">
            <li>
                <input type="checkbox" @change="toggle('ToggleAppTools')" checked />
                <span>平台信息</span>
            </li>
            <li>
                <input type="checkbox" @change="toggle('TogglePlatAddress')" />
                <span>平台地址</span>
            </li>
            <li>
                <input type="checkbox" @change="toggle('ToggleHistoryNumber')" />
                <span>历史号码</span>
            </li>
            <li>
                <input type="checkbox" />
                <span>声音提示</span>
            </li>
            <li>
                <input type="checkbox" />
                <span>开奖提示</span>
            </li>
            <li>
                <input type="checkbox" />
                <span>关闭托盘</span>
            </li>
        </ul>
        <div class="app-tools-content">
            <span>软件标识：</span>
            <input type="text" />
            <button>修改</button>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'app-tools',
        data() {
            return {

            }
        },
        methods: {
            toggle(actionType) {
                this.$store.dispatch(actionType)
            }
        }
    }
</script>

<style>
    .app-tools {
        float: left;
        display: inline-block;
        width: 240px;
        height: 120px;
        border-right: 2px solid #333;
    }
    .app-tools-title {
        width: 100%;
        height: 80px;
    }
    .app-tools-title li {
        float: left;
        width: 33.3%;
        height: 38px;
        line-height: 38px;
        text-align: center;
        font-size: 12px;
    }
    .app-tools-title input {
        position: relative;
        top: 3px;
    }
    .app-tools-content {
        width: 100%;
        height: 40px;
        line-height: 34px;
        border-top: 2px solid #333;
        padding-left: 10px;
    }
    .app-tools-content span, .app-tools-content span button {
        width: 30%;
        height: 40px;
        font-size: 14px;
    }
    .app-tools-content input {
        width: 40%;
        height: 23px;
    }
</style>
              