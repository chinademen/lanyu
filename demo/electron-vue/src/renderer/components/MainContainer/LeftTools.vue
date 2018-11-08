<template>
    <div class="left-tools">
        <Login v-if="isShowAppTools"></Login>
        <Plat-Address></Plat-Address>
        <Histroy-Number></Histroy-Number>
    </div>
</template>

<script>
    import Login from '../LeftTools/Login';
    import PlatAddress from '../LeftTools/PlatAddress';
    import HistroyNumber from '../LeftTools/HistroyNumber';
    import { mapState } from 'vuex';

    export default {
        name: 'left-tools',
        components: {
            Login,
            PlatAddress,
            HistroyNumber
        },
        data() {
            return {

            }
        },
        computed: {
            ...mapState({
                isShowAppTools: state => state.AppTools.isShowAppTools
            })
        }
    }
</script>

<style>
    .left-tools {
        width: 240px;
        height: 100%;
        border-right: 2px solid #333;
    }
</style>
         