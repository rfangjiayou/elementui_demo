import Vue from 'vue'
import Vuex from 'vuex'

import leftMenu from './modules/left-menu'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        leftMenu,
    }
})
