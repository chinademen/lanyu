import { call, put } from 'redux-saga/effects';
import { uploadCompanyLogo } from '@/services/web';   // axios
import { CHANGE_UPLOADCOMPANYLOGO } from '../reducers/web';

// worker saga  数据处理
export function* uploadCompanyLogoWork(params) {
    const response = yield call(uploadCompanyLogo, params.payload);
    if (!response) return;
    yield put({
        type: CHANGE_UPLOADCOMPANYLOGO,
        payload: response.data,
    });
}
