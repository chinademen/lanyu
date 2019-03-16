/**
 * 高阶组件
 */
import React, { Component, Fragment } from 'react';

const Hoc = (MiddeleComponent) => {
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

export default Hoc;