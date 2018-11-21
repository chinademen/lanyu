<template>
    <div class="right-container">
        <Header-Container></Header-Container>
        <Main-Container></Main-Container>
        <Footer-Container></Footer-Container>
    </div>
</template>

<script>
    import HeaderContainer from '../RightContainer/HeaderContainer';
    import MainContainer from '../RightContainer/MainContainer';
    import FooterContainer from '../RightContainer/FooterContainer';

    export default {
        name: 'right-container',
        components: {
            HeaderContainer,
            MainContainer,
            FooterContainer
        },
    }
</script>

<style lang="less">
    .right-container {
        position: relative;
        display: inline-block;
        box-sizing: border-box;
        width: calc(100% - 244px);
        height: 100%;
        border: 1px solid #333;
    }
</style>
       