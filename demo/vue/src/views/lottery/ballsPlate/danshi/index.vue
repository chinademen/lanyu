<!-- 标准盘-单式 -->
<template>
    <div class="cm-danshi">
        <article class="ball-area-danshi">
            <div>
                <div class="textarea-box">
                    <textarea 
                        @input="data = $event.target.value"
                        :value="data"    
                    ></textarea>
                </div>
                <div class="danshi-btngroup">
                    <button @click="removeQueenNumber">删除重复号</button>
                    <button @click="removeCinputData">清空号码栏</button>
                </div>
            </div>
            <p>每注号码之间请用一个回车、逗号[,]或者分号[;]隔开</p>
        </article>
    </div>
</template>

<script>
    import inputZone from './inputZone';

    export default {
        name: 'CmDanshi',
        
        props: {
            type: {
                type: String,
                require: true,
                // default() {
                //     return 'ssc';
                // }
            },
            methodCode: {
                type: String,
                require: true,
                // default() {
                //     return 0;
                // }
            }
        },

        data() {
            return {
                data: '',           // textarea输入框的值
                numberData: null,   // 投注号码
                inputNumData: 0,    // 注数
                showNumberData: '', // 投注号码(展示用)
            }
        },
        created() {
        },
        watch: {
            data(newName, oldName) {
                if (newName) {
                    this.data = newName;
                }
                let newValue = this.data;
                if (!newValue) return;
                let d = /0123456789/;
                if (d.test(newValue)) {
                    newValue = newValue.replace(/0/g, "0")
                    .replace(/1/g, "1")
                    .replace(/2/g, "2")
                    .replace(/3/g, "3")
                    .replace(/4/g, "4")
                    .replace(/5/g, "5")
                    .replace(/6/g, "6")
                    .replace(/7/g, "7")
                    .replace(/8/g, "8")
                    .replace(/9/g, "9");
                }
                // 传入 textarea的值   玩法methodCode   彩种type
                // 返回  投注号码：numberData   注数：inputNumData
                // const { methodCode, type } = this.menu[this.isActive];
                const data = inputZone(newValue, this.methodCode, this.type);
                this.numberData = data.numberData;
                this.inputNumData = data.inputNumData;
                // console.log('注数： ', this.inputNumData);
                // console.log('投注号码： ', this.numberData);
                // 发送给外层
                const bet = {
                    betNumber: this.inputNumData,
                    ballsView: this.numberData.join(','),
                    balls: this.numberData,
                };
                this.$emit('betData', bet);
            }
        },
        computed: {},
        methods: {
            removeQueenNumber() {
                if (this.numberData && this.numberData[0]) {
                    this.data = this.numberData.join(',');
                    this.numberData = Array.from(new Set(this.numberData));
                }
            },
            removeCinputData() {
                this.data = '';
                this.showNumberData = '';
                this.numberData = null;
                this.inputNumData = 0;
            },
            createBets() {
            // 00000 - 99999 五星十万注
            //     let arr = [];
            //     for (let i = 0; i < 100000; i++) {
            //         let str = i + '';
            //         if (str.length < 6) {
            //             str = str.padStart(5, '0');
            //         }
            //         arr.push(str)
            //     }
            //     console.log(arr.toString())
            // 0000 - 9999 四星一万注
            // let arr = [];
            // for (let i = 0; i < 10000; i++) {
            //     let str = i + '';
            //     if (str.length < 5) {
            //         str = str.padStart(4, '0');
            //     }
            //     arr.push(str)
            // }
            // console.log(arr.toString())
            // 000 - 1000 三星一千注
            // for (let i = 0; i < 1000; i++) {
            //     let str = i + '';
            //     if (str.length < 4) {
            //         str = str.padStart(3, '0');
            //     }
            //     arr.push(str)
            // }
            // console.log(arr.toString())
            // 00 - 100 二星一百注
            // for (let i = 0; i < 100; i++) {
            //     let str = i + '';
            //     if (str.length < 3) {
            //         str = str.padStart(2, '0');
            //     }
            //     arr.push(str)
            // }
            // console.log(arr.toString())
            } 

        }
    }
</script>

<style lang="less" scoped>
    .cm-danshi {
        position: relative;
        .ball-area-danshi {
            position: relative;
            width: 100%;
            font-size: 14px;
            background: #f0f0f0;
            >div {
                position: relative;
                height: auto;
                zoom: 1;
                .textarea-box {
                    textarea {
                        height: 137px;
                        border: 1px solid #9ea3a8;
                        background: #fff;
                        width: 100%;
                        overflow: auto;
                    }
                }

                .danshi-btngroup {
                    text-align: center;
                    padding: 10px 0;
                    button {
                        border: 0;
                        outline: 0;
                        border-radius: 4px;
                        height: 32px;
                        line-height: 32px;
                        font-weight: 400;
                        background-color: #fff;
                        color: rgba(0, 0, 0, 0.65);
                        padding: 0 15px;
                        cursor: pointer;
                        &:nth-of-type(1) {
                            margin-right: 10px;
                        }
                    }
                }

            }
            >p {
                border: 1px solid #ffe58f;
                background-color: #fffbe6;
                border-radius: 4px;
                line-height: 1.5;
                text-align: center;
                color: rgba(0, 0, 0, 0.65);
            }
        }
    }
</style>
