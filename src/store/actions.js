import {convertRem} from '../assets/js/common'
import * as types from './mutation-types'

export default {
    initLottery({commit, dispatch, state}, config) {
        let {modules, name, bg, toRem} = config

        if (toRem) {
            (function convertRemFn(obj) {
                if (Object.prototype.toString.call(obj) === '[object Array]') {
                    obj.forEach(convertRemFn)
                }
                else if (Object.prototype.toString.call(obj) === '[object Object]') {
                    for (let p in obj) {
                        if (!obj.hasOwnProperty(p)) continue;

                        if (/.*style$/gi.test(p)) {
                            // 转换rem
                            convertRem(obj[p])
                        }

                        // 子组件以及data
                        if (/children|data/g.test(p)) convertRemFn(obj[p])
                    }
                }
            })(modules)
        }

        commit(types.INIT_LOTTERY, config)
    },

    updateModule ({commit, state}, {module}) {
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