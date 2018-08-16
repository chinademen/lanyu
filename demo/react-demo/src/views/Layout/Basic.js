import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Layout, message } from 'antd';
import { Route, Switch } from 'react-router-dom';
import './Basic.less';
import logo from '@/favicon.ico';
import { opStorage } from '@/util/util';
import { CHANGE_USERLOGIN, LOGIN_USERLOGOUT } from '@/redux/reducers/login';
import { routerConfig } from '@/router/route';
import GlobelHeader from '@/components/GlobelHeader/GlobelHeader';
import SiderMenu from '@/components/SiderMenu/SiderMenu';
import GlobelBreadcrumb from '@/components/GlobelBreadcrumb/GlobelBreadcrumb';

const { Content } = Layout;
message.config({
  top: 100,
  delay: 3,
  maxCount: 1,
});

class Basic extends PureComponent {
  state = {
    userAccount: null,        // 当前登录用户
    currentCompanyName: null, // 当前公司名称
    info1: 0,                 
    info2: 0, 
    menusData: [],            // 侧边栏目录树
    collapsed: false,
  };

  componentDidMount() {
    const { login, login: { userAccount }, dispatch } = this.props;
    if (userAccount !== null) {
      // 首次登录保存信息
      opStorage('manager', {
        key: 'data',
        value: login
      });
    } else {
      // 刷新页面更新store
      const data = opStorage('manager').data;
      if (!data) {
        this.props.history.replace('/user/login');
        return;
      }
      dispatch({
        type: CHANGE_USERLOGIN,
        payload: data
      })
    }
  }

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

  // 修改密码/退出 下拉开关
  handleMenuClick = ({ key }) => {
    if (key === 'editPassWord') {
      
    }

    if (key === 'logout') {
      this.props.dispatch({
        type: LOGIN_USERLOGOUT
      });
    }
  };

  render() {
    const { history: {location: {pathname}}, login: { userAccount, currentCompanyName, info1, info2, menusData } } = this.props;
    const { collapsed } = this.state;

    // 方法
    const parentMethods = {
        toggle: this.toggle,
        onMenuClick: this.handleMenuClick,
        getCompany: this.getCompany,
    };
    // 属性
    const parentProps = {
      logo,
      userAccount,
      currentCompanyName,
      menusData,
      collapsed,
      pathname,
      info1,
      info2,
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

const mapStateToProps = (state) => {
  const { login } = state;
  return ({
    login
  });
}

export default connect(mapStateToProps)(Basic);