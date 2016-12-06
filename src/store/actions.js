import {convertRem} from '../assets/js/common'
import * as types from './mutation-types'

export default {
    initLottery({commit, dispatch, state}, config) {
        let {modules, name, bg} = config

        modules.forEach((item) => {
            if (item.style) convertRem(item.style)

            if (item.children) {
                item.children.forEach((childItem) => {
                    if (childItem.style) convertRem(childItem.style)
                })
            }
        })

        // 更新背景尺寸
        let img    = new Image()
        img.onload = function () {
            bg.style.minHeight = `${img.naturalHeight}px`
            dispatch('updateBg', bg)
        }
        img.src    = bg.src

        commit(types.INIT_LOTTERY, config)
    },

    updateBg ({commit, state}, bg) {
        convertRem(bg.style)
        commit(types.UPDATE_BG, bg)
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

    stopPropagation() {
        window.event.stopPropagation()
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