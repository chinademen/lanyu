import React, { Component } from 'react';
import './index.less';

export default class Msg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: [], // 后台推送的消息队列
            // times: 3000, // 每条消息显示时间
            timer: null, // 定时器
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
        // this.crearMsg()
    }

    // 生成消息
    createMsg = msg => {
        const len = msg.length;
        console.log(len);
        const list = msg.map((a, i) => {
            return (
                <li key={[i]} style={{ transform: 'rotateY()' }}>
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
    crearMsg = () => {
        const _this = this;
        const { msg } = this.state;
        // 如果有消息队列，设置定时器定时清除信息
        if (msg.length > 0) {
            this.setState({
                timer: setTimeout(() => {
                    // const {  } = _this.state;
                    _this.setState({
    
                    })
                }, 10000)
            });
        } else {
            // 如果没有消息队列，清除定时器
            this.setState({
                timer: null
            });
        }
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