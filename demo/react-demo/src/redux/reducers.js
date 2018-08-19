import {combineReducers} from 'redux';

import login from './reducers/login';
import member from './reducers/member';

// 使用redux自带组件combineReducers
export default combineReducers({
    login,
    member,
});