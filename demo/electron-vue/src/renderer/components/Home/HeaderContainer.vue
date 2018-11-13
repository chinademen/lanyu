<template>
    <div class="header-container" v-show="isShowHeader">
        <Count-Down></Count-Down>
        <Award-Number></Award-Number>
        <App-Tools></App-Tools>
        <Plat-Logo></Plat-Logo>
    </div>
</template>

<script>
    import CountDown from '../HeaderContainer/CountDown';
    import AwardNumber from '../HeaderContainer/AwardNumber';
    import AppTools from '../HeaderContainer/AppTools';
    import PlatLogo from '../HeaderContainer/PlatLogo';
    import { mapState } from 'vuex';

    export default {
        name: 'header-container',
        components: {
            CountDown,
            AwardNumber,
            AppTools,
            PlatLogo
        },
        computed: {
            ...mapState({
                isShowHeader: state => state.RightTabs.isShowHeader
            })
        }
    }
</script>

<style>
    .header-container {
        width: 1200px;
        height: 122px;
        border: 2px solid #333;
        border-bottom: none;
    }
</style>
          