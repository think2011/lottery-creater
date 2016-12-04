import {convertRem} from '../assets/js/common'
import * as types from './mutation-types'

export default {
    initLottery({commit, state}, {modules, bg}) {
        modules.forEach((item) => {
            if (item.style) convertRem(item.style)

            if (item.children) {
                item.children.forEach((childItem) => {
                    if (childItem.style) convertRem(childItem.style)
                })
            }
        })

        bg.height = convertRem({height: bg.height}).height

        commit(types.INIT_LOTTERY, {modules, bg})
    },

    updateModule ({commit, state}, {module}) {
        if (module.style) convertRem(module.style)

        commit(types.UPDATE_MODULE, {module})
    },

    activeModule({commit, state}, {module}) {
        commit(types.SET_ACTIVE_MODULE, {module})
    },

    delModule({commit, dispatch, state}, ...args) {
        dispatch('activeModule', {module: {}})
        commit(types.DEL_MODULE, ...args)
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