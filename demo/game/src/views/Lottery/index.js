import React, { Component } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LotteryContainer from './LotteryContainer';

class Lottery extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount(){
        document.getElementById('root').scrollIntoView(true); //为ture返回顶部，false为底部
    }

    render() {
        return (
            <div className="lotteryContainer">
                <Header />
                <LotteryContainer />
                <Footer />
            </div>
        )
    }
}
export default Lottery;