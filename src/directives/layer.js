import Vue from 'vue'

Vue.directive('layer', {
    bind: function (el) {
        setStyle(el, {
            width: '300px'
        })
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