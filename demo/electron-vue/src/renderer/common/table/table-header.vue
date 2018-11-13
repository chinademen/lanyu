<template>
    <thead class="cm-table-header">
        <tr>
            <th>投注时间</th>
            <th>投注彩种</th>
            <th>期数</th>
            <th>方案</th>
            <th>玩法</th>
            <th>注数</th>
            <th>倍数</th>
            <th>轮次</th>
            <th>金额</th>
            <th>盈亏</th>
            <th>方案盈亏</th>
            <th>连挂</th>
        </tr>
    </thead>
</template>

<script>
    export default {
        name: 'CmTableHeader',

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
            
        },

        created() {

        },

        mounted() {

        },

        updated() {
            
        }
    }
</script>

<style lang="less">
    .cm-table-header {
        display: inline-block;
        box-sizing: border-box;
        width: 100%;
        tr {
            display: flex;
            justify-content: space-between;
        }
        th {
            text-align: center;
        }
    }
</style>