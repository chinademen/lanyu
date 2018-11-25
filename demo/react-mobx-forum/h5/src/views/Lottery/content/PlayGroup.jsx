import React, { Component } from 'react';
import { Row } from 'antd';
import { playGroups, playMethods } from './mock';

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
                    {/* <div class="playMethodsList"> */}
                        { [...playMethods.get(item)].map(name => {
                            return <span className="playMethodName" key={name} onClick={() => this.changePlayName()}>{name}</span>;                        
                        })}
                    {/* </div> */}
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