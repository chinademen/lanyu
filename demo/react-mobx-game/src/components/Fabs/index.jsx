/*
 * 侧边悬浮组件
 */
import React, { Component, Fragment } from 'react'
import './index.less'

export default class Fabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxAnimation: null,
            btnAnimation: null,
        }
    }

    // 收起
    collapse = () => {
        this.setState({
            boxAnimation: 'fabBoxHide',
            btnAnimation: 'fabBtnShow'
        })
    }

    // 展开
    expand = () => {
        this.setState({
            boxAnimation: 'fabBoxShow',
            btnAnimation: 'fabBtnHide'
        })
    }

    render() {
        const { boxStyle, iconStyle, btnStyle } = this.props;
        const { boxAnimation, btnAnimation } = this.state;

        return (
            <Fragment>
                <div className={`cm-fabs-box ${boxAnimation}`} style={boxStyle || null}>
                    <span className="cm-fabs-icon" onClick={this.collapse} style={[iconStyle || null]}>{'<'}</span>
                </div>
                <div className={`cm-fabs-btn ${btnAnimation}`} onClick={this.expand} style={btnStyle || null}></div>
            </Fragment>
        )
    }
}
