<!-- 左侧工具栏 -->
<template>
    <div class="left-tools" v-if="isShowAppTools">
        <Login-Tool></Login-Tool>
        <Plat-Address v-if="isShowPlatAddress"></Plat-Address>
        <Histroy-Number v-if="isShowHistroyNumber"></Histroy-Number>
    </div>
</template>

<script>
    import LoginTool from '../LeftTools/LoginTool';
    import PlatAddress from '../LeftTools/PlatAddress';
    import HistroyNumber from '../LeftTools/HistroyNumber';
    import { mapState } from 'vuex';

    export default {
        name: 'left-tools',
        components: {
            LoginTool,
            PlatAddress,
            HistroyNumber
        },
        data() {
            return {

            }
        },
        computed: {
            ...mapState({
                isShowAppTools: state => state.AppTools.isShowAppTools,
                isShowPlatAddress: state => state.AppTools.isShowPlatAddress,
                isShowHistroyNumber: state => state.AppTools.isShowHistroyNumber,
            })
        }
    }
</script>

<style>
    .left-tools {
        display: inline-block;
        float: left;
        width: 240px;
        height: 100%;
        border-right: 2px solid #333;
    }
</style>
         