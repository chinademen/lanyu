import { call, put } from 'redux-saga/effects';
import { memberList } from '@/services/member';
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
