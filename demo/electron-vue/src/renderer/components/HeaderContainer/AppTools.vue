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

<style lang="less">
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
        li {
            float: left;
            width: 33.3%;
            height: 38px;
            line-height: 38px;
            text-align: center;
            font-size: 12px;
        }
        input {
            position: relative;
            top: 3px;
            cursor: pointer;
        }
    }
    .app-tools-content {
        box-sizing: border-box;
        width: 100%;
        height: 40px;
        line-height: 34px;
        border-top: 2px solid #333;
        padding-left: 10px;
        span {
            width: 30%;
            height: 40px;
            font-size: 14px;
        }
        input {
            width: 40%;
            height: 18px;
        }
        button {
            width: 40px;
            height: 22px;
            line-height: 16px;
            cursor: pointer;
        }
    }
    
</style>
              