<!-- 自动投注 -->
<template>
    <div class="auto-betting">
        <div class="auto-betting-header">
            <div class="left">
                <!-- 控制器-上 -->
                <ul class="control">
                    <div class="mask" v-show="simulateBet"></div>
                    <li class="li-type-1">
                        <input type="checkbox" @change="toggleCheckbox('simulateBet')" />
                        <span>模拟投注</span>
                    </li>
                    <li class="li-type-2">
                        <div>
                            <input type="checkbox" @change="toggleCheckbox('simulateBetWin')" />
                            <span>模拟投注输</span>
                            <input type="text" :disabled="simulateBetWin" />
                        </div>
                        <div>
                            <input type="checkbox" @change="toggleCheckbox('simulateBetLose')" />
                            <span>模拟投注赢</span>
                            <input type="text" :disabled="simulateBetLose" />
                        </div>
                    </li>
                    <li class="li-type-1">循环切换</li>
                    <li class="li-type-2">
                        <div>
                            <input type="checkbox" @change="toggleCheckbox('realBetLose')" />
                            <span>真实投注输</span>
                            <input type="text" :disabled="realBetLose" />
                        </div>
                        <div>
                            <input type="checkbox" @change="toggleCheckbox('realBetWin')" />
                            <span>真实投注赢</span>
                            <input type="text" :disabled="realBetWin" />
                        </div>
                    </li>
                    <li class="li-type-3">
                        <div>
                            <input type="checkbox" @change="toggleCheckbox('failStopBet')" />
                            <span>失败停投</span>
                        </div>
                        <div>
                            <input type="checkbox" @change="toggleCheckbox('disconnectStopBet')" />
                            <span>断期停投</span>
                        </div>
                    </li>
                </ul>
                <!-- 控制器-下 -->
                <ul class="control-two">
                    <li>
                        <input type="checkbox" @change="toggleCheckbox('autoStart')" />
                        <span>自动开始</span>
                        <input type="time" />
                    </li>
                    <li>
                        <input type="checkbox" @change="toggleCheckbox('auto')" />
                        <span>自动</span>
                        <select>
                            <option value="stopBet" selected>停止投注</option>
                            <option value="stopNewBet">停止新增投注</option>
                        </select>
                        <input type="time" />
                    </li>
                    <li>
                        <span>延迟投注：</span>
                        <input type="number" />
                        <span>秒后：</span>
                    </li>
                </ul>
            </div>
            <div class="right">
                <div class="auto-btn" @click="isAutoBtn">
                    <span>开启</span>
                    <span>自动投注</span>
                </div>
            </div>
        </div>
        <div class="auto-betting-info">
            <div class="row">
                <span class="col">真实盈亏：<em>0</em></span>
                <span class="col">真实下注：<em>0</em></span>
                <span class="col">模拟盈亏：<em>0</em></span>
                <span class="col">模拟下注：<em>0</em></span>
                <span class="col">最大连中：<em>0</em></span>
                <span class="col">最大连挂：<em>0</em></span>
                <span class="col">准确率：<em>0%</em></span>
            </div>
            <div class="row">
                <span class="col">投注记录：<em>0</em></span>
                <span class="col">投注状态：<em>无</em></span>
            </div>
            <div class="row">
                <span>方案倍数乘以系数：</span>
                <input type="number" />
                <button class="ok" @click="isOk">确定</button>
                <button class="clear" @click="isClear">清空记录</button>
            </div>
        </div>
        <!-- 表格组件 -->
        <div class="auto-betting-table">
            <cm-table></cm-table>
        </div>
        <!-- 底部 -->
        <div class="auto-betting-footer">
            <input type="checkbox" />
            <span>自动删除N期前的计划：</span>
            <input type="number" />
        </div>
    </div>
</template>

