import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    modules: [
        {
            dev  : false,
            type : 'bg',
            style: {},
            data : {
                bg: 'https://img.alicdn.com/imgextra/i3/92779311/TB2SLQmbxaJ.eBjSsziXXaJ_XXa-92779311.png'
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