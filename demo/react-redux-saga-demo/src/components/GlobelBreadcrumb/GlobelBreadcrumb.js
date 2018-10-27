import React, { PureComponent } from 'react';
import { Breadcrumb, Card } from 'antd';

import './GlobelBreadcrumb.less';

class GlobelBreadcrumb extends PureComponent {
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