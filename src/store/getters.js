import {convertRem} from '../assets/js/common'

export const shopUrl  = ({settings}) => {
    return `//shop.m.taobao.com/shop/shopIndex.htm?shop_id=${settings.shopId}`
}
export const gameData = ({gameData}) => gameData

export const bgStyle = ({bg}) => {
    return {
        height          : `${parseFloat(bg.height)}px`,
        backgroundImage : `url(${bg.src})`,
        backgroundColor : bg.color,
        backgroundRepeat: 'no-repeat',
        backgroundSize  : '100%'
    }
}

export const builtModules = ({modules}) => {
    let newModules = []

    modules.forEach((item, index) => {
        item._getIndex = () => index

        if (!item.children) return newModules.push(item)

        item.children.forEach((childItem, childIndex) => {
            childItem._isChild    = true
            childItem._parentType = item.type
            childItem._getParent  = () => item
            childItem._getIndex   = () => childIndex
            newModules.push(childItem)
        })
    })

    return newModules
}

export const prizes = ({act}) => {
    return act.giftsJson
}