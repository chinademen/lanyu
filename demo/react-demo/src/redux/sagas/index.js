import { takeEvery, takeLatest } from 'redux-saga';
// login
import { LOGIN_GETVERIFY, LOGIN_USERLOGIN, LOGIN_USERLOGOUT } from '../reducers/login';
import { verrifyWork, loginWork, logoutWork } from './login';

// wacther saga
function* watch() {
        // login
        yield takeLatest(LOGIN_GETVERIFY, verrifyWork);
        yield takeLatest(LOGIN_USERLOGIN, loginWork);
        yield takeLatest(LOGIN_USERLOGOUT, logoutWork);
}

// root saga
export default function* rootSaga() {
    yield watch()
}