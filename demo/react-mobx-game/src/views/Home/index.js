import React, { Component } from 'react'
import _ from 'lodash'
import { inject, observer } from 'mobx-react'
import Nav from '@/components/Nav'
import NavTab from '@/components/NavTab'
import logo from '@/assets/images/carousel/img0.png'
import bg from '@/assets/images/bg.jpg'
import Test from './Test'
import './index.less'

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
            <div className='home'
                style={{ backgroundImage: `url(${bg})` }}
            >
                <div className='header'>
                    <Nav />
                    <NavTab />
                </div>
                <Test />
            </div>
        )
    }
}

export default Home;
