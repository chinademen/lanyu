import { listAddKey } from '@/util/format';
// 1. 定义action type
// 修改store的action
export const CHANGE_MEMBERLIST = 'CHANGE_MEMBERLIST';   
// 和后台的数据交互的action   
export const MEMBER_MEMBERLIST = 'MEMBER_MEMBERLIST';   // 会员信息列表
export const MEMBER_ADDMEMBER = 'MEMBER_ADDMEMBER';     // 新增会员
export const MEMBER_EDITMEMBER = 'MEMBER_EDITMEMBER';   // 修改会员

// 3. 定义reducer
// 初始化state
const initState = {
    data: [],   // 表格数据
};

const member = (state = initState, action) => {
   switch(action.type) {
        case CHANGE_MEMBERLIST: {
            const { payload } = action;
            const data = payload;
            listAddKey(data);
            return { ...state, data }
        }
    }
    return state;
};

export default member;
