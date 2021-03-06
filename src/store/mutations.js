import * as types from './mutation-types'

export default {
    [types.INIT_LOTTERY](state, config) {
        for (let p in config) {
            if (!config.hasOwnProperty(p)) continue;

            state[p] = config[p]
        }
    },

    [types.UPDATE_MODULE](state, {module}) {
        let index = state.modules.indexOf(module)

        if (index !== -1) state.modules.splice(index, 1, module)
    },

    [types.SET_ACTIVE_MODULE](state, {module, parentModule}) {
        state.curModule = {module, parentModule}
    },

    [types.FETCH_RULE](state, desc) {
        state.gameData.rule = desc
    },

    [types.ADD_MODULE](state, module) {
        state.modules.push(module)
    },

    [types.SHOW_LABEL](state, status) {
        state.isShowLabel = status
    },

    [types.FETCH_LUCKY_LIST](state, items) {
        state.gameData.luckyList = items
    },

    [types.SET_DRAW_TOTAL](state, total) {
        state.gameData.drawTotal = total
    },

    [types.DEL_MODULE](state, {module, parentModule}) {
        if (parentModule) {
            parentModule.children.splice(parentModule.children.indexOf(module), 1)
            if (!parentModule.children.length) state.modules.splice(state.modules.indexOf(parentModule), 1)
        } else {
            state.modules.splice(state.modules.indexOf(module), 1)
        }
    },

    [types.SET_CUR_PRIZE](state, prize) {
        state.gameData.curPrize = prize
    },

    [types.SET_CUR_TWEEN_VALUE](state, value) {
        state.gameData.tweenValue = value
    },

    [types.SET_DRAW_STATE](state, value) {
        state.gameData.drawing = value
    },

    [types.SET_MOVING](state, status) {
        state.moving = status
    },

    [types.SET_LOTTERY_RESULT](state, result) {
        state.gameData.lotteryResult = result
    },

    [types.SET_USER_NICK](state, nick) {
        state.nick = nick
    },
}