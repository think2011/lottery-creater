import {convertRem} from '../assets/js/common'
import * as types from './mutation-types'

export default {
    initModule({commit, state}, modules) {
        modules.forEach((item) => {
            item.style = convertRem(item.style)
        })

        commit(types.INIT_MODULE, {modules})
    },

    updateModule ({commit, state}, {module, style, data}) {
        let index = state.modules.indexOf(module)
        let item  = state.modules[index]

        if (data) item.data = data

        if (style) {
            item.style = convertRem(style)
        }

        commit(types.UPDATE_MODULE, {index, module})
    },

    activeModule({commit, state}, {module}) {
        commit(types.SET_ACTIVE_MODULE, {module})
    },

    fetchRule({commit, state}) {
        if (!DEV_MODE) {
            $.doAjax({
                url    : 'act-data',
                data   : {
                    needRule: true,
                },
                success: function (res) {
                    commit(types.FETCH_RULE, res.data.description)
                }
            })
        }

    },

    fetchLucyList({commit, state}) {
        if (!DEV_MODE) {
            $.doAjax({
                url : "act-data",
                data: {
                    needWinner: true
                },
                mask: false
            })
                .then(function (res) {
                    if (!res.success) return

                    if (res.data && res.data.winners && res.data.winners.length) {
                        commit(types.FETCH_LUCKY_LIST, res.data.winners)
                    } else {
                        commit(types.FETCH_LUCKY_LIST, [])
                    }
                })
        }

    },
}