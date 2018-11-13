const RightTabs = {
    state: {
        isShowHeader: true, // 显示隐藏头部
    },
    mutations: {
        // 本地操作
        TOGGLE_HEADER (state) {
            state.isShowHeader = !state.isShowHeader;
        }
        // 异步操作
    },
    actions: {
        toggleHeader ({ commit }) {
            commit({
                type: 'TOGGLE_HEADER',
            })
        }
    }
}

export default RightTabs