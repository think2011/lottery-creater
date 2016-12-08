/**
 * 转换 style 里面的 px 单位为 rem
 * @param style
 * @returns {*}
 */
export const convertRem = function (style) {

    for (let p in style) {
        if (!style.hasOwnProperty(p)) continue;
        let property = style[p]

        // 转换单位为rem
        if (`${property}`.endsWith('px')) {
            style[p] = `${window.hotcss.px2rem(parseFloat(property), 750)}rem`
        }
    }

    return style
}

/**
 * convertRem反向版
 * @param style
 * @returns {*}
 */
export const convertPx = function (style) {

    for (let p in style) {
        if (!style.hasOwnProperty(p)) continue;
        let property = style[p]

        // 转换单位为rem
        if (`${property}`.endsWith('rem')) {
            style[p] = `${window.hotcss.rem2px(parseFloat(property), 750)}px`
        }
    }

    return style
}