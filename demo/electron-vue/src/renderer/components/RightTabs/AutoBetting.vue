<!-- 自动投注 -->
<template>
    <div class="auto-betting">
        <div class="auto-betting-header">
            <div class="header-left">
                <cm-row>
                    <cm-col :span="4">止损盈亏：<em>+186.000</em></cm-col>
                    <cm-col :span="4">盈利大于 <input type="number" /></cm-col>
                    <cm-col :span="4">亏损大于 <input type="number" /></cm-col>
                    <cm-col :span="4">最大连挂：<em>5</em></cm-col>
                    <cm-col :span="4"><input type="checkbox" /> 断期停投</cm-col>
                    <cm-col :span="4"><input type="checkbox" /> 失败停投</cm-col>
                </cm-row>
                <cm-row>
                    <cm-col :span="3"><input type="checkbox" /> 开始时间：</cm-col>
                    <cm-col :span="4">
                        <cm-date-picker></cm-date-picker>
                    </cm-col>
                    <cm-col :span="3" :offset="1"><input type="checkbox" /> 结束时间：</cm-col>
                    <cm-col :span="4">
                        <cm-date-picker></cm-date-picker>
                    </cm-col>
                    <cm-col :span="8" :offset="1"><input type="checkbox" /> 延迟投注 <input type="number" /> 秒后</cm-col>
                </cm-row>
                <cm-row class="info">
                    *挂机软件没有撤单功能；分分彩建议不设置延迟投注，如设置则不能超过12秒
                </cm-row>
            </div>
            <div class="header-right">
                <button class="auto-btn" @click="isAutoBtn">开始自动投注</button>
            </div>
        </div>
        <div class="auto-betting-info">
            <div class="info-left">
                <cm-row>
                    <cm-col :span="4">总盈亏：<em>+186.000</em></cm-col>
                    <cm-col :span="4">总投注：<em>2000.000</em></cm-col>
                    <cm-col :span="4">最大连中：<em>3</em></cm-col>
                    <cm-col :span="4">最大连挂：<em>5</em></cm-col>
                </cm-row>
                <cm-row>
                    <cm-col :span="4">投注记录：<em>25/25期</em></cm-col>
                    <cm-col :span="20">投注状态：<em>投注失败-用户余额不足，请充值！</em></cm-col>
                </cm-row>
            </div>
            <div class="info-right">
                <button class="clear-btn" @click="isClear">清空记录</button>
            </div>
        </div>
        <!-- 表格 -->
        <div class="auto-betting-table">
            <cm-table
                :column="column"
                :data="tableData"
            ></cm-table>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'auto-betting',
        data() {
            return {
                column: [ // 表头
                    { title: '投注时间', key: 'bettime' },
                    { title: '方案', key: 'programme' },
                    { title: '彩种', key: 'betlottery' },
                    { title: '投注期号', key: 'periods' },
                    { title: '玩法', key: 'playmethod' },
                    { title: '投注数', key: 'notes' },
                    { title: '倍数', key: 'multiple' },
                    { title: '轮次', key: 'rotation' },
                    { title: '投注额', key: 'money' },
                    { title: '盈亏', key: 'profit' },
                    { title: '方案盈亏', key: 'projectprofit' },
                    { title: '投注内容', key: 'betnumber' },
                    { title: '开奖号码', key: 'winnumber' },
                    { title: '状态', key: 'status' },
                ],
                tableData: [ // 表格数据
                    { 
                        bettime: '2018-11-14', betlottery: '重庆时时彩', periods: '000001', programme: 1, 
                        playmethod: '五星复式', notes: 1, multiple: 1, rotation: 1, money: 1,
                        profit: 0, projectprofit: 0, betnumber: '2|3|1|4|6', winnumber: '2|3|1|4|6', status: '中奖'
                    },
                    { 
                        bettime: '2018-11-14', betlottery: '重庆时时彩', periods: '000002', programme: 2, 
                        playmethod: '五星复式', notes: 2, multiple: 2, rotation: 2, money: 2,
                        profit: 0, projectprofit: 0, betnumber: '2|3|1|4|6', winnumber: '2|3|1|4|6', status: '挂'
                    },
                    { 
                        bettime: '2018-11-14', betlottery: '重庆时时彩', periods: '000003', programme: 3, 
                        playmethod: '五星复式', notes: 3, multiple: 3, rotation: 3, money: 3,
                        profit: 0, projectprofit: 0, betnumber: '2|3|1|4|6', winnumber: '2|3|1|4|6', status: '待开奖'
                    },
                ]
            }
        },
        methods: {
            // 开始自动投注
            isAutoBtn() {
                alert('功能开发中...')
            },
            // 清空记录
            isClear() {
                alert('功能开发中...')
            },
        }
    }
</script>

<style lang="less">
    .auto-betting {
        position: relative;
        width: 100%;
        height: 100%;
    }
    .cm-row {
        padding: 5px 0;
        .status-col {
            width: 540px;
        }
        em {
            color: #4682b4;
        }
        input[type="number"] {
            width: 60px;
        }
        button {
            height: 18px;
            line-height: 16px;
            margin-top: 2px;
            cursor: pointer;
        }
    }
    .auto-btn, .clear-btn {
        position: absolute;
        top: 10px;
        right: 150px;
        cursor: pointer;
        background: #4682b4;
        color: #fff;
        padding: 12px;
        border: 0;
        border-radius: 5px;
        font-size: 14px;
        font-weight: bold;
    }
    /* 投注控制 及 开始自动投注按钮 区域 */
    .auto-betting-header {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 100px;
        font-size: 12px;
        padding: 5px 12px;
        .header-left {
            display: inline-block;
            box-sizing: border-box;
            width: 750px;
            .info {
                padding-top: 15px;
            }
        }
        .header-right {
            display: inline-block;
            width: calc(100% - 750px);
        }
        .cm-date-picker {
            padding: 0;
            font-size: 12px;
            input {
                text-align: center;
            }
        }
        .auto-btn {
            top: 30px;
            right: 121px;
        }
        .time-box {
            margin-right: 15px;
        }
        .remind {
            margin-top: 12px;
        }
    }
    /* 投注详情 及 清空记录按钮 区域 */
    .auto-betting-info {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 62px;
        font-size: 12px;
        padding: 5px 12px;
        .info-left {
            display: inline-block;
            box-sizing: border-box;
            width: 750px;
        }
        .info-right {
            display: inline-block;
            width: calc(100% - 750px);
        }
    }
    /* 表格区域 */
    .auto-betting-table {
        width: 100%;
        position: absolute;
        top: 162px;
        bottom: 30px;
        // border: 1px solid #ddd;
        overflow: scroll;
    }
</style>
    