import * as types from './mutation-types'

export default {
    [types.INIT_LOTTERY](state, config) {
        for (let p in config) {
            if (!config.hasOwnProperty(p)) continue;

            state[p] = config[p]
        }
    },

    [types.UPDATE_MODULE](state, {module}) {
        if (module._isChild) {
            let parent = module._getParent()

            state.modules[parent._getIndex()].children[module._getIndex()] = module
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

    [types.DEL_MODULE](state, module, index, childIndex) {
        if (module._isChild) {
            let parent = module._getParent()

            state.modules[parent._getIndex()].children.splice(module._getIndex(), 1)
            if (!parent.children.length) state.modules.splice(parent._getIndex(), 1)
        } else {
            state.modules.splice(module._getIndex(), 1)
        }
    },

    [types.SET_CUR_PRIZE](state, prize) {
        state.gameData.curPrize = prize
    },

    [types.SET_CUR_TWEEN_VALUE](state, value) {
        state.gameData.tweenValue = value
    },

    [types.SET_LOTTERY_RESULT](state, result) {
        state.gameData.lotteryResult = result
    },

    [types.SET_USER_NICK](state, nick) {
        state.nick = nick
    },
}