import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import  mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const act      = window.act
const settings = window.settings
const fromNick = window.fromNick
const nick     = window.nick

const state = {
    name      : '',
    bg        : {},
    modules   : [],
    curModule : {},
    act       : act,
    settings  : settings,
    nick      : nick,
    fromNick  : fromNick,
    sellerId  : act.sellerId,
    activityId: settings.activityId,
    gameData  : {
        drawTotal    : 0,
        drawing:false,
        prizes       : [],
        curPrize     : null,
        tweenValue   : null,
        lotteryResult: null,
        rule         : '1、活动期间每个用户每天有3次抽奖机会\n2、流量包实时发放\n3、活动最终解释权归智友网络所有，如有疑问请联系智友设计咨询',
        luckyList    : [{
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
    },
}

export default new Vuex.Store({
    actions,
    getters,
    state,
    mutations
})
