import Vue from 'vue'
import Vuex from 'vuex'

import modules from './modules'

Vue.use(Vuex)

const store = new Vuex.Store({ modules })

export default store



// import Vue from 'vue'
// import Vuex from 'vuex'

// import { createPersistedState, createSharedMutations } from 'vuex-electron'

// import modules from './modules'

// Vue.use(Vuex)

// export default new Vuex.Store({
//   modules,
//   plugins: [
//     createPersistedState(),
//     createSharedMutations()
//   ],
//   strict: process.env.NODE_ENV !== 'production'
// })
