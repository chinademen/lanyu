import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Header from '@/components/Header';
import Msg from '@/components/Msg';

@inject('commonStore', 'homeStore', 'lotteryStore')
@observer
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 0, // 消息号
            msgInfo: null, // 消息实体
        };
    }

    componentDidMount() {
        let { num } = this.state;
        setInterval(() => {
            num++;
            this.setState({
                num: num,
                msgInfo: `新消息${num}`
            });
        }, 3000);
    }

    render() {

        return (
            <div>
                <Header />
                <Msg msgInfo={this.state.msgInfo} max={5} />
            </div>
        )
    }
}

export default Home;
