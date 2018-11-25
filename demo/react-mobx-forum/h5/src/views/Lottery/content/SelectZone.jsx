import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { autoSelectNumber } from '@/config/algorithm';

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
        const { methodName } = this.props;
        const currentSelect = autoSelectNumber[methodName];

        return (
            <div className="selectZone">
                {currentSelect && currentSelect.type === 'digital' ? currentSelect.layout.map((item, index) => {
                    return (
                        <div key={item.title || index}>
                            <Row className="row">
                                <Col className="title" span={2}>{item.title}</Col>
                                <Col span={13}>
                                    {this.createNumberCol(item)}
                                </Col>
                                <Col span={8}>
                                    {this.createTool()}
                                </Col>
                            </Row>
                        </div>
                    )
                }) : currentSelect && currentSelect.type === 'danshi' ? 
                    <div className="danshi">
                        <textarea 
                            defaultValue={
                            `说明：1、支持常见的各种单式格式，间隔符如： 换行符 回车 逗号 分号等 \n           2、上传文件后缀必须是.txt格式,最大支持10万注，并支持拖拽文件到文本框进行上传 \n           3、文件较大时会导致上传时间较长，请耐心等待！ \n \n          格式范例：12345 23456 88767 33021 98897`
                            }>
                        
                        </textarea>
                    </div>
                : null
                }
            </div>
        )
    }
}