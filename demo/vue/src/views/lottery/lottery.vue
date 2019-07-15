<template>
    <div class="lottery-wrapper">
        <div class="play-select">
            <ul class="play-group">
                <li :class="{current: currentGroupCode==item.code}" v-for="(item, index) in methodList" :key="index" 
                    @click="currentGroupCode=item.code">
                    {{item.name}}
                </li>
            </ul>
            <ul class="play-method">
                <li v-for="(item, i) in currentGroup" :key="i">
                    <span>{{item.name}}</span>
                    <div :class="{current: currentMethodCode==_item.code}" v-for="(_item,_i) in item.child" :key="_i" 
                        @click="currentMethodCode=_item.code">
                        {{_item.name}}
                    </div>
                </li>
            </ul>
        </div>
        
        <component :is="ballsPlate" :methodCode="currentMethodCode" :groupCode="currentGroupCode" @betData="getBetData"></component>

        <div>注数:{{betData.betNumber}}</div>
        <div>选中号码:{{betData.ballsView}}</div>
        <div>提交到后台的数据:{{betData.balls}}</div>
        <div class="moneyMode">
            模式：<span :class="{'active':moneyMode==item.value}" @click="moneyMode=item.value"
                    v-for="item in moneyModeList" :key="item.value">{{item.text}}</span>
        </div>
        <div>倍数：<input class="muliple-input" type="text" v-model="multiple"></div>
        <div class="amount">金额：{{amount}}</div>
        <div class="submitBtn" @click="submitLottery()">提交</div>
    </div>
</template>
<script>
import LotteryApi from 'src/api/lottery.js'

export default {
    data() {
        return {
            methodList:[],  //玩法列表
            currentGroupCode: '',  //当前玩法组code
            currentMethodCode: '', //当前玩法code
            lotteryType: '', //当前彩种类型

            betData: {
                betNumber: 0
            }, //投注data

            moneyModeList: [
                {'value': 1, 'text': '元'},
                {'value': 0.1, 'text': '角'},
                {'value': 0.01, 'text': '分'},
                {'value': 0.001, 'text': '厘'}
            ],
            moneyMode: 1,

            //倍数
            multiple: 1,
        };
    },
    computed: {
        //选号盘组件
        ballsPlate: function () {
            //是否单式玩法
            let path = this.currentMethodCode.includes('danshi') ? 'danshi/index' : `${this.lotteryType}/normal`; 
            var b = this.lotteryType ? () => import(`./ballsPlate/${path}.vue`): null;
            return b;
        },

        //当前玩法组
        currentGroup(){
            var _t = [];
            for(var i=0; i<this.methodList.length; i++){
                if(this.currentGroupCode == this.methodList[i].code){
                    _t = this.methodList[i].child;
                    break;
                }
            }
            return _t;
        },

        //金额
        amount(){
            return parseInt(this.betData.betNumber || 0) * parseFloat(this.moneyMode) * parseInt(this.multiple || 1);
        }
    },

    watch:{
        currentGroup(v, ov){
            //玩法组切换时，当前玩法设为当前玩法组的第一个玩法
            this.currentMethodCode = v[0].child[0].code;
            //重置投注data
            this.betData = {};
            console.log('玩法组: ', this.currentGroupCode);
            console.log('玩法: ', this.currentMethodCode);
        },
        currentMethodCode(v, ov){
            //玩法切换时，重置投注data
            this.betData = {};
            console.log('玩法组: ', this.currentGroupCode);
            console.log('玩法: ', this.currentMethodCode);
        }
    },

    methods: {
        getBetData(v){
            this.betData = v;
        },

        submitLottery(){

        }
    },

    beforeCreate(){
        LotteryApi.getLotteryData().then((res)=>{
            res = res.data.data;
            this.methodList = res.methodList;
            this.currentGroupCode = res.defaultGroupCode;
            this.currentMethodCode = res.defaultMethodCode;
            this.lotteryType = res.lotteryType;
        })
    }
};
</script>
<style src="src/assets/styles/lottery.scss" lang="scss"></style>
