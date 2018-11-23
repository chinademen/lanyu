<template>
    <!-- 弹层遮罩 -->
    <div class="cm-layer">
        <!-- 弹出窗 -->
        <div class="cm-layer-box">
            <!-- 头部 -->
            <div class="cm-layer-box-header"></div>
            <!-- 内容 -->
            <div class="cm-layer-box-content"></div>
            <!-- 按钮 -->
            <div class="cm-layer-box-btns"></div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'CmLayer',

        components: {
           
        },

        props: {
           
        },

        provide() {
            return {

            }
        },

        data() {
            return {
                
            }
        },

        watch: {

        },

        methods: {

        },

        render() {
            // console.log('render');
        },

        created() {
            // 初始化添加遮罩层，并隐藏
            let mask = document.createElement('div');
            mask.classList.add('cm-modal');
            mask.style.display = 'none';
            document.body.appendChild(mask);
            // console.log('created');
            // console.log(this.column);
            // console.log(this.data);
        },

        mounted() {
            // console.log('mounted');
            // console.log(this.column);
            // console.log(this.data);
        },

        updated() {
            // console.log('updated');
        }
    }
</script>

<style lang="less">
    .cm-layer {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        text-align: center;
        z-index: 2020;
        &:after {
            content: '';
            display: inline-block;
            height: 100%;
            width: 0;
            vertical-align: middle;
        }
        .cm-layer-box {
            display: inline-block;
            width: 420px;
            padding-bottom: 10px;
            vertical-align: middle;
            background-color: #fff;
            border-radius: 4px;
            border: 1px solid #ebeef5;
            font-size: 18px;
            box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
            text-align: left;
            overflow: hidden;
            backface-visibility: hidden;
            .cm-layer-box-header {
                position: relative;
                padding: 15px;
                padding-bottom: 10px;
            }
            .cm-layer-box-content {
                position: relative;
                padding: 10px 15px;
                color: #606266;
                font-size: 14px;
            }
            .cm-layer-box-btns {
                padding: 5px 15px 0;
                text-align: right;
            }
        }
    }
    .cm-modal {
        z-index: 2001;
        position: fixed;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        opacity: 0.5;
        background: #000;
    }
</style>