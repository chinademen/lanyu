import React, {PureComponent} from 'react';
import { Layout, Icon, Dropdown, Menu, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import './GlobelHeader.less';
const { Header } = Layout;

class GlobelHeader extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const { collapsed, toggle, userAccount, currentCompanyName, info1, info2, onMenuClick, getCompany } = this.props;
        const menu = (
            <Menu className="menu" selectedKeys={[]} onClick={onMenuClick}>
                <Menu.Item key="editPassWord">
                    <Icon type="key" />修改密码
                </Menu.Item>
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
                    <Link 
                        to={{
                            pathname: "/",
                            state: {info1: '1'}
                        }}
                        replace
                    >
                        <span>消息1
                            <cite>{info1}</cite>
                        </span>
                    </Link>
                    <Link 
                        to={{
                            pathname: "/",
                            state: {info2: '1'}
                        }} 
                        replace
                    >
                        <span>消息2
                            <cite>{info2}</cite>
                        </span>
                    </Link>
                    <Dropdown overlay={menu}>
                        <span className="account">
                            <Avatar size="small" className="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                            <span>{userAccount}</span>
                        </span>
                    </Dropdown>
                    <span onClick={getCompany}>{currentCompanyName}</span>
                </div>
            </Header>
        );
    }
}

export default GlobelHeader;