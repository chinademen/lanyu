import React, { Component } from 'react';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn'; // 时间组件中文
import { withRouter, HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import createHistory from 'history/createHashHistory';
import asyncRouter from './asyncRouter';

const history = createHistory();

// @withRouter
class GetRouter extends Component {
    render() {
        return (
            <LocaleProvider locale={zhCN}>
                <Router>
                    <Switch>
                        <Route path="/home" component={ asyncRouter.Home } history={ history } />
                        <Route path="/lottery/:id" component={ asyncRouter.Lottery } history={ history } />
                        <Route path="/chart/:id" component={ asyncRouter.Chart } history={ history } />
                        <Redirect to="/home" />
                    </Switch>
                </Router>
            </LocaleProvider>
        )
    }   
}

export default GetRouter;