import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    modules: [
        {
            type  : 'bg',
            resize: false,
            alias : '背景',
            style : {},
            data  : {
                src: 'https://img.alicdn.com/imgextra/i3/92779311/TB2SLQmbxaJ.eBjSsziXXaJ_XXa-92779311.png'
            }
        },
        {
            type  : 'bg',
            resize: true,
            alias : '标题',
            style : {},
            data  : {
                src: 'https://img.alicdn.com/imgextra/i2/92779311/TB22cQobCiJ.eBjSspoXXcpMFXa-92779311.png'
            }
        },
        {
            type  : 'myPrize',
            resize: true,
            alias : '我的奖品',
            style : {
                width : '80px',
                height: '50px'
            },
            data  : {}
        },
        {
            type  : 'rule',
            resize: true,
            alias : '我的奖品',
            style : {
                width : '80px',
                height: '50px'
            },
            data  : {
                type: 1,
            }
        }
    ]
}

const mutations = {
    updateModule (state, {module, style, data}) {
        let item = state.modules[state.modules.indexOf(module)]

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
    }
}

export default new Vuex.Store({
    state,
    mutations
})