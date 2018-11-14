<template>
    <tfoot class="cm-table-foot">
        <tr>
            <td v-for="item in column"
                :key="item.key"
            >
                {{item.title}}
            </td>
        </tr>
    </tfoot>
</template>

<script>
    export default {
        name: 'CmTableFooter',

        components: {

        },

        props: {
            column: {
                require: true
            },
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
            console.log('render');
        },

        created() {
            console.log('created');
            console.log(this.column);
        },

        mounted() {
            console.log('mounted');
            console.log(this.column);
        },

        updated() {
            console.log('updated');
        }
    }
</script>

<style lang="less">
    tfoot {
        width: 100%;
        background-color: rgb(240, 240, 240);
        tr {
            
        }
    }
</style>