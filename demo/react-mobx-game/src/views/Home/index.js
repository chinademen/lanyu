import React, { Component } from 'react';
import _ from 'lodash';
import { inject, observer } from 'mobx-react';
import Header from '@/components/Header';
import Msg from '@/components/Msg';

// console.log(lodash.chunk);
var users = [
    { 'user': 'barney',  'active': true },
    { 'user': 'fred' },
    { 'user': 'pebbles', 'active': false }
];
console.log(_.dropRightWhile(users, 'active'))
// => objects for ['barney']

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
            if (num < 15) {
                num++;
                this.setState({
                    num: num,
                    msgInfo: `新消息${num}`
                });
            }
        }, 3000);
    }

    render() {

        return (
            <div>
                <Header />
                <Msg msgInfo={this.state.msgInfo} />
            </div>
        )
    }
}

export default Home;
