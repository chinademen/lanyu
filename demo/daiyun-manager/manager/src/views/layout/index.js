import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Layout, message } from 'antd'
import { Route, Switch } from 'react-router-dom'
import './index.less'
import { routerConfig } from '@/router/route'
import GlobelHeader from '@/components/GlobelHeader'
import SiderMenu from '@/components/SiderMenu'
import GlobelBreadcrumb from '@/components/GlobelBreadcrumb'
import { menusData } from '@/config/menus'
import { opStorage } from '@/utils/db'

message.config({ top: 100, delay: 3, maxCount: 1 });
const { Content } = Layout;

@inject(({ commonStore }) => {
  return {
    userLogout: commonStore.userLogout
  }
})
@observer
class Basic extends Component {
  state = {  
    collapsed: false,
  };

  // 目录伸缩
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  // 返回当前路由对应的面包屑
  getBreadcrumb = (pathname) => {
    for (let item in routerConfig) {
      if (pathname === item) {
        return (
          <GlobelBreadcrumb breadcrumbName={routerConfig[item].name} />
        );
      }
    }
  }

  // 返回当前路由所在组件
  getCurrentRouter = (pathname) => {
    // 根据路由返回对应的组件
    for (let item in routerConfig) {
        if (pathname === item){
            return (
              <Route path={item} component={ routerConfig[item].component } />
            );
        }
    }
  }

  // 退出
  handleMenuClick = (item) => {
    if (item.key === 'logout') {
      this.props.userLogout(res => {
        message.success(res.message)
        opStorage('game-admin', 'null')
        this.props.history.replace('/login')
      })
    }
  }

  render() {
    const { history: {location: {pathname}} } = this.props;
    const { collapsed } = this.state;
   
    // 方法
    const parentMethods = {
        toggle: this.toggle,
        onMenuClick: this.handleMenuClick,
        getCompany: this.getCompany
    };
    // 属性
    const parentProps = {
      menusData,
      collapsed,
      pathname
    };

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <SiderMenu  {...parentProps} />
        <Layout>
          <GlobelHeader {...parentProps}  {...parentMethods} />
          { this.getBreadcrumb(pathname) }
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            <Switch>
                { this.getCurrentRouter(pathname) }
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Basic