import React, { Component } from 'react'
import logo from '@/assets/images/carousel/img0.png'
import './index.less'

export default class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="nav">
                <img className='logo' src={logo}></img>
            </div>
        )
    }
}