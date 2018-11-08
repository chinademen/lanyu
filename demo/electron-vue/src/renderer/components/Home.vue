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
    #home {
        width: 100%;
        min-width: 1200px;
    }
</style>
  