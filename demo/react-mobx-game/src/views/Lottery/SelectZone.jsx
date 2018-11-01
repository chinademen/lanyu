import React, { Component } from 'react';
import { Card, Tabs, Row, Col } from 'antd';
import { autoSelectNumber } from '@/config/algorithm';
import { playGroups, playMethods } from './mock';
import '@/index.less';

const tools = ["全", "大", "小", "奇", "偶", "清"];
export default class PlayGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    // 生成选码条
    createNumberCol = (obj) => {
        const no = obj.no.split('|');
        if (no && no.length > 0) {
            let arr = no.map(item => {
                return (
                    <span className="balls" key={item}>{item}</span>
                )
            });
            return arr;
        }
    }

    // 生成全大小奇偶清
    createTool = () => {
        let arr = tools.map(item => {
            return (
                <span className="balls" key={item}>{item}</span>
            )
        });
        return arr;
    }

    render() {
        const currentSelect = autoSelectNumber.ssc_sanxingzhixuan_fushi_q3;
        return (
            <div className="selectZone">
                {currentSelect && currentSelect.layout.map((item, index) => {
                    return (
                        <div key={item.title}>
                            <Row className="row">
                                <Col className="title" span={2}>{item.title}：</Col>
                                <Col span={13}>
                                    {this.createNumberCol(item)}
                                </Col>
                                <Col span={8}>
                                    {this.createTool()}
                                </Col>
                            </Row>
                        </div>
                    )
                })}
            </div>
        )
    }
}