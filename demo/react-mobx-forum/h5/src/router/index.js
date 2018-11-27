import React, { Component } from 'react';
import 'moment/locale/zh-cn'; // 时间组件中文
import { withRouter, HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import createHistory from 'history/createHashHistory';
// 主页
import Home from '@/views/Home';

const history = createHistory();

// @withRouter
class GetRouter extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/home" component={ Home } history={ history } />
                    <Redirect to="/home" />
                </Switch>
            </Router>
        )
    }   
}

export default GetRouter;