import Vue from 'vue'

Vue.directive('layer', {
    bind: function (el) {
        setStyle(el, {})
    }
})

/**
 * 设置style
 * @param el
 * @param options
 */
function setStyle(el, options) {
    for (let i in options) {
        el.style[i] = options[i]
    }
}