<template>
    <div class="balls-plate">
        <ul class="balls-ul">
            <li class="balls-row" v-for="(row, rowIndex) in rowBalls" :key="rowIndex">
                <div class="row-title">
                    {{rowTitles[rowIndex]}}
                </div>
                <div class="row-balls">
                    <span class="ball" :class="{selected:ball.selected}" v-for="(ball,ballIndex) in row" :key="ballIndex" 
                        @click="ballClick(row,ballIndex)">
                        {{ball.text}}
                    </span>
                </div>
                <div class="row-btns">
                    <span :class="[{active: btn.name==currentBtnName[rowIndex]}, btn.name]" v-for="(btn,btnIndex) in rowButtons" :key="btnIndex" @click="rowBtnClick(btn, rowIndex)">
                        {{btn.text}}
                    </span>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import SSC from './SSC.js'
import methodConfig from './methodConfig.js'

export default {
    name: 'SSC',
    props: ['groupCode', 'methodCode'],
    
    data() {
        return methodConfig[this.groupCode][this.methodCode] || {}  //玩法配置信息
    },
    
    computed: {
        //选中的号码数组
        selectedBalls(){
            return this.rowBalls.map(item=>{
                var _t = [];
                for(var i=0;i<item.length;i++){
                    if(item[i].selected){
                        _t.push(item[i])
                    }
                };
                return _t;
            })
        },

        //提交到后台的号码
        balls(){
            return this.selectedBalls.map(item=>{
                var _t = item.map(_item=>_item.value)
                return _t.join(',');
            }).join('|')
        },

        //二次确认框展示给用户的选号信息
        ballsView(){
            return this.selectedBalls.map((item,index)=>{
                var _t = item.map(_item=>_item.text)
                return this.rowTitles[index] + '-' + _t.join(',');
            }).join('|')
        },
        
        //注数
        betNumber(){
            var balls = this.selectedBalls.map(item=>item.map(_item=>_item.value));
            console.log(balls);
            console.log(SSC.getBetNumber(this.methodCode, balls))
            return SSC.getBetNumber(this.methodCode, balls)
        }
    },

    watch:{
        betNumber(v, ov){
            var betData = {
                betNumber: v,
                balls: v>0 ? this.balls : '',
                ballsView: v>0 ? this.ballsView : ''
            }
            this.$emit('betData', betData)
        }
    },

    methods:{
        //清空选号盘
        clearBallsPlate(){
            this.rowBalls = this.rowBalls.map(item=>item.map(_item=>{
                _item.selected = false
                return _item;
            }));

            this.currentBtnName = ['', '', '' ,'' ,''];
        },

        ballClick(row, ballIndex){
            SSC.ballClick.call(this, row, ballIndex)
        },

        rowBtnClick(btn, rowIndex){
            SSC.rowBtnClick.call(this, btn, rowIndex)
        }
    },

    created(){
        this.clearBallsPlate();
    },
};
</script>