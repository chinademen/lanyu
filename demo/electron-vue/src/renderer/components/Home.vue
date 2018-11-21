<template>
    <div id="home">
        <left-container></left-container>
        <right-container></right-container>
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
        content: '';
        display: block;
        width: 100%;
        clear: both;
        height: 0;
    }
    input {
        margin-top: -2px;
        margin-bottom: 1px;
        vertical-align: middle;
        cursor: pointer;
    }
    .col-2 {
        width: 50%;
    }
    .col-3 {
        width: 33.3%;
    }
    .col-4 {
        width: 25%;
    }
    .col-5 {
        width: 20%;
    }
    .col-6 {
        width: 16.6%;
    }
    .col-7 {
        width: 14.2%;
    }
    .col-8 {
        width: 12.5%;
    }
    .col-9 {
        width: 11.1%
    }
    .col-10 {
        width: 10%;
    }
    .col-11 {
        width: 9%;
    }
    .col-12 {
        width: 8.3%;
    }
</style>
  