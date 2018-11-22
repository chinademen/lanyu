<!-- 侧边栏 -->
<template>
    <div class="left-container">
        <Login-Tool></Login-Tool>
        <Histroy-Number></Histroy-Number>
    </div>
</template>


<script>
    import LoginTool from '../LeftContainer/LoginTool';
    import HistroyNumber from '../LeftContainer/HistroyNumber';
    import { mapState } from 'vuex';

    export default {
        name: 'left-container',
        components: {
            LoginTool,
            HistroyNumber
        },
        data() {
            return {

            }
        },
        computed: {
            ...mapState({

            })
        }
    }
</script>

<style lang="less">
    .left-container {
        // position: relative;
        float: left;
        display: inline-block;
        box-sizing: border-box;
        width: 256px;
        height: 100%;
        border: 1px solid #333;
    }
</style>



         