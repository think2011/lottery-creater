import * as types from './mutation-types'

export default {
    [types.INIT_MODULE](state, {modules}) {
        state.modules = modules
    },

    [types.UPDATE_MODULE](state, {module}) {
        if (module._isChild) {
            let parent = module._getParent()

            state.modules[parent._getIndex()][module._getIndex()] = module
        } else {
            state.modules[module._getIndex()] = module
        }
    },

    [types.SET_ACTIVE_MODULE](state, {module}) {
        state.curModule = module
    },

    [types.FETCH_RULE](state, desc) {
        state.gameData.rule = desc
    },

    [types.SET_DRAW_TOTAL](state, total) {
        state.gameData.drawTotal = total
    },

    [types.DEL_MODULE](state, module) {
        // TODO ZH 11/30/16
        state.modules.splice(0, 5)
    },

    [types.SET_CUR_PRIZE](state, prize) {
        state.temp.prize = prize
    },
}