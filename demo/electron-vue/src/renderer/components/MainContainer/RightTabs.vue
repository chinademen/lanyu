<!-- 右侧选项卡区域 -->
<template>
    <div class="right-tabs">
    <!--
        <ul class="right-tabs-header">
            <li :class="{'right-tabs-active':isActive == index}" 
                :key="index"
                @click="isActive=index"
                v-for="(item, index) in tabsName"
            >{{item.name}}</li>
        </ul>
        <ul class="right-tabs-content">
            <li v-for="(item, index) in tabsName" v-if="isActive == index">
                <component :is="item.componentName" :key="index"></component>
            </li>
        </ul>
    -->
    <cm-tabs :tabsName="tabsName" :componentsArr="componentsArr"></cm-tabs>
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
                isActive: 0,
                tabsName: [
                    { name: '1-欢迎使用', componentName: 'WelcomePage' }, 
                    { name: '2-自动投注', componentName: 'AutoBetting' }, 
                    { name: '3-方案设定', componentName: 'SchemeSetting' }, 
                    { name: '4-参考数据', componentName: 'ReferData' }, 
                    { name: '5-历史统计', componentName: 'HistoryStatic' }, 
                    { name: '6-计划软件', componentName: 'SoftWare' }, 
                    { name: '7-用户必看', componentName: 'UserBook' },
                ],
                componentsArr: [
                    WelcomePage,
                    AutoBetting,
                    SchemeSetting,
                    ReferData,
                    HistoryStatic,
                    SoftWare,
                    UserBook
                ]
            }
        },
        computed: {
            ...mapState({

            })
        },
        methods: {

        }
    }
</script>

<style lang="less">
    .right-tabs {
        position: relative;
        float: left;
        height: 100%;
        width: calc(100% - 242px);
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
        li {
            width: 100%;
            height: 100%;
        }  
    }
</style>
