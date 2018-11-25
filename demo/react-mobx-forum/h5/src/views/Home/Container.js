import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Carousel, Icon } from 'antd';
import HomeTabs from './HomeTabs';

const infoList = [
    '本周排名第一玩家：xxx1111xxx',
    '本周排名第二玩家：xxx2222xxx',
    '本周排名第三玩家：xxx3333xxx',
    '本周排名第四玩家：xxx4444xxx',
    '本周排名第五玩家：xxx5555xxx',
    '本周排名第六玩家：xxx6666xxx',
    '本日排名第七玩家：xxx7777xxx',
    '本日排名第八玩家：xxx8888xxx',
    '本日排名第九玩家：xxx9999xxx',
    '本日排名第十玩家：xxx1010xxx',
];

@inject('commonStore', 'homeStore', 'lotteryStore')
@observer
class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    createInfo(list) {
        if (list && list.length > 0) {
            const arr = list.map((item, index) => {
                return (
                    <p key={index}>{item}</p>
                )
            });
            return arr;
        }
    }

    render() {

        return (
            <div className="homeBox">
                {/* banner图 */}
                <Carousel 
                    className="homeBanner" 
                    effect="fade"
                    autoplay="true"
                >
                    <div className="homeBanner1"></div>
                    <div className="homeBanner2"></div>
                    <div className="homeBanner3"></div>
                    <div className="homeBanner4"></div>
                    <div className="homeBanner5"></div>
                </Carousel>
                {/* 广播 */}
                <Icon type="notification" theme="outlined" className="infoBefore" />
                <div className="homeInfo">
                    <span>【通知】彩票于2018-8-8日准时上线</span>
                    <span>【通知】彩票于2018-8-8日准时上线</span>
                    <span>【通知】彩票于2018-8-8日准时上线</span>
                    <span>【通知】彩票于2018-8-8日准时上线</span>
                    <span>【通知】彩票于2018-8-8日准时上线</span>
                    <span>【通知】彩票于2018-8-8日准时上线</span>
                </div>
                <span className="infoAfter"></span>
                {/* 主要内容区 */}
                <main>
                    {/* 左侧 */}
                    <div className={"clearfix mainLeft"}>
                        <span style={{ fontSize: '18px', fontWeight: 'bold', paddingTop: '20px', display: 'inline-block' }}>
                            <span>通知信息栏</span>
                            <div className="infoBox">
                                <div className="infoList">
                                    <p>每周排行榜</p>
                                    {this.createInfo(infoList)}    
                                </div>
                            </div>
                        </span>
                    </div>
                    {/* 右侧选项卡 */}
                    <div className={"clearfix mainRight"}>
                        <HomeTabs />
                    </div>
                </main>
            </div>
        )
    }
}

export default Container;
