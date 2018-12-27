import React, { Component } from 'react';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn'; // 时间组件中文
import { withRouter, HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import createHistory from 'history/createHashHistory';
// 登录页
import Login from '@/views/Login';
// 主页
import Home from '@/views/Home';

const history = createHistory();

// @withRouter
class GetRouter extends Component {
    render() {
        return (
            <LocaleProvider locale={zhCN}>
                <Router>
                    <Switch>
                        <Route path="/login" component={ Login } history={ history } />
                        <Route path="/home" component={ Home } history={ history } />
                        <Redirect to="/login" />
                    </Switch>
                </Router>
            </LocaleProvider>
        )
    }   
}

export default GetRouter;