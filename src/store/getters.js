import {convertRem} from '../assets/js/common'

export const shopUrl  = ({settings}) => {
    return `//shop.m.taobao.com/shop/shopIndex.htm?shop_id=${settings.shopId}`
}
export const gameData = ({gameData}) => gameData

export const bgStyle = ({bg}) => {
    return {
        ...bg.style,
        backgroundImage : `url(${bg.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize  : '100%'
    }
}

export const prizes = ({act}) => {
    return act.giftsJson
}