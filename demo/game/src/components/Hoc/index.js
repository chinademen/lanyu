/* 高阶组件, 可用于动态生成组件 */
import React, { Component, Fragment } from 'react';

const HightComponent = (MiddeleComponent) => {
    return class extends Component {
        render() {
            return (
                <Fragment>
                    <MiddeleComponent {...this.props} />
                </Fragment>
            )
        }
    }
};

export default HightComponent;