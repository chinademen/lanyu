/* 音乐列表 */
import React, { Component, Fragment } from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { Icon, Button, message } from 'antd';
import { musicName } from '@/config/room';
import './index.less';

// 提示框
message.config({ top: 100, delay: 2, maxCount: 1 });

@withRouter
@inject('commonStore', 'socketioStore')
@observer
class MusicTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeMusic: 0, // 当前选中的歌曲
        };
    }

    // 生成音乐列表
    createMusic = activeMusic => {
        const list = musicName.map((item, index) => {
            const cls = activeMusic === index ? 'music_item active' : 'music_item';
            return (
                <li className={cls} key={[index]} onClick={() => this.changeMusic(index)}>
                    {item}
                </li>
            );
        });
        return list;
    }

    // 切换音乐
    changeMusic = index => {
        message.info('该功能尚未开放，敬请期待！')
        this.setState({
            activeMusic: index,
        });
    }

    render() {
        const { activeMusic } = this.state;

        return (
            <ul className="music_box">
                <h4>心随乐动 畅想自由</h4>
                {this.createMusic(activeMusic)}
            </ul>
        )
    }
}

export default MusicTab;