import {convertRem} from '../assets/js/common'
import * as types from './mutation-types'

const mockLuckyList = [{
    "id"          : 206503,
    "activityId"  : 97,
    "buyerNick"   : "游017Pjm9PX+rIlg2SAjjqU+AR9CgaxbXsGbnd155mgDAPc=",
    "avatar"      : "https://img.alicdn.com/sns_logo/i3/128530154966431983/TB2StiCiVXXXXcXXXXXXXXXXXXX_!!0-mytaobao.jpg",
    "incomeId"    : 71,
    "chanceNo"    : "3",
    "drawTime"    : "2016-11-29 18:16",
    "drawSuccess" : true,
    "giftId"      : 14973,
    "giftName"    : "3元店铺优惠券",
    "giftNo"      : "0",
    "awardSuccess": true
}, {
    "id"          : 206502,
    "activityId"  : 97,
    "buyerNick"   : "游017Pjm9PX+rIlg2SAjjqU+AR9CgaxbXsGbnd155mgDAPc=",
    "avatar"      : "https://img.alicdn.com/sns_logo/i3/128530154966431983/TB2StiCiVXXXXcXXXXXXXXXXXXX_!!0-mytaobao.jpg",
    "incomeId"    : 70,
    "chanceNo"    : "首次必中自动生成机会",
    "drawTime"    : "2016-11-29 18:16",
    "drawSuccess" : true,
    "giftId"      : 14973,
    "giftName"    : "3元店铺优惠券",
    "giftNo"      : "0",
    "awardSuccess": true
}, {
    "id"          : 206494,
    "activityId"  : 97,
    "buyerNick"   : "p01OGT9WiOm1u7+ymabHNkbgR35CZvXrGSFdSd8/8qNK+w=",
    "avatar"      : "https://img.alicdn.com/sns_logo/i3/115678611/TB2RnwskpXXXXXlXpXXXXXXXXXX_!!0-mytaobao.jpg",
    "incomeId"    : 78,
    "chanceNo"    : "8",
    "drawTime"    : "2016-11-29 18:01",
    "drawSuccess" : true,
    "giftId"      : 14973,
    "giftName"    : "3元店铺优惠券",
    "giftNo"      : "0",
    "awardSuccess": true
}, {
    "id"          : 206483,
    "activityId"  : 97,
    "buyerNick"   : "p01OGT9WiOm1u7+ymabHNkbgR35CZvXrGSFdSd8/8qNK+w=",
    "avatar"      : "https://img.alicdn.com/sns_logo/i3/115678611/TB2RnwskpXXXXXlXpXXXXXXXXXX_!!0-mytaobao.jpg",
    "incomeId"    : 78,
    "chanceNo"    : "8",
    "drawTime"    : "2016-11-29 17:56",
    "drawSuccess" : true,
    "giftId"      : 14972,
    "giftName"    : "试试",
    "giftNo"      : "2",
    "awardSuccess": true
}]

export default {
    initLottery({commit, dispatch, state}, config) {
        let {modules, name, bg, type} = config

        let designSize = type === 'mobile' ? 750 : 1920;

        (function convertRemFn(obj, designSize) {
            if (Object.prototype.toString.call(obj) === '[object Array]') {
                obj.forEach((item) => convertRemFn(item, designSize))
            }
            else if (Object.prototype.toString.call(obj) === '[object Object]') {
                for (let p in obj) {
                    if (!obj.hasOwnProperty(p)) continue;

                    if (/.*style$/gi.test(p)) {
                        // 转换rem
                        convertRem(obj[p], designSize)
                    }

                    // 子组件以及data
                    if (/children|data/g.test(p)) convertRemFn(obj[p], designSize)
                }
            }
        })(modules)

        commit(types.INIT_LOTTERY, config)
        dispatch('initFetch')
    },


    initFetch({commit, dispatch, state}) {
        if (DEV_MODE) {
            commit(types.FETCH_RULE, '1、活动期间每个用户每天有3次抽奖机会\n2、流量包实时发放\n3、活动最终解释权归XXX所有，如有疑问请联系XXX咨询')
            commit(types.FETCH_LUCKY_LIST, mockLuckyList)
            commit(types.SET_DRAW_TOTAL, 20)
            return
        }

        let conditions = {
            needRule       : false,
            needWinner     : false,
            needRemainCount: false
        }


        if (window.remainCount == undefined && state.type !== 'pc') conditions.needRemainCount = true
        state.modules.forEach((item) => {
            if (item.type === 'rule' && item.data.type === 2) conditions.needRule = true
            if (item.type === 'luckyList') conditions.needWinner = true
        })

        dispatch('getUserNick')
            .then((nick) => {
                let params = {
                    url : "act-data",
                    data: {...conditions, nick},
                    mask: false
                }
                $.doAjax(params).then((res) => {
                    if (!res.success) return

                    if (conditions.needRule) {
                        commit(types.FETCH_RULE, res.data.description || '')
                    }

                    if (conditions.needWinner) {
                        if (res.data && res.data.winners && res.data.winners.length) {
                            commit(types.FETCH_LUCKY_LIST, res.data.winners)
                        } else {
                            commit(types.FETCH_LUCKY_LIST, [])
                        }
                    }

                    if (conditions.needRemainCount) {
                        if (res.data && res.data.remainCount) {
                            window.remainCount = res.data.remainCount;
                        }

                        commit(types.SET_DRAW_TOTAL, window.remainCount)
                    }
                })
            })
    },

    getRealNick({commit, dispatch, state}) {
        return new Promise((resolve, reject) => {
            if (window.realNick) return resolve(window.realNick)

            return dispatch('getUserNick')
                .then(() => {
                    // 这个函数从window得到nick
                    window.gameDialog.checkRealNickRequired(function (res) {
                        if (res && res.data && res.data.remainCount) {
                            window.remainCount = res.data.remainCount;
                        }

                        commit(types.SET_DRAW_TOTAL, window.remainCount)
                        commit(types.SET_USER_NICK, window.realNick)
                        resolve(window.realNick)
                    })
                })
        })
    },

    getUserNick({commit, state}) {
        return new Promise((resolve, reject) => {
            if (window.nick) {
                return resolve(window.nick)
            }

            $.tida.getUserNick(function (nick) {
                window.nick = nick
                commit(types.SET_USER_NICK, nick)
                resolve(nick);
            })
        })
    },

    updateModule ({commit, state}, {module}) {
        commit(types.UPDATE_MODULE, {module})
    },

    activeModule({commit, state}, params) {
        commit(types.SET_ACTIVE_MODULE, params)
    },

    delModule({commit, dispatch, state}, params) {
        dispatch('activeModule', {module: {}})
        commit(types.DEL_MODULE, params)
    },

    stopPropagation() {
        window.event.stopPropagation()
    },

    fetchLucyList({commit, dispatch, state}) {
        if (DEV_MODE) {
            commit(types.FETCH_LUCKY_LIST, mockLuckyList)
        } else {
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