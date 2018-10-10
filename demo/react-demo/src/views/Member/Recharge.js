/* 充值页 */
import React, { Component } from 'react';
import { Card, Row, Col, Button } from 'antd';

export default class Recharge extends Component {
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
                    充值页
                </Row>
                <Row>
                    <Button type="primary" onClick={() => changeKey(1)}>返回</Button>
                </Row>
            </Card>
        )
    }
}