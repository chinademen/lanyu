import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('commonStore')
@observer
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount(){
        // document.getElementById('root').scrollIntoView(true); //为ture返回顶部，false为底部
    }

    render() {

        return (
            <div className="home">

            </div>
        )
    }
}

export default Home
