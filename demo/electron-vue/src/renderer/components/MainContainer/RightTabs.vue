<!-- 右侧选项卡区域 -->
<template>
    <div class="right-tabs">
        <ul class="right-tabs-header">
            <li :class="{'right-tabs-active':isActive == index}" 
                :key="index"
                @click="isActive=index"
                v-for="(item, index) in tabsName"
            >{{item.name}}</li>
            <span class="instructions" @click="instructions">使用说明</span>
        </ul>
        <ul class="right-tabs-content" v-if="islogin">
            <li v-for="(item, index) in tabsName" :key="index" v-if="isActive == index">
                <component :is="item.componentName" :key="index"></component>
            </li>
        </ul>
         <div class="user-nologin" v-if="!islogin">
            请登陆后再使用该功能！
        </div>
    </div>
</template>

<script>
    import UserBook from '../RightTabs/UserBook';
    import AutoBetting from '../RightTabs/AutoBetting';
    import SchemeManager from '../RightTabs/SchemeManager';
    import CustomScheme from '../RightTabs/CustomScheme';
    import PlanScheme from '../RightTabs/PlanScheme';
    import HistoryStatic from '../RightTabs/HistoryStatic';
    import { mapState } from 'vuex';

    export default {
        name: 'right-tabs',
        components: {
            UserBook,
            AutoBetting,
            SchemeManager,
            CustomScheme,
            PlanScheme,
            HistoryStatic,
        },
        data() {
            return {
                isLogin: false,
                isActive: 0,
                tabsName: [
                    { name: '用户须知', componentName: 'UserBook' }, 
                    { name: '自动投注', componentName: 'AutoBetting' }, 
                    { name: '方案管理', componentName: 'SchemeManager' },
                    { name: '自定义方案', componentName: 'CustomScheme' }, 
                    { name: '计划方案', componentName: 'PlanScheme' }, 
                    { name: '历史统计', componentName: 'HistoryStatic' }, 
                ],
            }
        },
        computed: {
            ...mapState({
                islogin: state => state.LoginTool.islogin,
            })
        },
        methods: {
            // 使用说明
            instructions() {
                alert('功能开发中...')
            }
        }
    }
</script>

<style lang="less">
    .right-tabs {
        position: relative;
        height: 100%;
        width: 100%;
    }
    .right-tabs-header {
        display: inline-block;
        background: #E7E7E7;
        width: 100%;
        margin: 0;
        li {
            margin-top: 4px;
            margin-right: 2px;
            font-size: 12px;
            width: 100px;
            height: 30px;
            line-height: 30px;
            float: left;
            border: 1px solid #ECECEC;
            border-radius: 5px 5px 0 0;
            background: #F8F8F8;
            border-bottom: none;
            text-align: center;
            cursor: pointer;
            &:nth-of-type(1) {
                margin-left: 5px;
            }
            &.right-tabs-active {
                background: #C13752;
                color: #fff;
            }
        }
        .instructions {
            position: absolute;
            box-sizing: border-box;
            background: #4682b4;
            padding: 3px 5px;
            color: #fff;
            font-size: 14px;
            border-radius: 3px;
            right: 20px;
            top: 6px;
            cursor: pointer;
        }
    }
    .right-tabs-content {
        position: absolute;
        width: 100%;
        top: 34px;
        bottom: 0;
        border-top: 2px solid #B36285;
        background: #fff;
        li {
            width: 100%;
            height: 100%;
        }  
    }
    .user-nologin {
        position: absolute;
        width: 100%;
        border-top: 2px solid #B36285;
        background: #fff;
        text-align: center;
        font-size: 28px;
        font-weight: bold;
        line-height: 500px;
        top: 34px;
        bottom: 0;
    }
</style>
