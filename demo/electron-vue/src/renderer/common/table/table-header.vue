<template>
    <thead class="cm-table-header">
        <tr>
            <th v-for="item in column"
                :key="item.key"
            >
            {{item.title}}
            </th>
        </tr>
    </thead>
</template>

<script>
    export default {
        name: 'CmTableHeader',

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
            // console.log('render');
        },

        created() {
            // console.log('created');
            // console.log(this.column);
        },

        mounted() {
            // console.log('mounted');
            // console.log(this.column);
        },

        updated() {
            // console.log('updated');
        }
    }
</script>

<style lang="less">
    thead {
        th {
            font-size: 14px;
            font-weight: bold;
            line-height: 19px;
            padding: 5px 8px;
            text-align: center;
            color: #fff;
            border: 1px solid #FFF;
            border-right: 1px solid #fff;
            background: #4682b4;
        }
    }
</style>