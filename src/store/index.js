require('babel-polyfill')

import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import  mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const act      = window.act
const settings = window.settings
const fromNick = window.fromNick
const nick     = window.nick

const state = {
    type      : '',
    name      : '',
    psdPath   : '',
    bg        : {
        style: {}
    },
    modules   : [],
    curModule : {
        module      : {},
        parentModule: {}
    },
    act       : act,
    settings  : settings,
    nick      : nick,
    fromNick  : fromNick,
    sellerId  : act.sellerId,
    activityId: settings.activityId,
    gameData  : {
        drawTotal    : 0,
        drawing      : false,
        prizes       : [],
        curPrize     : null,
        tweenValue   : null,
        lotteryResult: null,
        rule         : null,
        luckyList    : []
    },
}

export default new Vuex.Store({
    actions,
    getters,
    state,
    mutations
})
