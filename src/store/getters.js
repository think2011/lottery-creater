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

export const prizes = ({act}) => {
    return act.giftsJson
}