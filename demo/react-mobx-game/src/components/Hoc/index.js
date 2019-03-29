/* 高阶组件, 可用于动态生成组件 */
import React, { Component, Fragment } from 'react'
import throttle from 'lodash.throttle'

const HightComponent = (MiddeleComponent) => {
    return class extends Component {
        constructor(props) {
            super(props);
            this.onClick = this.onClick.bind(this);
            this.onClickThrottle = throttle(this.onClick, 3000);
        }

        // 节流
        onClick = (event) => {
            event()
        }

        render() {
            return (
                <Fragment>
                    <MiddeleComponent {...this.props} onClickThrottle={this.onClickThrottle} />
                </Fragment>
            )
        }

        componentWillUnmount() {
            this.onClickThrottle.cancel();
        }
    }
};

export default HightComponent;