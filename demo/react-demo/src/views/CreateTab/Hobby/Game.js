/* Game */
import React, { Component } from 'react';
import '../CreateTab.less';

export default class Game extends Component {
    render() {
        return (
            <div className="game_container">
                <h1>文字自动换行效果</h1>
                <ul>
                    <li>
                        <span>
                            父元素：添加 
                            display: flex;
                            -ms-flex-align: stretch;
                            align-items: stretch;
                        </span>
                        <span>
                            子元素：添加
                            line-height: 37px;
                            word-break: break-all;
                        </span>
                        <span>
                            注意：父子元素都不要添加高度
                        </span>
                    </li>
                    <li>
                        <span>1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111</span>
                        <span>1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111</span>
                        <span>1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111</span>
                    </li>
                    <li>
                        <span>1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111</span>
                        <span>1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111</span>
                        <span>1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111</span>
                    </li>
                    <li>
                        <span>1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111</span>
                        <span>1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111</span>
                        <span>1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111</span>
                    </li>
                    <li>
                        <span>1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111</span>
                        <span>1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111</span>
                        <span>1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111</span>
                    </li>
                </ul>
            </div>
        )
    }
}