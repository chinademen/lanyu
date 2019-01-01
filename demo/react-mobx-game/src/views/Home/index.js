import React, { Component } from 'react';
import _ from 'lodash';
import { inject, observer } from 'mobx-react';
import Header from '@/components/Header';
import Msg from '@/components/Msg';
import BasicCarousel from '@/components/BasicCarousel';
import img0 from '@/assets/images/carousel/img0.png';
import img1 from '@/assets/images/carousel/img1.png';
import img2 from '@/assets/images/carousel/img2.png';
import img3 from '@/assets/images/carousel/img3.png';
import img4 from '@/assets/images/carousel/img4.png';
import img5 from '@/assets/images/carousel/img5.png';

const imgArr = [
    { src: img0, fn: () => window.open('http://www.baidu.com') },
    { src: img1, fn: () => window.open('http://www.baidu.com') },
    { src: img2, fn: () => window.open('http://www.baidu.com') },
    { src: img3, fn: () => window.open('http://www.baidu.com') },
    { src: img4, fn: () => window.open('http://www.baidu.com') },
    { src: img5, fn: () => window.open('http://www.baidu.com') },
];

// console.log(lodash.chunk);
var users = [
    { 'user': 'barney',  'active': true },
    { 'user': 'fred' },
    { 'user': 'pebbles', 'active': false }
];
// console.log(_.dropRightWhile(users, 'active'))
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
                <BasicCarousel
                    list={imgArr}
                    control={true}
                    // width={600}
                    // height={600}
                    showItems={3}
                />
                {/* <Msg msgInfo={this.state.msgInfo} /> */}
            </div>
        )
    }
}

export default Home;
