<template>
    <table class="cm-table">
        <cm-table-header></cm-table-header>
        <cm-table-body></cm-table-body>
        <!-- <cm-table-footer></cm-table-footer> -->
    </table>
</template>

<script>
    import CmTableHeader from './table-header';
    import CmTableBody from './table-body';

    export default {
        name: 'CmTable',

        components: {
            CmTableHeader,
            CmTableBody
        },

        props: {
            type: String,
            activeName: String
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

<style>
    .cm-table {
        display: inline-block;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
    }
</style>