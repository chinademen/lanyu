<!-- 右侧选项卡区域 -->
<template>
    <div class="right-tabs">
        <ul class="right-tabs-header">
            <!-- <li :class=" v.state ? 'right-tabs-active' : '' " 
                @click="toggleTabs('ToggleTabs', v.state)"
                :key="i"
                v-for="(v, i) in tabsName"
            >{{v.name}}</li> -->
            <li :class=" isShowWelcome ? 'right-tabs-active' : '' " @click="toggleTabs('ToggleTabs', 'isShowWelcome')">1-欢迎使用</li>
            <li :class=" isShowAutoBetting ? 'right-tabs-active' : '' " @click="toggleTabs('ToggleTabs', 'isShowAutoBetting')">2-自动投注</li>
            <li :class=" isShowSchemeSetting ? 'right-tabs-active' : '' " @click="toggleTabs('ToggleTabs', 'isShowSchemeSetting')">3-方案设定</li>
            <li :class=" isShowReferData ? 'right-tabs-active' : '' " @click="toggleTabs('ToggleTabs', 'isShowReferData')">4-参考数据</li>
            <li :class=" isShowHistoryStatic ? 'right-tabs-active' : '' " @click="toggleTabs('ToggleTabs', 'isShowHistoryStatic')">5-历史统计</li>
            <li :class=" isShowSoftware ? 'right-tabs-active' : '' " @click="toggleTabs('ToggleTabs', 'isShowSoftware')">6-计划软件</li>
            <li :class=" isShowUserBook ? 'right-tabs-active' : '' " @click="toggleTabs('ToggleTabs', 'isShowUserBook')">7-用户必看</li>
        </ul>
        <div class="right-tabs-content">
            <Welcome-Page v-if="isShowWelcome"></Welcome-Page>
            <Auto-Betting v-if="isShowAutoBetting"></Auto-Betting>
            <Scheme-Setting v-if="isShowSchemeSetting"></Scheme-Setting>
            <Refer-Data v-if="isShowReferData"></Refer-Data>
            <History-Static v-if="isShowHistoryStatic"></History-Static>
            <Soft-ware v-if="isShowSoftware"></Soft-ware>
            <User-Book v-if="isShowUserBook"></User-Book>
        </div>
    </div>
</template>

<script>
    import WelcomePage from '../RightTabs/WelcomePage';
    import AutoBetting from '../RightTabs/AutoBetting';
    import SchemeSetting from '../RightTabs/SchemeSetting';
    import ReferData from '../RightTabs/ReferData';
    import HistoryStatic from '../RightTabs/HistoryStatic';
    import SoftWare from '../RightTabs/SoftWare';
    import UserBook from '../RightTabs/UserBook';
    import { mapState } from 'vuex';

    export default {
        name: 'right-tabs',
        components: {
            WelcomePage,
            AutoBetting,
            SchemeSetting,
            ReferData,
            HistoryStatic,
            SoftWare,
            UserBook
        },
        data() {
            return {
                tabsName: [
                    { state: 'isShowWelcome', name: '1-欢迎使用' }, 
                    { state: 'isShowAutoBetting', name: '2-自动投注' }, 
                    { state: 'isShowSchemeSetting', name: '3-方案设定' }, 
                    { state: 'isShowReferData', name: '4-参考数据' }, 
                    { state: 'isShowHistoryStatic', name: '5-历史统计' }, 
                    { state: 'isShowSoftware', name: '6-计划软件' }, 
                    { state: 'isShowUserBook', name: '7-用户必看' },
                ]
            }
        },
        computed: {
            ...mapState({
                isShowWelcome: state => state.RightTabs.isShowWelcome,
                isShowAutoBetting: state => state.RightTabs.isShowAutoBetting,
                isShowSchemeSetting: state => state.RightTabs.isShowSchemeSetting,
                isShowReferData: state => state.RightTabs.isShowReferData,
                isShowHistoryStatic: state => state.RightTabs.isShowHistoryStatic,
                isShowSoftware: state => state.RightTabs.isShowSoftware,
                isShowUserBook: state => state.RightTabs.isShowUserBook,
            })
        },
        methods: {
            toggleTabs(actionType, currentTab) {
                this.$store.dispatch(actionType, currentTab)
            }
        }
    }
</script>

<style lang="less">
    .right-tabs {
        position: relative;
        float: left;
        height: 100%;
    }
    .right-tabs-header {
        display: inline-block;
        width: 100%;
        border-bottom: 1px solid #333;
        margin: 0;
        li {
            margin-top: 4px;
            font-size: 12px;
            width: 100px;
            height: 30px;
            line-height: 30px;
            font-weight: bold;
            float: left;
            border: 1px solid #333;
            border-bottom: none;
            text-align: center;
            cursor: pointer;
            &:nth-of-type(1) {
                margin-left: 5px;
            }
        }
    }
    .right-tabs-active {
        background: #fff;
        color: red;
    }
    .right-tabs-content {
        position: absolute;
        width: 100%;
        top: 34px;
        bottom: 0;
        border: 1px solid #333;
        background: #fff;        
    }
</style>
