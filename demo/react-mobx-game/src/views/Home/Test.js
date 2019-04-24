import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import HightComponent from '@/components/Hoc'

@HightComponent
@withRouter
class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    onClick = () => {
        console.log(111111)
    }

    onClick2 = () => {
        console.log(222222)
    }

    onClick3 = () => {
        console.log(333333)
    }

    render() {
    //    console.log(this.props)
        return (
            <div style={{ position: 'absolute', top: 150 }}>
                测试页面
                <button onClick={() => this.props.onClickThrottle(this.onClick)}>节流按钮</button>
                <button onClick={() => this.props.onClickThrottle(this.onClick2)}>节流按钮2</button>
                <button onClick={() => this.props.onClickThrottle(this.onClick3)}>节流按钮3</button>

            </div>
        )
    }
}
export default Test