<script>

    export default {
        name: 'auto-betting',
        data() {
            return {
                simulateBet: false, // 模拟投注
                simulateBetLose: false, // 模拟投注输
                simulateBetWin: false, // 模拟投注赢
                realBetLose: false, // 真实投注输
                realBetWin: false, // 真实投注赢
                failStopBet: false, // 失败停投
                disconnectStopBet: false, // 断期停投
                autoStart: false, // 自动开始
                auto: false, // 自动
            }
        },
        methods: {
            // 控制各checkbox开关
            toggleCheckbox(name) {
                this[name] = !this[name];
            },
            isOk() {
                alert('功能开发中...')
            },
            isClear() {
                alert('功能开发中...')
            },
            isAutoBtn() {
                alert('功能开发中...')
            }
        }
    }
</script>

<style lang="less">
    .auto-betting {
        position: relative;
        width: 100%;
        height: 100%;
    }
    .auto-betting-header {
        box-sizing: border-box;
        width: 100%;
        height: 100px;
        border: 1px solid #333;
        font-size: 12px;
        .left {
            display: inline-block;
            width: 590px;
            float: left;
        }
        .control {
            box-sizing: border-box;
            height: 70px;
            .mask {
                position: absolute;
                width: 420px;
                height: 70px;
                left: 80px;
                background: rgba(255, 255, 255, 0.5);
            }
            li {
                box-sizing: border-box;
                display: inline-block;
                border: 1px solid #333;
                width: 80px;
                height: 70px;
                line-height: 70px;
                text-align: center;
                float: left;
                padding: 0 5px;
                &.li-type-2 {
                    width: 170px;
                    line-height: 35px;
                }
                &.li-type-3 {
                    width: 90px;
                    line-height: 35px;
                }
            }
            input[type="text"] {
                display: inline-block;
                width: 70px;
            }
        }
        .control-two {
            box-sizing: border-box;
            height: 30px;
            line-height: 30px;
            border-right: 1px solid #333;
            li {
                box-sizing: border-box;
                display: inline-block;
                float: left;
                width: 180px;
                padding: 0 5px;
                &:nth-of-type(2) {
                    width: 236px;
                    border-right: 1px solid #333;
                }
                &:nth-of-type(3) {
                    width: 173px;
                }
                input[type="time"] {
                    width: 70px;
                    height: 15px;
                }
                input[type="number"] {
                    width: 50px;
                }
            }
        }
        .right {
            display: inline-block;
            width: calc(100% - 590px);
            height: 100px;
            float: left;
            .auto-btn {
                width: 96px;
                height: 96px;
                text-align: center;
                background: #4682b4;
                border: 1px solid #fff;
                color: #fff;
                font-size: 20px;
                font-weight: bold;
                cursor: pointer;
                span {
                    display: inline-block;
                    width: 100%;
                    height: 48px;
                    &:nth-of-type(1) {
                        line-height: 75px;
                    }
                }
            }
        }
    }
    .auto-betting-info {
        box-sizing: border-box;
        width: 100%;
        height: 77px;
        border: 1px solid #333;
        border-bottom: none;
        padding-left: 5px; 
        .row {
            width: 960px;
            height: 25px;
            line-height: 25px;
            font-size: 12px;
            .col {
                box-sizing: border-box;
                display: inline-block;
                width: 130px;
            }
            em {
                color: #4682b4;
            }
            input[type="number"] {
                width: 50px;
            }
            button {
                height: 18px;
                line-height: 16px;
                margin-top: 2px;
                cursor: pointer;
            }
        }
    }
    .auto-betting-table {
        width: 100%;
        position: absolute;
        top: 177px;
        bottom: 30px;
        border: 1px solid #333;
    }
    .auto-betting-footer {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 30px;
        line-height: 27px;
        border: 1px solid #333;
        font-size: 12px;
        input[type="checkbox"] {
            position: absolute;
            left: 5px;
            top: 9px;
        }
        span {
            position: absolute;
            display: inline-block;
            height: 100%;
            left: 26px;
        }
        input[type="number"] {
            position: absolute;
            left: 160px;
            top: 7px;
            width: 50px;
        }
    }
</style>
    