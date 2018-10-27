import React, { Component } from 'react';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn'; // 时间组件中文
import { withRouter, HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import createHistory from 'history/createHashHistory';
// 主页
import Home from '@/views/Home';
// 游戏页
import Lottery from '@/views/Lottery';
// 图表分析
import Chart from '@/views/Chart';

const history = createHistory();

// @withRouter
class GetRouter extends Component {
    render() {
        return (
            <LocaleProvider locale={zhCN}>
                <Router>
                    <Switch>
                        <Route path="/home" component={ Home } history={ history } />
                        <Route path="/lottery/:id" component={ Lottery } history={ history } />
                        <Route path="/chart/:id" component={ Chart } history={ history } />
                        <Redirect to="/home" />
                    </Switch>
                </Router>
            </LocaleProvider>
        )
    }   
}

export default GetRouter;