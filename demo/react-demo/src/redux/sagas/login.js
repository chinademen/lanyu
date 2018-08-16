import { call, put } from 'redux-saga/effects';
import { getVerify, userLogin, userLogout } from '@/services/login';
import { CHANGE_GETVERIFY, CHANGE_USERLOGIN } from '../reducers/login';
import { opStorage } from '@/util/util';
import createHistory from 'history/createHashHistory';
const history = createHistory();

// worker saga  数据处理
export function* verrifyWork(params) {
    const response = yield call(getVerify);
    yield put({
        type: CHANGE_GETVERIFY,
        payload: response,
    });
}

export function* loginWork(params) {
    const response = yield call(userLogin, params.payload);
    if (!response) return;
    
    if (response.status == 1) {
        yield put({
            type: CHANGE_USERLOGIN,
            payload: response.data,
        });
        history.replace('/');
    }   
}

export function* logoutWork(params) {
    yield call(userLogout);
    opStorage('manager', 'null');
    history.replace('/user/login');
}
