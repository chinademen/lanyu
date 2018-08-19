import { takeEvery, takeLatest } from 'redux-saga';
// login
import { LOGIN_GETVERIFY, LOGIN_USERLOGIN, LOGIN_USERLOGOUT } from '../reducers/login';
import { verrifyWork, loginWork, logoutWork } from './login';
// member
import { MEMBER_MEMBERLIST } from '../reducers/member';
import { memberListWork } from './member';

// wacther saga
function* watch() {
        // login
        yield takeLatest(LOGIN_GETVERIFY, verrifyWork);
        yield takeLatest(LOGIN_USERLOGIN, loginWork);
        yield takeLatest(LOGIN_USERLOGOUT, logoutWork);

        // member
        yield takeLatest(MEMBER_MEMBERLIST, memberListWork);
}

// root saga
export default function* rootSaga() {
    yield watch()
}