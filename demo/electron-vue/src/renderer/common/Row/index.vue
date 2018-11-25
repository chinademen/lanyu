<template>
    <div class="cm-row">
        <slot></slot>
    </div>
</template>

<script>

    export default {
        name: 'CmRow',
    }
</script>

<style lang="less">
/* 行 */
.cm-row {
    position: relative;
    box-sizing: border-box;
    &:after, &:before {
        display: table;
        content: '';
    }
    /* 清浮动 */
    &:after {
        clear: both;
    }
}
</style>