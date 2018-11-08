const RightTabs = {
    state: {
        isShowWelcome: true, // 是否显示欢迎使用页
        isShowAutoBetting: false, // 是否显示自动投注页
        isShowSchemeSetting: false, // 是否显示方案设定页
        isShowReferData: false, // 是否显示参考数据页
        isShowHistoryStatic: false, // 是否显示历史统计页
        isShowSoftware: false, // 是否显示计划软件页
        isShowUserBook: false, // 是否显示用户必看页
    },
    mutations: {
        // 本地操作
        TOGGLE_TABS (state, payload) {
            const { currentTab } = payload;
            const arr = [ 'isShowWelcome', 'isShowAutoBetting', 'isShowSchemeSetting', 'isShowReferData', 'isShowHistoryStatic', 'isShowSoftware', 'isShowUserBook' ];
            arr.forEach(item => {
                state[item] = false;
            });
            state[currentTab] = true;
        },
        // 异步操作
    },
    actions: {
        ToggleTabs ({ commit }, currentTab) {
            commit({
                type: 'TOGGLE_TABS',
                currentTab,
            })
        },
    }
}

export default RightTabs