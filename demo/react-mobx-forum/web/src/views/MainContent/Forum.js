/* 论坛 */
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import './index.less';

@inject('commonStore')
@observer
class Forum extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="forum clearfix">
                <div className="forum-header">
                    <p>
                        今日: <em>7086</em>
                        <span className="pipe">|</span>
                        昨日: <em>18552</em>
                        <span className="pipe">|</span>
                        帖子: <em>8288271</em>
                        <span className="pipe">|</span>
                        会员: <em>300924</em>
                        <span className="pipe">|</span>
                        欢迎新会员: <em><a href="#" style={{ color: '#839BB4' }}>amao123</a></em>
                    </p>
                    <div style={{ float: "right" }}>
                        <a href="#" title="最新回复" style={{ color: '#839BB4' }}>最新回复</a>
                    </div>
                </div>
                <div className="forum-body">
                    <h2>彩界新闻</h2>
                    <p style={{ fontSize: 13, color: '#999999' }}>分区版主: 
                        <a href="#" className="notabs">我是一条小青龙</a>, 
                        <a href="#" className="notabs">omanikati</a>
                    </p>
                    <ul className="forum-list clearfix">
                        <li className="forum-item">
                            <div className="img-box">
                                <img src={require('../../static/images/user_icon1.png')} alt="用户头像" />
                            </div>
                            <section className="bankuai-intro">
                                <h2><a href="forum-2-1.html">彩界新闻</a></h2>
                                <span className="fatieliang">今日:2664</span>
                                <p className="bankuai-jieshao">聊你所想的，所说的。</p>
                                <p className="bankuai-fenlei">
                                    <a href="#">好文转载</a><span>|</span>
                                    <a href="#">综合讨论</a><span>|</span>
                                    <a href="#">每日话题</a><span>|</span>
                                    <a href="#">爆料</a>
                                </p>
                            </section>
                        </li>
                        <li className="forum-item">
                            <div className="img-box">
                                <img src={require('../../static/images/user_icon2.png')} alt="用户头像" />
                            </div>
                        </li>
                        <li className="forum-item">
                            <div className="img-box">
                                <img src={require('../../static/images/user_icon3.png')} alt="用户头像" />
                            </div>
                        </li>
                        <li className="forum-item">
                            <div className="img-box">
                                <img src={require('../../static/images/user_icon4.png')} alt="用户头像" />
                            </div>
                        </li>
                        <li className="forum-item">
                            <div className="img-box">
                                <img src={require('../../static/images/user_icon5.png')} alt="用户头像" />
                            </div>
                        </li>
                        <li className="forum-item">
                            <div className="img-box">
                                <img src={require('../../static/images/user_icon6.png')} alt="用户头像" />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Forum
