import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'

Vue.use(Vuex)

const state = {
    modules  : [
        {
            type : 'pic',
            alias: '背景',
            style: {},
            data : {
                src: 'https://img.alicdn.com/imgextra/i3/92779311/TB2SLQmbxaJ.eBjSsziXXaJ_XXa-92779311.png'
            }
        },
        {
            type : 'pic',
            alias: '标题',
            style: {},
            data : {
                src: 'https://img.alicdn.com/imgextra/i2/92779311/TB22cQobCiJ.eBjSspoXXcpMFXa-92779311.png'
            }
        },
        {
            type : 'myPrize',
            alias: '我的奖品',
            style: {
                width : '80px',
                height: '50px'
            },
            data : {}
        },
        {
            type : 'rule',
            alias: '游戏规则',
            style: {
                width : '80px',
                height: '50px'
            },
            data : {
                type: 1,
            }
        }
    ],
    curModule: {}
}

const mutations = {
    [types.UPDATE_MODULE](state, {index, module}) {
        state.modules[index] = module
    },

    [types.ACTIVE_MODULE](state, {module}) {
        state.curModule = module
    },
}

const actions = {
    updateModule ({commit}, {module, style, data}) {
        let index = state.modules.indexOf(module)
        let item  = state.modules[index]

        if (data) item.data = data

        if (style) {
            for (let p in style) {
                if (!style.hasOwnProperty(p)) continue;
                let property = style[p]

                // 转换单位为rem
                if (property.endsWith('px')) {
                    style[p] = `${window.hotcss.px2rem(parseFloat(property), 750)}rem`
                }
            }

            item.style = style
        }

        commit(types.UPDATE_MODULE, {index, module})
    },

    activeModule({commit}, {module}) {
        commit(types.ACTIVE_MODULE, {module})
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