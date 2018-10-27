import { call, put } from 'redux-saga/effects';
import { memberList, addMember, editMember } from '@/services/member';   // axios
// import { memberList, addMember, editMember } from '@/services/fetchtmember';  // fetch
import { CHANGE_MEMBERLIST } from '../reducers/member';

// worker saga  数据处理
export function* memberListWork(params) {
    const response = yield call(memberList, params.payload);
    if (!response) return;
    yield put({
        type: CHANGE_MEMBERLIST,
        payload: response.data,
    });
}

export function* addMemberWork(params) {
    const response = yield call(addMember, params.payload);
    if (!response) return;
    params.callback(response);
}

export function* editMemberWork(params) {
    const response = yield call(editMember, params.payload);
    if (!response) return;
    params.callback(response);
}