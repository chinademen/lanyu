<template>
    <div class="header-container">
        <count-down></count-down>
        <plat-logo></plat-logo>
        <qr-code></qr-code>
    </div>
</template>

<script>
    import CountDown from '../HeaderContainer/CountDown';
    import PlatLogo from '../HeaderContainer/PlatLogo';
    import QrCode from '../HeaderContainer/QrCode';
    import { mapState } from 'vuex';

    export default {
        name: 'header-container',
        components: {
            CountDown,
            PlatLogo,
            QrCode,
        },
        computed: {
            ...mapState({

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
          