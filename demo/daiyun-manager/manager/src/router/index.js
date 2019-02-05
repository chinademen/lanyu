import React, { Component } from 'react';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn'; // 时间组件中文
import { withRouter, HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import createHistory from 'history/createHashHistory';
// 登录页面
import Login from '@/views/login';
// 公共模板
import layout from '@/views/layout';

const history = createHistory();

// @withRouter
class GetRouter extends Component {
    render() {
        return (
            <LocaleProvider locale={zhCN}>
                <Router>
                    <Switch>
                        <Route path="/login" component={ Login }  history={ history } />
                        <Route path="/" component={ layout }  history={ history } />
                        <Redirect exact replace to='/' />
                    </Switch>
                </Router>
            </LocaleProvider>
        )
    }   
}

export default GetRouter;