import React, { Component } from 'react';
import { Card, Tabs, Row } from 'antd';
import { playGroups, playMethods } from './mock';
import '@/index.less';

export default class PlayGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nextProps: null,
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ nextProps });
    }

    // 切换玩法
    changePlayName = () => {

    }
    
    createPlayMethods(nextProps) {
        let currentGroup = nextProps && nextProps.currentGroup || this.props.currentGroup;
        const currentMethods = [...playGroups.get(currentGroup)];
        let result = currentMethods.map(item => {
            return (
                <Row key={item}>
                    <span className="playMethods">{item}：</span>
                    { [...playMethods.get(item)].map(name => {
                        return <span className="playMethodName" key={name} onClick={() => this.changePlayName()}>{name}</span>;                        
                    })}
                </Row>
            )
        });
        return result;
    }

    render() {
        const { nextProps } = this.state;
        return (
            <div className="playGroup">
                {this.createPlayMethods(nextProps)}
            </div>
        )
    }
}