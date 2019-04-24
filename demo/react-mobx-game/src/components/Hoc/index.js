/* 高阶组件, 可用于动态生成组件 */
import React, { Component, Fragment } from 'react'
import { throttle, debounce } from 'lodash'

const HightComponent = (MiddeleComponent) => {
    return class extends Component {
        constructor(props) {
            super(props);
            this.onClick = this.onClick.bind(this);
            this.onClickThrottle = throttle(this.onClick, 3000, {
                leading: true,
                trailing: false,
            });
            this.onClickDebounce = debounce(this.onClick, 3000, {
                leading: true,
                trailing: false,
            });
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