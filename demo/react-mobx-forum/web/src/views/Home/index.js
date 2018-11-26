import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Header from '@/components/Header';
// import Footer from '@/components/Footer';
import Container from './Container';

@inject('commonStore')
@observer
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount(){
        document.getElementById('root').scrollIntoView(true); //为ture返回顶部，false为底部
    }

    render() {

        return (
            <div className="home">
                <Header />
                <Container />
                {/* <Header />
                <Container />
                <Footer /> */}
            </div>
        )
    }
}

export default Home
