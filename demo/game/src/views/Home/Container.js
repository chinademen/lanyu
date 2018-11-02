import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Carousel, Icon } from 'antd';
import HomeTabs from './HomeTabs';

@inject('commonStore', 'homeStore', 'lotteryStore')
@observer
class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {};
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
                    <span>【通知】彩票于2018-10-28日准时上线</span>
                    <span>【通知】彩票于2018-10-28日准时上线</span>
                    <span>【通知】彩票于2018-10-28日准时上线</span>
                    <span>【通知】彩票于2018-10-28日准时上线</span>
                    <span>【通知】彩票于2018-10-28日准时上线</span>
                    <span>【通知】彩票于2018-10-28日准时上线</span>
                </div>
                <span className="infoAfter"></span>
                {/* 主要内容区 */}
                <main>
                    {/* 左侧 */}
                    <div className={"clearfix mainLeft"}>
                        <span style={{ fontSize: '18px', fontWeight: 'bold', paddingTop: '20px', display: 'inline-block' }}>通知信息栏</span>
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
