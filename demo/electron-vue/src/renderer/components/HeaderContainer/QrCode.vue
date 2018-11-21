<!-- 二维码 -->
<template>
    <div class="qr-code">
        <div id="qrcode"></div>
    </div>
</template>

<script>
    import QRCode from 'qrcodejs2';
    import { mapState } from 'vuex';

    export default {
        name: 'qr-code',
        computed: {
            ...mapState({

            })
        },
        methods: {
            qrcode () {
                let qrcode = new QRCode('qrcode', {
                    width: 120,
                    height: 120, // 高度
                    text: 'http://www.baidu.com/' // 二维码url
                })
            }
        },
        mounted() {
            this.qrcode()
        }
    }
</script>

<style lang="less">
    .qr-code {
        float: left;
        display: inline-block;
        width: 120px;
        height: 120px;
    }
</style>
                          