/* 其他社区 */
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Carousel } from 'antd';
import { category } from '@/config/tabsMenu';
import './index.less';

@inject('commonStore', 'forumStore')
@observer
class OtherCommunity extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    // 论坛分类 category 11

    // 改变当前贴吧社区
    changeForum(forumid) {
        this.props.forumStore.setForumid(forumid);
        this.props.forumStore.getForumListZone(forumid);
    }

    render() {
        return (
            <div className="other-community">
            <Carousel
                infinite={true}
                speed={500}
                slidesToShow={6}
                slidesToScroll={6}
            >
                <div className="community-box">
                    <div className="community-title community-title-odd">
                        <a onClick={() => this.changeForum(1)}>彩界新闻</a>
                    </div>
                    <ul>
                        <li style={{ marginRight: 32.5 }}>
                            <a title="综合讨论区" style={{ color: '#e22e1c' }}>综合</a>
                        </li>
                        <li>
                            <a title="求助问答" style={{ color: '#299f00' }}>求助</a>
                        </li>
                        <li style={{ marginLeft: 32.5 }}>
                            <a title="热门活动" style={{ color: '#e22e1c' }}>活动</a>
                        </li>
                        <li style={{ marginRight: 32.5 }}>
                            <a title="好贴">好贴</a>
                        </li>
                        <li style={{ marginRight: 32.5 }}>
                            <a title="新闻">新闻</a>
                        </li>
                        <li>
                            <a style={{ color: '#e22e1c' }} title="攻略">攻略</a>
                        </li>
                    </ul>
                </div>
                <div className="community-box">
                    <div className="community-title community-title-even">
                        <a onClick={() => this.changeForum(2)}>彩界问答</a>
                    </div>
                    <ul>
                        <li style={{ marginRight: 32.5 }}>
                            <a title="旅行" style={{ color: '#e22e1c' }}>旅行</a>
                        </li>
                        <li>
                            <a title="美食" style={{ color: '#299f00' }}>美食</a>
                        </li>
                        <li style={{ marginLeft: 32.5 }}>
                            <a title="游戏" style={{ color: '#e22e1c' }}>游戏</a>
                        </li>
                        <li style={{ marginRight: 32.5 }}>
                            <a title="体育">体育</a>
                        </li>
                        <li style={{ marginRight: 32.5 }}>
                            <a title="摄影">摄影</a>
                        </li>
                        <li>
                            <a style={{ color: '#e22e1c' }} title="英语">英语</a>
                        </li>
                    </ul>
                </div>
                <div className="community-box">
                    <div className="community-title community-title-odd">
                        <a onClick={() => this.changeForum(3)}>美色论坛</a>
                    </div>
                    <ul>
                        <li style={{ marginRight: 40 }}>
                            <a title="声色讨论" style={{ color: '#e22e1c' }}>声色讨论</a>
                        </li>
                        <li>
                            <a title="性息体验" style={{ color: '#299f00' }}>性息体验</a>
                        </li>
                        <li style={{ marginRight: 51 }}>
                            <a title="黑点曝光" style={{ color: '#e22e1c' }}>黑点曝光</a>
                        </li>
                        <li>
                            <a title="藏经阁">藏经阁</a>
                        </li>
                    </ul>
                </div>
                <div className="community-box">
                    <div className="community-title community-title-even">
                        <a onClick={() => this.changeForum(4)}>经验论坛</a>
                    </div>
                    <ul>
                        <li style={{ marginRight: 32.5 }}>
                            <a title="换汇" style={{ color: '#e22e1c' }}>换汇</a>
                        </li>
                        <li>
                            <a title="黄页" style={{ color: '#299f00' }}>黄页</a>
                        </li>
                        <li style={{ marginLeft: 32.5 }}>
                            <a title="商业" style={{ color: '#e22e1c' }}>商业</a>
                        </li>
                        <li style={{ marginRight: 32.5 }}>
                            <a title="二手">二手</a>
                        </li>
                        <li style={{ marginRight: 32.5 }}>
                            <a title="房屋">房屋</a>
                        </li>
                        <li>
                            <a style={{ color: '#e22e1c' }} title="签证">签证</a>
                        </li>
                    </ul>
                </div>
                <div className="community-box">
                    <div className="community-title community-title-odd">
                        <a onClick={() => this.changeForum(5)}>担保合作</a>
                    </div>
                    <ul>
                        <li style={{ marginRight: 27.5 }}>
                            <a title="菠菜圈" style={{ color: '#e22e1c' }}>菠菜圈</a>
                        </li>
                        <li>
                            <a title="股票" style={{ color: '#299f00' }}>股票</a>
                        </li>
                        <li style={{ marginLeft: 27.5 }}>
                            <a title="期货" style={{ color: '#e22e1c' }}>期货</a>
                        </li>
                        <li style={{ marginRight: 27.5 }}>
                            <a title="东南亚">东南亚</a>
                        </li>
                        <li style={{ marginRight: 27.5 }}>
                            <a title="招聘">招聘</a>
                        </li>
                        <li>
                            <a style={{ color: '#e22e1c' }} title="求职">求职</a>
                        </li>
                    </ul>
                </div>
                <div className="community-box">
                    <div className="community-title community-title-even">
                        <a onClick={() => this.changeForum(6)}>信誉平台</a>
                    </div>
                    <ul>
                        <li style={{ marginRight: 40 }}>
                            <a title="站务公告" style={{ color: '#e22e1c' }}>站务公告</a>
                        </li>
                        <li>
                            <a title="投诉申诉" style={{ color: '#299f00' }}>投诉申诉</a>
                        </li>
                        <li style={{ marginRight: 40 }}>
                            <a title="版主招募" style={{ color: '#e22e1c' }}>版主招募</a>
                        </li>
                        <li>
                            <a title="建议反馈">建议反馈</a>
                        </li>
                    </ul>
                </div>
                <div className="community-box">
                    <div className="community-title community-title-odd">
                        <a onClick={() => this.changeForum(7)}>信誉代理</a>
                    </div>
                    <ul>
                        <li style={{ marginRight: 77 }}>
                            <a title="灌水" style={{ color: '#e22e1c' }}>灌水</a>
                        </li>
                        <li>
                            <a title="乐天堂" style={{ color: '#299f00' }}>乐天堂</a>
                        </li>
                    </ul>
                </div>
                <div className="community-box">
                    <div className="community-title community-title-even">
                        <a onClick={() => this.changeForum(8)}>合作伙伴</a>
                    </div>
                    <ul>
                        <li style={{ marginRight: 32.5 }}>
                            <a title="旅行" style={{ color: '#e22e1c' }}>旅行</a>
                        </li>
                        <li>
                            <a title="美食" style={{ color: '#299f00' }}>美食</a>
                        </li>
                        <li style={{ marginLeft: 32.5 }}>
                            <a title="游戏" style={{ color: '#e22e1c' }}>游戏</a>
                        </li>
                        <li style={{ marginRight: 32.5 }}>
                            <a title="体育">体育</a>
                        </li>
                        <li style={{ marginRight: 32.5 }}>
                            <a title="摄影">摄影</a>
                        </li>
                        <li>
                            <a style={{ color: '#e22e1c' }} title="英语">英语</a>
                        </li>
                    </ul>
                </div>
                <div className="community-box">
                    <div className="community-title community-title-odd">
                        <a onClick={() => this.changeForum(9)}>周边业务</a>
                    </div>
                    <ul>
                        <li style={{ marginRight: 40 }}>
                            <a title="声色讨论" style={{ color: '#e22e1c' }}>声色讨论</a>
                        </li>
                        <li>
                            <a title="性息体验" style={{ color: '#299f00' }}>性息体验</a>
                        </li>
                        <li style={{ marginRight: 51 }}>
                            <a title="黑点曝光" style={{ color: '#e22e1c' }}>黑点曝光</a>
                        </li>
                        <li>
                            <a title="藏经阁">藏经阁</a>
                        </li>
                    </ul>
                </div>
                <div className="community-box">
                    <div className="community-title community-title-even">
                        <a onClick={() => this.changeForum(10)}>新开平台</a>
                    </div>
                    <ul>
                        <li style={{ marginRight: 27.5 }}>
                            <a title="菠菜圈" style={{ color: '#e22e1c' }}>菠菜圈</a>
                        </li>
                        <li>
                            <a title="股票" style={{ color: '#299f00' }}>股票</a>
                        </li>
                        <li style={{ marginLeft: 27.5 }}>
                            <a title="期货" style={{ color: '#e22e1c' }}>期货</a>
                        </li>
                        <li style={{ marginRight: 27.5 }}>
                            <a title="东南亚">东南亚</a>
                        </li>
                        <li style={{ marginRight: 27.5 }}>
                            <a title="招聘">招聘</a>
                        </li>
                        <li>
                            <a style={{ color: '#e22e1c' }} title="求职">求职</a>
                        </li>
                    </ul>
                </div>
                <div className="community-box">
                    <div className="community-title community-title-odd">
                        <a onClick={() => this.changeForum(11)}>招聘求职</a>
                    </div>
                    <ul>
                        <li style={{ marginRight: 77 }}>
                            <a title="灌水" style={{ color: '#e22e1c' }}>灌水</a>
                        </li>
                        <li>
                            <a title="乐天堂" style={{ color: '#299f00' }}>乐天堂</a>
                        </li>
                    </ul>
                </div>
            </Carousel>
                {/* <ul className="community-ul">
                    <li className="community-item"></li>
                </ul> */}
            </div>
        )
    }
}

export default OtherCommunity
