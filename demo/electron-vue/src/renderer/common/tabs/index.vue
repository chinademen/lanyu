<template>
    <div>
        <ul class="cm-header">
            <li :class="{'cm-active':isActive == index}" 
                :key="index"
                @click="isActive=index"
                v-for="(item, index) in tabsName"
            >{{item.name}}</li>
        </ul>
        <ul class="cm-content">
            <li v-for="(item, index) in tabsName" v-if="isActive == index">
                <component :is="item.componentName" :key="index"></component>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'CmTabs',

        components: {

        },

        props: {
            // isActive: {
            //     type: Number,
            //     default: 0
            // },
            activeName: String,
            tabsName: Array,
            components: Array
        },

        provide() {
            return {
                isActive: 0,
                activeName: this.activeName
            }
        },

        data() {
            return {
                isActive: 0,
            }
        },

        watch: {
        },

        methods: {

        },

        render() {
            console.log(this.tabsName)
      
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
    .cm-header {
        display: inline-block;
        width: 100%;
        border-bottom: 1px solid #333;
        margin: 0;
        li {
            margin-top: 4px;
            font-size: 12px;
            width: 100px;
            height: 30px;
            line-height: 30px;
            font-weight: bold;
            float: left;
            border: 1px solid #333;
            border-bottom: none;
            text-align: center;
            cursor: pointer;
            &:nth-of-type(1) {
                margin-left: 5px;
            }
        }
    }
    .cm-active {
        background: #fff;
        color: red;
    }
    .cm-content {
        position: absolute;
        width: 100%;
        top: 34px;
        bottom: 0;
        border: 1px solid #333;
        background: #fff;
        li {
            width: 100%;
            height: 100%;
        }  
    }
</style>