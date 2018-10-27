import React, { Component } from 'react';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn'; // 时间组件中文
import { HashRouter as Router, Route, Switch, Link, NavLink, Redirect } from 'react-router-dom';
import createHistory from 'history/createHashHistory';
// 登录页面
import Login from '@/views/User/Login';
// 公共模板
import Basic from '@/views/Layout/Basic';
// 其他独立页面

const history = createHistory();

class GetRouter extends Component {
    render() {
        return (
            <LocaleProvider locale={zhCN}>
                <Router>
                    <Switch>
                        <Route path="/user/login" component={ Login }  history={ history } />
                        {/* 其他独立页面的路由配置 */}
                        <Route path="/" component={ Basic }  history={ history } />
                    </Switch>
                </Router>
            </LocaleProvider>
        )
    }   
}

export default GetRouter;