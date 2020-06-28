
export default {
    namespaced: true,

    state: {
        leftMenuCollapse: false,
    },

    mutations: {
        TOGGLE_LEFTMenuCOLLAPSE(state) {
            state.leftMenuCollapse = !state.leftMenuCollapse
        }
    },

    actions: {
        toggleLeftMenuCollapse({ commit }) {
            commit('TOGGLE_LEFTMenuCOLLAPSE')
        },
    }
}
