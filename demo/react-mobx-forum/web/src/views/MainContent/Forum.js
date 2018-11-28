/* 论坛 */
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import './index.less';

@inject('commonStore', 'forumStore')
@observer
class Forum extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        const { forumid } = this.props.forumStore;
        this.props.forumStore.getForumListZone(forumid)
    }

    // 改变当前贴吧社区
    changeForum(forumid) {
        this.props.forumStore.setForumid(forumid);
        this.props.forumStore.getForumListZone(forumid);
    }

    // 收起/展开 指定讨论区
    toggleForum(forumid) {
        this.props.forumStore.setCloseForumList(forumid)
    }

    // 跳转到 讨论区页 || 帖子
    changeView(name, forumid) {
        this.props.forumStore.setForumid(forumid);
        this.props.commonStore.changeCurrentView(name)
    }

    // 渲染分区列表
    drawForumList(forumZoneList, closeForumList) {
        if (forumZoneList) {
            const list = forumZoneList.map(item => {
                const { forumid, title, moderator, children } = item;
                const isShow = !closeForumList.includes(forumid) ? 'block' : 'none';
                const imgName = !closeForumList.includes(forumid) ? 'no' : 'yes';
                return (
                    <div className="forum-bg" key={forumid}>
                        <span className="onOff">
                            <img src={require(`../../static/images/collapsed_${imgName}.gif`)} alt="收起/展开" onClick={() => this.toggleForum(forumid)} />
                        </span>
                        <h2>
                            <a onClick={() => this.changeForum(forumid)}>{title}</a>
                        </h2>
                        <p style={{ fontSize: 13, color: '#999999' }}>分区版主: 
                            <a className="notabs">{moderator[0]}</a>, 
                            <a className="notabs">{moderator[1]}</a>
                        </p>
                        <ul className="forum-list clearfix" style={{ display: isShow }}>
                            {this.drawForumChildList(children, forumid)}
                        </ul>
                    </div>
                )                
            });
            return list;
        }
    }

    // 渲染分区内子列表
    drawForumChildList(list, forumid) {
        if (list && list.length > 0) {
            const arr = list.map((item, index) => {
                const { logoUrl, title, views, introduce, theme, answer, news, lasttime, author } = item;
                return (
                    <li className="forum-item" key={[index]}>
                        <div className="img-box">
                            <img src={require(`../../static/images/common/common_icon${forumid}-${index+1}.png`)} alt="用户头像" width="75" height="75" />
                        </div>
                        <section className="bankuai-intro">
                            <h2>
                                <a onClick={() => this.changeView('forumDetails', forumid)}>{title || ''}</a>
                            </h2>
                            <span className="fatieliang">今日:{views || 0}</span>
                            <p className="bankuai-jieshao">{introduce}</p>
                            <p className="bankuai-fenlei">
                                <a>好文转载</a><span>|</span>
                                <a>综合讨论</a><span>|</span>
                                <a>每日话题</a><span>|</span>
                                <a>爆料</a>
                            </p>
                        </section>
                        <section className="zhuti-num">
                            <h2>{theme || 0}</h2>
                            <p>主题</p>
                        </section>
                        <section className="tiezi-num">
                            <h2>{answer || 0}</h2>
                            <p>回复</p>
                        </section>
                        <section className="zuixin-tiezi">
                            <a className="xi2" onClick={() => this.changeView('article', forumid)}>{news}</a>
                            <p>
                                <span className="publish-time">
                                    <span title="2018-11-26 12:45">7&nbsp;秒前</span>
                                </span> 
                                <span className="tiezi-author">
                                    <a>{author}</a>
                                </span>
                            </p>
                        </section>
                    </li>
                )
            });
            return arr;
        }
    }

    render() {
        const { forumZoneList, closeForumList } = this.props.forumStore;

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
                        欢迎新会员: <em><a style={{ color: '#839BB4' }}>amao123</a></em>
                    </p>
                    <div style={{ float: "right" }}>
                        <a title="最新回复" style={{ color: '#839BB4' }}>最新回复</a>
                    </div>
                </div>
                <div className="forum-body">
                    {this.drawForumList(forumZoneList, closeForumList)}
                    {/* <div className="forum-bg">
                        <h2>彩界新闻</h2>
                        <p style={{ fontSize: 13, color: '#999999' }}>分区版主: 
                            <a className="notabs">我是一条小青龙</a>, 
                            <a className="notabs">omanikati</a>
                        </p>
                        <ul className="forum-list clearfix">
                            <li className="forum-item">
                                <div className="img-box">
                                    <img src={require('../../static/images/common_icon1.png')} alt="用户头像" />
                                </div>
                                <section className="bankuai-intro">
                                    <h2><a>彩界新闻</a></h2>
                                    <span className="fatieliang">今日:2664</span>
                                    <p className="bankuai-jieshao">聊你所想的，所说的。</p>
                                    <p className="bankuai-fenlei">
                                        <a>好文转载</a><span>|</span>
                                        <a>综合讨论</a><span>|</span>
                                        <a>每日话题</a><span>|</span>
                                        <a>爆料</a>
                                    </p>
                                </section>
                                <section className="zhuti-num">
                                    <h2>11.6万</h2>
                                    <p>主题</p>
                                </section>
                                <section className="tiezi-num">
                                    <h2>204.9万</h2>
                                    <p>回复</p>
                                </section>
                                <section className="zuixin-tiezi">
                                    <a className="xi2">神了！菲律宾打车，居然还有这样大家拉三等奖卡圣诞节快乐</a>
                                    <p>
                                        <span className="publish-time">
                                            <span title="2018-11-26 12:45">7&nbsp;秒前</span>
                                        </span> 
                                        <span className="tiezi-author">
                                            <a>yammy</a>
                                        </span>
                                    </p>
                                </section>
                            </li>
                            <li className="forum-item">
                                <div className="img-box">
                                    <img src={require('../../static/images/common_icon2.png')} alt="用户头像" />
                                </div>
                                <section className="bankuai-intro">
                                    <h2><a>彩界新闻</a></h2>
                                    <span className="fatieliang">今日:2664</span>
                                    <p className="bankuai-jieshao">聊你所想的，所说的。</p>
                                    <p className="bankuai-fenlei">
                                        <a>好文转载</a><span>|</span>
                                        <a>综合讨论</a><span>|</span>
                                        <a>每日话题</a><span>|</span>
                                        <a>爆料</a>
                                    </p>
                                </section>
                                <section className="zhuti-num">
                                    <h2>11.6万</h2>
                                    <p>主题</p>
                                </section>
                                <section className="tiezi-num">
                                    <h2>204.9万</h2>
                                    <p>回复</p>
                                </section>
                                <section className="zuixin-tiezi">
                                    <a className="xi2">神了！菲律宾打车，居然还有这样 ...</a>
                                    <p>
                                        <span className="publish-time">
                                            <span title="2018-11-26 12:45">7&nbsp;秒前</span>
                                        </span> 
                                        <span className="tiezi-author">
                                            <a>yammy</a>
                                        </span>
                                    </p>
                                </section>
                            </li>
                            <li className="forum-item">
                                <div className="img-box">
                                    <img src={require('../../static/images/common_icon3.png')} alt="用户头像" />
                                </div>
                                <section className="bankuai-intro">
                                    <h2><a>彩界新闻</a></h2>
                                    <span className="fatieliang">今日:2664</span>
                                    <p className="bankuai-jieshao">聊你所想的，所说的。</p>
                                    <p className="bankuai-fenlei">
                                        <a>好文转载</a><span>|</span>
                                        <a>综合讨论</a><span>|</span>
                                        <a>每日话题</a><span>|</span>
                                        <a>爆料</a>
                                    </p>
                                </section>
                                <section className="zhuti-num">
                                    <h2>11.6万</h2>
                                    <p>主题</p>
                                </section>
                                <section className="tiezi-num">
                                    <h2>204.9万</h2>
                                    <p>回复</p>
                                </section>
                                <section className="zuixin-tiezi">
                                    <a className="xi2">神了！菲律宾打车，居然还有这样 ...</a>
                                    <p>
                                        <span className="publish-time">
                                            <span title="2018-11-26 12:45">7&nbsp;秒前</span>
                                        </span> 
                                        <span className="tiezi-author">
                                            <a>yammy</a>
                                        </span>
                                    </p>
                                </section>
                            </li>
                            <li className="forum-item">
                                <div className="img-box">
                                    <img src={require('../../static/images/common_icon4.png')} alt="用户头像" />
                                </div>
                                <section className="bankuai-intro">
                                    <h2><a>彩界新闻</a></h2>
                                    <span className="fatieliang">今日:2664</span>
                                    <p className="bankuai-jieshao">聊你所想的，所说的。</p>
                                    <p className="bankuai-fenlei">
                                        <a>好文转载</a><span>|</span>
                                        <a>综合讨论</a><span>|</span>
                                        <a>每日话题</a><span>|</span>
                                        <a>爆料</a>
                                    </p>
                                </section>
                                <section className="zhuti-num">
                                    <h2>11.6万</h2>
                                    <p>主题</p>
                                </section>
                                <section className="tiezi-num">
                                    <h2>204.9万</h2>
                                    <p>回复</p>
                                </section>
                                <section className="zuixin-tiezi">
                                    <a className="xi2">神了！菲律宾打车，居然还有这样 ...</a>
                                    <p>
                                        <span className="publish-time">
                                            <span title="2018-11-26 12:45">7&nbsp;秒前</span>
                                        </span> 
                                        <span className="tiezi-author">
                                            <a>yammy</a>
                                        </span>
                                    </p>
                                </section>
                            </li>
                            <li className="forum-item">
                                <div className="img-box">
                                    <img src={require('../../static/images/common_icon5.png')} alt="用户头像" />
                                </div>
                                <section className="bankuai-intro">
                                    <h2><a>彩界新闻</a></h2>
                                    <span className="fatieliang">今日:2664</span>
                                    <p className="bankuai-jieshao">聊你所想的，所说的。</p>
                                    <p className="bankuai-fenlei">
                                        <a>好文转载</a><span>|</span>
                                        <a>综合讨论</a><span>|</span>
                                        <a>每日话题</a><span>|</span>
                                        <a>爆料</a>
                                    </p>
                                </section>
                                <section className="zhuti-num">
                                    <h2>11.6万</h2>
                                    <p>主题</p>
                                </section>
                                <section className="tiezi-num">
                                    <h2>204.9万</h2>
                                    <p>回复</p>
                                </section>
                                <section className="zuixin-tiezi">
                                    <a className="xi2">神了！菲律宾打车，居然还有这样 ...</a>
                                    <p>
                                        <span className="publish-time">
                                            <span title="2018-11-26 12:45">7&nbsp;秒前</span>
                                        </span> 
                                        <span className="tiezi-author">
                                            <a>yammy</a>
                                        </span>
                                    </p>
                                </section>
                            </li>
                            <li className="forum-item">
                                <div className="img-box">
                                    <img src={require('../../static/images/common_icon6.png')} alt="用户头像" />
                                </div>
                                <section className="bankuai-intro">
                                    <h2><a>彩界新闻</a></h2>
                                    <span className="fatieliang">今日:2664</span>
                                    <p className="bankuai-jieshao">聊你所想的，所说的。</p>
                                    <p className="bankuai-fenlei">
                                        <a>好文转载</a><span>|</span>
                                        <a>综合讨论</a><span>|</span>
                                        <a>每日话题</a><span>|</span>
                                        <a>爆料</a>
                                    </p>
                                </section>
                                <section className="zhuti-num">
                                    <h2>11.6万</h2>
                                    <p>主题</p>
                                </section>
                                <section className="tiezi-num">
                                    <h2>204.9万</h2>
                                    <p>回复</p>
                                </section>
                                <section className="zuixin-tiezi">
                                    <a className="xi2">神了！菲律宾打车，居然还有这样 ...</a>
                                    <p>
                                        <span className="publish-time">
                                            <span title="2018-11-26 12:45">7&nbsp;秒前</span>
                                        </span> 
                                        <span className="tiezi-author">
                                            <a>yammy</a>
                                        </span>
                                    </p>
                                </section>
                            </li>
                        </ul>
                    </div> */}
                </div>
            </div>
        )
    }
}

export default Forum
