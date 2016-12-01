import {convertRem} from '../assets/js/common'
import * as types from './mutation-types'

export default {
    initModule({commit, state}, modules) {
        modules.forEach((item) => {
            if (item.style) convertRem(item.style)

            if (item.children) {
                item.children.forEach((childItem) => {
                    if (childItem.style) convertRem(childItem.style)
                })
            }
        })

        commit(types.INIT_MODULE, {modules})
    },

    updateModule ({commit, state}, {module}) {
        if (module.style) {
            module.style = convertRem(module.style)
        }

        commit(types.UPDATE_MODULE, {module})
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