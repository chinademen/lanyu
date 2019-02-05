import React, {PureComponent} from 'react';
import { Layout, Icon, Dropdown, Menu, Avatar } from 'antd';
import './index.less';
const { Header } = Layout;

class GlobelHeader extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const { collapsed, toggle, onMenuClick } = this.props;
        const menu = (
            <Menu className="menu" selectedKeys={[]} onClick={onMenuClick}>
                <Menu.Item key="logout">
                    <Icon type="logout" />退出登录
                </Menu.Item>
            </Menu>
        );

        return (
            <Header style={{ background: '#fff', padding: 0 }}>
                <Icon
                    className="trigger"
                    type={collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={toggle}
                />
                <div className="right">
                    <Dropdown overlay={menu}>
                        <span className="account">
                            <Avatar size="small" className="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                            <span>{"管理员"}</span>
                        </span>
                    </Dropdown>
                </div>
            </Header>
        );
    }
}

export default GlobelHeader;