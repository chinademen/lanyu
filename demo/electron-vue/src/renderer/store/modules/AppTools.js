const AppTools = {
    state: {
        isShowAppTools: true, // 是否显示左侧工具栏(平台信息)
        isShowPlatAddress: false, // 是否显示平台地址栏
        isShowHistroyNumber: false, // 是否显示历史号码栏
    },
    mutations: {
        // 本地操作
        TOGGLE_APP_TOOLS (state) {
            state.isShowAppTools = !state.isShowAppTools;
        },
        TOGGLE_PLAT_ADDRESS (state) {
            state.isShowPlatAddress = !state.isShowPlatAddress;
        },
        TOGGLE_HISTORY_NUMBER (state) {
            state.isShowHistroyNumber = !state.isShowHistroyNumber;
        },
        
        // 异步操作
    
    },
    actions: {
        ToggleAppTools ({ commit }) {
            commit('TOGGLE_APP_TOOLS')
        },
        TogglePlatAddress({ commit }) {
            commit('TOGGLE_PLAT_ADDRESS')
        },
        ToggleHistoryNumber({ commit }) {
            commit('TOGGLE_HISTORY_NUMBER')
        }
    }
}

export default AppTools
  