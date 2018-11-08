<template>
    <div class="left-tools">
        <Login v-if=""></Login>
        <Plat-Address></Plat-Address>
        <Histroy-Number></Histroy-Number>
    </div>
</template>

<script>
    import Login from '../LeftTools/Login';
    import PlatAddress from '../LeftTools/PlatAddress';
    import HistroyNumber from '../LeftTools/HistroyNumber';

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
          