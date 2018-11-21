<template>
    <div class="main-container">
        <Right-Tabs></Right-Tabs>
    </div>
</template>

<script>
    import RightTabs from '../MainContainer/RightTabs';
    import { mapState } from 'vuex';

    export default {
        name: 'main-container',
        components: {
           RightTabs
        },
        computed: {
            ...mapState({

            })
        }
    }
</script>

<style>
    .main-container {
        position: absolute;
        width: 100%;
        top: 122px;
        bottom: 0;
        border: 2px solid #333;
        border-bottom: none;
    }
</style>
          