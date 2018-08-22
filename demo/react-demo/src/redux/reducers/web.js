import { listAddKey } from '@/util/format';
// 1. 定义action type
// 修改store的action
export const CHANGE_UPLOADCOMPANYLOGO = 'CHANGE_UPLOADCOMPANYLOGO';   
// 和后台的数据交互的action   
export const WEB_UPLOADCOMPANYLOGO = 'WEB_UPLOADCOMPANYLOGO';   // 上传公司LOGO

// 3. 定义reducer
// 初始化state
const initState = {
    data: [],   // 表格数据
};

const web = (state = initState, action) => {
   switch(action.type) {
        case CHANGE_UPLOADCOMPANYLOGO: {
            const { payload } = action;
            return { ...state, ...payload }
        }
    }
    return state;
};

export default web;
