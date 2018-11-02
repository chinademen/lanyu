import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import moment from 'moment';
import Content from './content';

@inject('commonStore', 'homeStore', 'lotteryStore')
@observer
class LotteryContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            endTimes: [0, 0, 0, 0, 0, 0],
        };
    }

    componentDidMount() {
        setInterval(() => {
            this.getEndTimes()
        }, 1000)
    }

    componentWillUnmount() {
        var end = setTimeout(function(){},1);
        var start = (end -1000) > 0 ? end - 100:0;
        for(var i = start; i <= end; i++){
            clearTimeout(i);
        }
    }

    /* 倒计时 */
    getEndTimes() {
        let m1 = moment('2018-10-29 10:00:20'),
        m2 = moment((new Date()).getTime()),
        du = moment(m1 - m2).format('HHmmss');
        let endTimes = [];
        for (let i of du) {
            if (i !== ':') {
                endTimes.push(i); 
            }
        }
        this.setState({ endTimes });
    }

    render() {
        const { endTimes } = this.state;
        return (
            <div className="lotteryBox">
                {/* nav */}
                <nav>
                    {/* logo */}
                    <div className="logo"></div>
                    {/* 倒计时 */}
                    <div className="times">
                        <span className="times-name">{this.props.commonStore.currentLottertyName}</span>
                        <span className="times-number">第<em>181028082</em>期</span>
                        <span className="times-end">
                            投注截止：
                            <em>{endTimes[0]}</em>
                            <em>{endTimes[1]}</em>
                            <span>:</span>
                            <em>{endTimes[2]}</em>
                            <em>{endTimes[3]}</em>
                            <span>:</span>
                            <em>{endTimes[4]}</em>
                            <em>{endTimes[5]}</em>
                        </span>
                    </div>
                    {/* 上期开奖 */}
                    <div className="prevNumber">
                        <span>上期开奖号码</span>
                        <span className="times-number">第<em>18102872 </em>期</span>
                        <span>官方开奖</span>
                        <ul>
                            <li>3</li>
                            <li>2</li>
                            <li>3</li>
                            <li>7</li>
                            <li>3</li>
                        </ul>
                        <p>提示：当天 23 点至次日 01 点   当日共有 96 期</p>
                    </div>
                    {/* 投注详情 */}
                    <div className="details">
                        <span>投注记录</span>
                        <span>开奖说明</span>
                    </div>
                </nav>
                {/* 主要内容区 */}
                <main>
                    {/* 左侧选码区域 */}
                    <div className={"clearfix mainLeft"}>
                        <Content />
                    </div>
                    {/* 右侧 */}
                    <div className={"clearfix mainRight"}>
                        历史开奖记录
                    </div>
                </main>
            </div>
        )
    }
}
export default LotteryContainer;