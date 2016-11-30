export const shopUrl = ({settings}) => {
    return `//shop.m.taobao.com/shop/shopIndex.htm?shop_id=${settings.shopId}`
}

export const gameData = ({gameData}) => gameData

export const builtModules = ({modules}) => {
    let newModules = []

    modules.forEach((item, index) => {
        item._getIndex = () => index

        if (!item.children) return newModules.push(item)

        item.children.forEach((childItem, childIndex) => {
            childItem._isChild   = true
            childItem.type       = item.type
            childItem.alias      = `${item.alias}-${childItem.alias}`
            childItem._getParent = () => item
            childItem._getIndex  = () => childIndex
            newModules.push(childItem)
        })
    })

    return newModules
}