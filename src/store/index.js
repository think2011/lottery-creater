import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import  mutations from './mutations'
import actions from './actions'

// TODO ZH 11/29/16
const act = window.act = {
    "id"            : "97",
    "sellerId"      : "2406822118",
    "pageUrl"       : "https://shop116,406,112.m.taobao.com",
    "actUrl"        : "http://xgiftbag.ews.m.jaeapp.com/lottery2/2406822118/97/index",
    "activityStatus": "Ongoing",
    "isReturnIds"   : "",
    "giftsJson"     : [{
        "id"              : 15146,
        "giftType"        : "SHOP_COUPON",
        "denomination"    : 500,
        "denominationView": "5",
        "name"            : "无门槛",
        "position"        : [539, 9, 112, 62],
        "title"           : "无门槛",
        "_unit"           : "元",
        "_denomination"   : "5",
        "angle"           : 90
    }, {
        "id"              : 14973,
        "giftType"        : "SHOP_COUPON",
        "denomination"    : 300,
        "denominationView": "3",
        "name"            : "优惠券",
        "position"        : [539, 9, 112, 62],
        "title"           : "优惠券",
        "_unit"           : "元",
        "_denomination"   : "3",
        "angle"           : 45
    }, {
        "id"              : 14974,
        "giftType"        : "MOBILE_FLOW",
        "denomination"    : 1,
        "denominationView": "0",
        "name"            : "1M流量",
        "position"        : [710, 9, 116, 62],
        "title"           : "1M流量",
        "_unit"           : "M",
        "_denomination"   : "1",
        "angle"           : 135
    }, {"id": -1, "giftType": "NONE", "denomination": 0, "denominationView": "0"}, {
        "id"              : 14972,
        "giftType"        : "REAL_STUFF",
        "denomination"    : 0,
        "denominationView": "0",
        "name"            : "试试",
        "position"        : null,
        "title"           : "试试",
        "_unit"           : null,
        "_denomination"   : 0,
        "angle"           : 225,
        "_img"            : {}
    }, {
        "id"              : 14972,
        "giftType"        : "REAL_STUFF",
        "denomination"    : 0,
        "denominationView": "0",
        "name"            : "试试",
        "position"        : null,
        "title"           : "试试",
        "_unit"           : null,
        "_denomination"   : 0,
        "_img"            : {},
        "angle"           : 180
    }, {
        "id"              : 14974,
        "giftType"        : "MOBILE_FLOW",
        "denomination"    : 1,
        "denominationView": "0",
        "name"            : "1M流量",
        "position"        : [710, 9, 116, 62],
        "title"           : "1M流量",
        "_unit"           : "M",
        "_denomination"   : "1",
        "angle"           : 315
    }, {
        "id"              : 14973,
        "giftType"        : "SHOP_COUPON",
        "denomination"    : 300,
        "denominationView": "3",
        "name"            : "优惠券",
        "position"        : [539, 9, 112, 62],
        "title"           : "优惠券",
        "_unit"           : "元",
        "_denomination"   : "3",
        "angle"           : 270
    }],
    "extraCount"    : {
        "shareEnabled"    : false,
        "itemCartEnabled" : true,
        "itemCartConfig"  : {
            "countMeta": {"count": 1, "item": 1, "type": "mjsLinearCount"},
            "items"    : [{
                "numIid"    : 43626013861,
                "title"     : "真皮单鞋头层胎牛皮浅口细高跟超时尚性感女子职业鞋",
                "price"     : "2001.00",
                "picUrl"    : "https://img.alicdn.com/bao/uploaded/i4/TB1UnhqJFXXXXaaXFXXXXXXXXXX_!!0-item_pic.jpg",
                "listTime"  : "2016-11-24 16:06",
                "delistTime": "2016-12-01 16:06",
                "outerId"   : "打开速度来看",
                "itemId"    : 43626013861
            }, {
                "numIid"    : 523285528885,
                "title"     : "【促销宝】【促销常见问题】如何快速删除宝贝的促销价格？",
                "price"     : "19999.00",
                "picUrl"    : "https://img.alicdn.com/bao/uploaded/i1/TB1isgtLXXXXXbfXVXXXXXXXXXX_!!2-item_pic.png",
                "listTime"  : "2016-11-27 20:01",
                "delistTime": "2016-12-04 20:01",
                "itemId"    : 523285528885
            }, {
                "numIid"    : 523274601679,
                "title"     : "【促销宝】新手快速入门必看教程秘籍",
                "price"     : "39989.00",
                "picUrl"    : "https://img.alicdn.com/bao/uploaded/i2/TB1Eu1uKXXXXXa.XVXXXXXXXXXX_!!2-item_pic.png",
                "listTime"  : "2016-11-26 21:14",
                "delistTime": "2016-12-03 21:14",
                "itemId"    : 523274601679
            }, {
                "numIid"    : 523284328038,
                "title"     : "【促销宝】创建好的促销活动？",
                "price"     : "39997.00",
                "picUrl"    : "https://img.alicdn.com/bao/uploaded/i4/TB1fOiNKXXXXXbcXpXXXXXXXXXX_!!2-item_pic.png",
                "listTime"  : "2016-11-26 21:10",
                "delistTime": "2016-12-03 21:10",
                "itemId"    : 523284328038
            }, {
                "numIid"    : 523276134105,
                "title"     : "【促销宝】如何取消促销活动？",
                "price"     : "39997.00",
                "picUrl"    : "https://img.alicdn.com/bao/uploaded/i4/TB1_OSCKXXXXXXmXVXXXXXXXXXX_!!2-item_pic.png",
                "listTime"  : "2016-11-24 20:53",
                "delistTime": "2016-12-01 20:53",
                "itemId"    : 523276134105
            }, {
                "numIid"    : 523275294577,
                "title"     : "【促销宝】淘宝搜索那里长时间不显示折扣价解决方法",
                "price"     : "39997.00",
                "picUrl"    : "https://img.alicdn.com/bao/uploaded/i2/TB1PheFKXXXXXaKXFXXXXXXXXXX_!!2-item_pic.png",
                "listTime"  : "2016-11-23 20:51",
                "delistTime": "2016-11-30 20:51",
                "itemId"    : 523275294577
            }, {
                "numIid"    : 523152202240,
                "title"     : "【好礼等你拆】怎样把好礼等你拆活动装修到手机店铺首页",
                "price"     : "19999.00",
                "picUrl"    : "https://img.alicdn.com/bao/uploaded/i4/TB13q1dOpXXXXbcapXXXXXXXXXX_!!2-item_pic.png",
                "listTime"  : "2016-11-22 20:23",
                "delistTime": "2016-11-29 20:23",
                "itemId"    : 523152202240
            }]
        },
        "itemFavorEnabled": true,
        "itemFavorConfig" : {
            "countMeta": {"count": 1, "item": 1, "type": "mjsLinearCount"},
            "items"    : [{
                "numIid"    : 523285528885,
                "title"     : "【促销宝】【促销常见问题】如何快速删除宝贝的促销价格？",
                "price"     : "19999.00",
                "picUrl"    : "https://img.alicdn.com/bao/uploaded/i1/TB1isgtLXXXXXbfXVXXXXXXXXXX_!!2-item_pic.png",
                "listTime"  : "2016-11-27 20:01",
                "delistTime": "2016-12-04 20:01",
                "itemId"    : 523285528885
            }, {
                "numIid"    : 523274601679,
                "title"     : "【促销宝】新手快速入门必看教程秘籍",
                "price"     : "39989.00",
                "picUrl"    : "https://img.alicdn.com/bao/uploaded/i2/TB1Eu1uKXXXXXa.XVXXXXXXXXXX_!!2-item_pic.png",
                "listTime"  : "2016-11-26 21:14",
                "delistTime": "2016-12-03 21:14",
                "itemId"    : 523274601679
            }, {
                "numIid"    : 523284328038,
                "title"     : "【促销宝】创建好的促销活动？",
                "price"     : "39997.00",
                "picUrl"    : "https://img.alicdn.com/bao/uploaded/i4/TB1fOiNKXXXXXbcXpXXXXXXXXXX_!!2-item_pic.png",
                "listTime"  : "2016-11-26 21:10",
                "delistTime": "2016-12-03 21:10",
                "itemId"    : 523284328038
            }, {
                "numIid"    : 523276134105,
                "title"     : "【促销宝】如何取消促销活动？",
                "price"     : "39997.00",
                "picUrl"    : "https://img.alicdn.com/bao/uploaded/i4/TB1_OSCKXXXXXXmXVXXXXXXXXXX_!!2-item_pic.png",
                "listTime"  : "2016-11-24 20:53",
                "delistTime": "2016-12-01 20:53",
                "itemId"    : 523276134105
            }, {
                "numIid"    : 43626013861,
                "title"     : "真皮单鞋头层胎牛皮浅口细高跟超时尚性感女子职业鞋",
                "price"     : "2001.00",
                "picUrl"    : "https://img.alicdn.com/bao/uploaded/i4/TB1UnhqJFXXXXaaXFXXXXXXXXXX_!!0-item_pic.jpg",
                "listTime"  : "2016-11-24 16:06",
                "delistTime": "2016-12-01 16:06",
                "outerId"   : "打开速度来看",
                "itemId"    : 43626013861
            }, {
                "numIid"    : 523275294577,
                "title"     : "【促销宝】淘宝搜索那里长时间不显示折扣价解决方法",
                "price"     : "39997.00",
                "picUrl"    : "https://img.alicdn.com/bao/uploaded/i2/TB1PheFKXXXXXaKXFXXXXXXXXXX_!!2-item_pic.png",
                "listTime"  : "2016-11-23 20:51",
                "delistTime": "2016-11-30 20:51",
                "itemId"    : 523275294577
            }, {
                "numIid"    : 523152202240,
                "title"     : "【好礼等你拆】怎样把好礼等你拆活动装修到手机店铺首页",
                "price"     : "19999.00",
                "picUrl"    : "https://img.alicdn.com/bao/uploaded/i4/TB13q1dOpXXXXbcapXXXXXXXXXX_!!2-item_pic.png",
                "listTime"  : "2016-11-22 20:23",
                "delistTime": "2016-11-29 20:23",
                "itemId"    : 523152202240
            }]
        }
    },
    "bizType"       : "Lottery2",
    "taskTimesType" : null,
    "lotterFlag"    : null,
    "result"        : {"resultType": null, "giftType": null, "content": null, "isRetry": null, "giftId": null},
    "attentionFlag" : false
}
const settings = window.settings = {
    "sellerId"   : 2406822118,
    "activityId" : 97,
    "activityUrl": "http://xgiftbag.ews.m.jaeapp.com/lottery2/2406822118/97/index",
    "shopId"     : "116406112",
    "shopTitle"  : "智友网络"
}
let nick        = 'xxx'
window.fromNick = '${fromNick}';

Vue.use(Vuex)

const state = {
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
    }
}

export default new Vuex.Store({
    actions,
    getters,
    state,
    mutations
})
