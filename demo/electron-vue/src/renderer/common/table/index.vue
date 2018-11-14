<template>
    <table 
        class="cm-table"
        cellspacing="0"
        cellpadding="0"
        border="0"
        v-if="data || data.length > 0"    
    >
        <cm-table-header
           :column="column"
        ></cm-table-header>
        <cm-table-body
            :data="data"
        ></cm-table-body>
        <cm-table-footer
            :column="column"
        ></cm-table-footer>
    </table>
</template>

<script>
    import CmTableHeader from './table-header';
    import CmTableBody from './table-body';
    import CmTableFooter from './table-footer';

    export default {
        name: 'CmTable',

        components: {
            CmTableHeader,
            CmTableBody,
            CmTableFooter
        },

        props: {
            // 表头
            column: {
                type: Array,
                default() {
                    return [];
                }
            },
            // 表格数据
            data: {
                type: Array,
                default() {
                    return [];
                }
            }
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
    table {
        width: 100%;
        background-color: #FFF;
        border: none;
        color: #565;
    }
    table, td, th {
        margin: 0;
        padding: 0;
        vertical-align: middle;
        text-align: center;
    }
</style>