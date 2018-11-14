<template>
    <tbody class="cm-table-body">
        <tr v-for="(item, index) in data"
            :key="index"
        >
            <td v-for="(value, key) in item"
                :key="key"
            >
            {{value}}
            </td>
        </tr>
    </tbody>
</template>

<script>
    export default {
        name: 'CmTableBody',

        components: {

        },

        props: {
            data: {
                require: true
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
            console.log(this.data);
        },

        mounted() {
            // console.log('mounted');
            // console.log(this.data);
        },

        updated() {
            // console.log('updated');
        }
    }
</script>

<style lang="less">
    tbody {
        td, th {
            padding: 9px;
        }
        /* 偶数行 */
        tr:nth-child(even) th, tr:nth-child(even) td {
            background-color: rgb(240, 240, 240);
        }
        /* tr的hover样式 */
        tr:hover td, tr:hover th { 
            background-color: #8b7;
            color: #fff;
        }
    }
</style>