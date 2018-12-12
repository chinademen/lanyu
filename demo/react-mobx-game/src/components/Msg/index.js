import React, { Component } from 'react';
import './index.less';

export default class Msg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: [], // 后台推送的消息队列
            // times: 3000, // 每条消息显示时间
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
    }

    // 生成消息
    createMsg = msg => {
        const list = msg.map((a, i) => {
            return (
                <li key={[i]}>
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

    render() {
        const { msg } = this.state;

        return (
            <ul className="msg">
                {this.createMsg(msg)}
            </ul>
        )
    }
}