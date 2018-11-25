<template>
    <div id="home">
        <left-container></left-container>
        <right-container></right-container>
        <!-- <cm-layer></cm-layer> -->
    </div>
</template>

<script>
    import LeftContainer from './Home/LeftContainer';
    import RightContainer from './Home/RightContainer';

    export default {
        name: 'home',
        components: {
            LeftContainer,
            RightContainer,
        }
    }
</script>

<style>
   
</style>
  