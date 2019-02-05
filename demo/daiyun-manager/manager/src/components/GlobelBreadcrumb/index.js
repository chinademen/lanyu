import React, { Component } from 'react';
import { Breadcrumb, Card } from 'antd';

import './index.less';

class GlobelBreadcrumb extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const { breadcrumbName } = this.props;

        return (
            <Card>
                <Breadcrumb>
                    {breadcrumbName.map(item => {
                        return (
                            <Breadcrumb.Item key={item}>
                                <span>{item}</span>
                            </Breadcrumb.Item>
                        )
                    })}
                </Breadcrumb>
            </Card>
        );
    }
}

export default GlobelBreadcrumb;