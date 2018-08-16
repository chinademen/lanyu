import {combineReducers} from 'redux';

import login from './reducers/login';

// 使用redux自带组件combineReducers
export default combineReducers({
    login,
});