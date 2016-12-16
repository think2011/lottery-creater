import {convertRem} from '../assets/js/common'

export const shopUrl  = ({settings}) => {
    return `//shop.m.taobao.com/shop/shopIndex.htm?shop_id=${settings.shopId}`
}
export const gameData = ({gameData}) => gameData

export const bgStyle = ({bg, type}) => {
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
}

export const containerStyle = ({type}) => {
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
}

export const viewType = ({type}) => {
    return type
}

export const prizes = ({act}) => {
    return act.giftsJson
}

export const tasksStatus = ({act}) => {
    return {
        shopping: act.extraCount.itemCartEnabled,
        collect : act.extraCount.itemFavorEnabled,
        share   : act.extraCount.shareEnabled,
        buy     : act.extraCount.tradePaymentEnabled || act.extraCount.tradeCountEnabled,
        rate    : act.extraCount.tradeRateEnabled
    }
}

// 因为命名不一样，这个用于编辑器使用
export const tasksStatus2 = ({act}) => {
    return {
        shopping: act.extraCount.itemCartEnabled,
        collect : act.extraCount.itemFavorEnabled,
        share   : act.extraCount.shareEnabled,
        order   : act.extraCount.tradePaymentEnabled || act.extraCount.tradeCountEnabled,
        praise  : act.extraCount.tradeRateEnabled
    }
}