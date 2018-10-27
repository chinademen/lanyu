import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Header from '@/components/Header';

@inject('commonStore', 'homeStore', 'lotteryStore')
@observer
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        console.log(this.props);
    }

    render() {

        return (
            <div>
                <Header />
            </div>
        )
    }
}

export default Home;
