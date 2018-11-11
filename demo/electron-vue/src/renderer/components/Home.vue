<template>
    <div id="home">
        <Header-Container></Header-Container>
        <Main-Container></Main-Container>
        <Footer-Container></Footer-Container>
    </div>
</template>

<script>
    import HeaderContainer from './Home/HeaderContainer';
    import MainContainer from './Home/MainContainer';
    import FooterContainer from './Home/FooterContainer';

    export default {
        name: 'home',
        components: {
            HeaderContainer,
            MainContainer,
            FooterContainer
        }
    }
</script>

<style>
    * {
        padding: 0;
        margin: 0;
    }
    html, body {
        margin: 0;
        width:100%;
        height: 100%;
        overflow: hidden;
        background: rgb(240, 240, 240);
    }
    #app {
        height: 100%;
    }
    #home {
        width: 100%;
        min-width: 1200px;
        height: 100%;
        position: relative;
    }
    ul {
        list-style: none;
    }
    .clearfix:after{
        content:'';
        display:block;
        width:100%;
        clear:both;
        height:0;
    }
</style>
  