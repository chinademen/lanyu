import React, { PureComponent } from 'react';
import { Layout, Menu, Icon } from 'antd';
import './SiderMenu.less';
import { Link } from 'react-router-dom';
import { opStorage } from '@/util/util';

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

class SiderMenu extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            openKeys: ['1'],       // 当前展开的 SubMenu 菜单项 key 数组
            selectedKeys: ['28'],   // 当前选中的 菜单项 数组
        };
    }

    componentDidMount() {
        // 刷新页面保留当前路由对应的menu
        const { openKeys, selectedKeys } = opStorage('game-admin');
        if (openKeys) this.setState({ openKeys });
        if (selectedKeys) this.setState({ selectedKeys });
    }

    // SubMenu 展开/关闭的回调
    onOpenChange = openKeys => {
        openKeys = [openKeys.pop()];
        // 保存当前展开的目录
        opStorage('game-admin', {
            key: 'openKeys',
            value: openKeys
        });
        // 展开当前一级目录
        this.setState({ openKeys });
    }

    // 被选中时调用
    onSelect = menu => {
        const { selectedKeys } = menu;
        // 保存当前选中的item
        opStorage('game-admin', {
            key: 'selectedKeys',
            value: selectedKeys
        });
        this.setState({ selectedKeys });
    }

    // 生成目录树
    getNavMenuItems = menusData => {
        if (menusData == null) return;
        return menusData.map(item => {
            const menuDom = this.getSubMenuOrItem(item);
            return menuDom;
        });
    }

    // 返回目录节点
    getSubMenuOrItem = item => {
        // 含有子节点
        if (item.children && item.children.some(child => child.resourceName)) {
            const childrenItems = this.getNavMenuItems(item.children);
            if (childrenItems && childrenItems.length > 0) {
                return (
                    <SubMenu  title={
                        item.iconUrl ? (
                        <span>
                            <Icon type={item.iconUrl} />
                            <span>{item.resourceName}</span>
                        </span>
                        ) : ( item.resourceName )
                    }
                    key={item.resourceId}
                    >
                    {childrenItems}
                    </SubMenu>
                );
            }

        } else {
            // 没有子节点
            return <Menu.Item key={item.resourceId}>{this.getMenuItemPath(item)}</Menu.Item>;
        }
    }

    //  创建无子节点的Menu.Item
    getMenuItemPath = item => {
       const { resourceUrl } = item;
       if (!resourceUrl) return;
        return (
            <Link 
                to={resourceUrl} 
                replace
            >
                <Icon type={item.iconUrl} />
                <span>{item.resourceName}</span>
            </Link>
        );
    }

    render() {
        const { currentCompanyName, companyLogo, menusData, collapsed } = this.props;
        const { openKeys, selectedKeys } = this.state;

        return (
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
        >
          <div className="logo" key="logo">
            <Link to="/" replace>
                <img src={companyLogo} alt="logo" />
                {collapsed || <h1>{ currentCompanyName }</h1>}
            </Link>
          </div>
          <Menu 
            theme="dark" 
            mode="inline" 
            openKeys={openKeys}
            selectedKeys={selectedKeys}
            onOpenChange={this.onOpenChange}
            onSelect={this.onSelect}
          >
            {this.getNavMenuItems(menusData)}
          </Menu>
        </Sider>
        );
    }
}

export default SiderMenu;