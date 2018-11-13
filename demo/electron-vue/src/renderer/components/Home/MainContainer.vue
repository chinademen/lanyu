<template>
    <div class="main-container" :class="{'top_0': !isShowHeader}">
        <Left-Tools></Left-Tools>
        <Right-Tabs></Right-Tabs>
    </div>
</template>

<script>
    import LeftTools from '../MainContainer/LeftTools';
    import RightTabs from '../MainContainer/RightTabs';
    import { mapState } from 'vuex';

    export default {
        name: 'main-container',
        components: {
           LeftTools,
           RightTabs
        },
        computed: {
            ...mapState({
                isShowHeader: state => state.RightTabs.isShowHeader
            })
        }
    }
</script>

<style>
    .main-container {
        position: absolute;
        width: 100%;
        top: 122px;
        bottom: 30px;
        border: 2px solid #333;
        border-bottom: none;
    }
    .top_0 {
        top: 0;
    }
</style>
          