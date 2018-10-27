/* 取款页 */
import React, { Component } from 'react';
import { Card, Row, Col, Button } from 'antd';

export default class Draw extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const { changeKey } = this.props;
        console.log(this.props);
        return (
            <Card>
                <Row>
                    取款页
                </Row>
                <Row>
                    <Button type="primary" onClick={() => changeKey(1)}>返回</Button>
                </Row>
            </Card>
        )
    }
}