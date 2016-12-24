export default {
    shopUrl ({settings}) {
        return `//shop.m.taobao.com/shop/shopIndex.htm?shop_id=${settings.shopId}`
    },

    gameData ({gameData}) {
        return gameData
    },

    bgStyle ({bg, type}) {
        let style = null

        if (type === 'mobile') {
            style = {
                ...bg.style,
                height          : hotcss.px2rem(parseFloat(bg.style.height), 750) + 'rem',
                backgroundImage : `url(${bg.src})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize  : '100%',
                width           : '16rem'
            }
        } else {
            style = {
                ...bg.style,
                width     : '100%',
                background: `url(${bg.src}) no-repeat center top`
            }
        }

        return style
    },

    containerStyle ({type}) {
        let style = {}

        if (type === 'pc') {
            style = {
                width   : '990px',
                height  : '100%',
                position: 'relative',
                margin  : ' 0 auto'
            }
        }

        return style
    },

    viewType ({type}) {
        return type
    },

    nextIndex ({modules}) {
        let zIndex = 1

        modules.forEach((item, index) => {
            if (item.children) {
                zIndex += item.children.length
            } else {
                zIndex++
            }
        })

        return zIndex
    },

    activityStatus ({act}) {
        let status = {
            type: act.activityStatus,
            desc: null
        }

        if (act.activityStatus.match(/Ready|Paused/g)) {
            status.desc  = '活动未开始'
            status.class = 'waiting'
        }
        else if (act.activityStatus == 'Ended') {
            status.desc  = '活动已结束'
            status.class = 'end'
        }
        else {
            status.desc  = '活动进行中'
            status.class = ''
        }

        return status
    },

    prizes ({act}) {
        return act.giftsJson
    },

    tasksStatus ({act}, {tasksStatusMap}) {
        let result = {
            shopping  : act.extraCount.itemCartEnabled,
            collect   : act.extraCount.itemFavorEnabled,
            share     : act.extraCount.shareEnabled,
            buy       : act.extraCount.tradePaymentEnabled || act.extraCount.tradeCountEnabled,
            rate      : act.extraCount.tradeRateEnabled,
            shopFollow: act.extraCount.shopFollowEnabled
        }

        for (let p in tasksStatusMap) {
            if (!tasksStatusMap.hasOwnProperty(p)) continue;

            result[p] = result[tasksStatusMap[p]]
        }

        return result
    },

    tasksStatusMap () {
        // 因为命名不一样，这个用于编辑器使用
        return {
            shopping  : 'shopping',
            collect   : 'collect',
            share     : 'share',
            order     : 'buy',
            praise    : 'rate',
            shopFollow: 'shopFollow',
        }
    }
}
