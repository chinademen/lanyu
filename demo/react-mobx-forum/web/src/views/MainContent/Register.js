/* 注册 */
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import './index.less';

@inject('commonStore')
@observer
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="register">
                <div className="register-header">
                    <span>
                        <a href="#">已有帐号？现在登录</a>
                    </span>
                    <h3>立即注册</h3>
                </div>
                
            </div>
        )
    }
}

export default Register
