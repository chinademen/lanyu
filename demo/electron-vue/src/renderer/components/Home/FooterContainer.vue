<template>
    <div class="footer-container">
        <span>在线人数：<em>*</em></span>
        <span>用户：<em>免责声明，该软件仅技术交流使用，请勿用于商业用途</em></span>
    </div>
</template>

<script>

    export default {
        name: 'footer-container',
    }
</script>

<style>
    .footer-container {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 30px;
        border: 2px solid #333;
        background: rgb(240, 240, 240);
        font-size: 12px;
    }
    .footer-container span {
        display: inline-block;
        height: 30px;
        line-height: 24px;
    }
    .footer-container span:nth-of-type(1) {
        border-right: 1px solid #333;
        padding: 0 5px;
    }
    .footer-container em {
        color: rgb(70, 130, 180);
    }
</style>
  