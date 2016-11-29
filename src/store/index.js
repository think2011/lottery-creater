import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'

Vue.use(Vuex)

const state = {
    modules  : [],
    curModule: {}
}

const mutations = {
    [types.INIT_MODULE](state, {modules}) {
        state.modules = modules
    },
    [types.UPDATE_MODULE](state, {index, module}) {
        state.modules[index] = module
    },

    [types.SET_ACTIVE_MODULE](state, {module}) {
        state.curModule = module
    },
}

const actions = {
    initModule({commit}, modules) {
        modules.forEach((item) => {
            item.style = convertRem(item.style)
        })

        commit(types.INIT_MODULE, {modules})
    },

    updateModule ({commit}, {module, style, data}) {
        let index = state.modules.indexOf(module)
        let item  = state.modules[index]

        if (data) item.data = data

        if (style) {
            item.style = convertRem(style)
        }

        commit(types.UPDATE_MODULE, {index, module})
    },

    activeModule({commit}, {module}) {
        commit(types.SET_ACTIVE_MODULE, {module})
    }
}

const getters = {
    modules  : state => state.modules,
    curModule: state => state.curModule,
}

export default new Vuex.Store({
    actions,
    getters,
    state,
    mutations
})


/**
 * 转换 style 里面的 px 单位为 rem
 * @param style
 * @returns {*}
 */
function convertRem(style) {
    for (let p in style) {
        if (!style.hasOwnProperty(p)) continue;
        let property = style[p]

        // 转换单位为rem
        if (`${property}`.endsWith('px')) {
            style[p] = `${window.hotcss.px2rem(parseFloat(property), 750)}rem`
        }
    }

    return style
}