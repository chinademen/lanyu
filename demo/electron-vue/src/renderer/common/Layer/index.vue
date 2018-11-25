<template>
    <!-- 弹层遮罩 -->
    <div class="cm-layer">
        <!-- 弹出窗 -->
        <div class="cm-layer-box">
            <!-- 头部 -->
            <div class="cm-layer-box-header">信息</div>
            <!-- 内容 -->
            <div class="cm-layer-box-content">这是弹出层</div>
            <!-- 按钮 -->
            <div class="cm-layer-box-btns">
                <button class="isOk" @click="isOk">确定</button>
            </div>
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
            isOk() {
                
            }
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
                text-align: center;
            }
            .cm-layer-box-btns {
                padding: 5px 15px 0;
                text-align: right;
                .isOk {
                    padding: 9px 15px;
                    font-size: 12px;
                    border-radius: 3px;
                    color: #fff;
                    background-color: #409eff;
                    border-color: #409eff;
                    display: inline-block;
                    line-height: 1;
                    white-space: nowrap;
                    cursor: pointer;
                    border: 1px solid #dcdfe6;
                    -webkit-appearance: none;
                    text-align: center;
                    box-sizing: border-box;
                    outline: none;
                    margin: 0;
                    transition: .1s;
                    font-weight: 500;
                    cursor: pointer;
                }
            }
        }
    }
    .cm-modal {
        // display: none;
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