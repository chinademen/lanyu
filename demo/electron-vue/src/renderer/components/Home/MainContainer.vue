<template>
    <div class="main-container">
        <Left-Tools></Left-Tools>
        <Right-Tabs></Right-Tabs>
    </div>
</template>

<script>
    import LeftTools from '../MainContainer/LeftTools';
    import RightTabs from '../MainContainer/RightTabs';

    export default {
        name: 'main-container',
        components: {
           LeftTools,
           RightTabs
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
    }
</style>
          