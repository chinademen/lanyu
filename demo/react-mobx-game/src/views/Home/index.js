import React, { Component } from 'react';
import _ from 'lodash';
import { inject, observer } from 'mobx-react';
import Header from '@/components/Header';

@inject('commonStore', 'homeStore', 'lotteryStore')
@observer
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
       
        };
    }

    componentDidMount() {
      
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
