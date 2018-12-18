import React, { Component } from 'react';
import './index.less';

export default class Msg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: [], // 后台推送的消息队列
            times: 12000, // 每条消息显示时间
            timerArr: [], // 定时器
            max: 10, // 默认最大消息数
        };
    }

    // 接收新消息
    componentWillReceiveProps(nextProps) {
        const { msgInfo } = nextProps;
        const max = nextProps.max || this.state.max;
        const { msg } = this.state;
        if (msgInfo) {
            // 将新消息添加到消息队列
            msg.push(msgInfo);
            // 消息总数
            let len = msg.length;
            let newMsg = msg;
            // 如果设置了最大显示消息数，截取最后几条新消息
            if (len > max) {
                newMsg = msg.slice(len - max, len);
            }
            this.updateMsg(newMsg);
        }
        this.clearMsg()
    }

    // 生成消息
    createMsg = msg => {
        const list = msg.map((a, i) => {
            return (
                <li key={[i]} className="add_item">
                    <span className="closeMsg" onClick={() => this.handleCloseMsg(i)}>x</span>
                    {a}
                </li>
            );
        });
        return list;
    }

    // 关闭消息
    handleCloseMsg = (i) => {
        const { msg } = this.state;
        msg.splice(i, 1);
        this.updateMsg(msg);
    }

    // 刷新消息队列
    updateMsg = newMsg => {
        this.setState({
            msg: newMsg
        });
    }

    // 定时清除消息队列
    clearMsg = () => {
        const _this = this;
        const { times, msg, timerArr } = this.state;
        // 如果有消息队列，设置定时器定时清除信息
        if (msg.length > 0) {
            let timer = setTimeout(() => {
                // 定时12s给消息添加移除效果
                let ul = this.refs.msg;
                let li = ul.getElementsByTagName('li')[0];
                li.classList.add('remove_item');
                // 1.2s后移除第一个li以及动画特效
                let timer2 = setTimeout(() => {
                    const { msg } = _this.state;
                    li.classList.remove('remove_item');
                    li.classList.remove('add_item');
                    _this.setState({
                        msg: msg.slice(1)
                    });
                }, 1200);
                // timerArr.push(timer2);
            }, times);
            // 清除定时器
            // timerArr.push(timer);
            // console.log(timerArr);
        }
    }

    render() {
        const { msg } = this.state;

        return (
            <ul className="msg" ref="msg">
                {this.createMsg(msg)}
            </ul>
        )
    }
}