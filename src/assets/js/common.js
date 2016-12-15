/**
 * 转换 style 里面的 px 单位为 rem
 * @param style
 * @param size 设计尺寸
 * @returns {*}
 */
export const convertRem = function (style, size = 750) {

    for (let p in style) {
        if (!style.hasOwnProperty(p)) continue;
        let property = style[p]

        // 转换单位为rem
        if (`${property}`.endsWith('px')) {
            style[p] = `${window.hotcss.px2rem(parseFloat(property), size)}rem`
        }
    }

    return style
}

/**
 * convertRem反向版
 * @param style
 * @param size 设计尺寸
 * @returns {*}
 */
export const convertPx = function (style, size = 750) {

    for (let p in style) {
        if (!style.hasOwnProperty(p)) continue;
        let property = style[p]

        // 转换单位为px
        if (`${property}`.endsWith('rem')) {
            style[p] = `${window.hotcss.rem2px(parseFloat(property), size).toFixed(2)}px`
        }
    }

    return style
}