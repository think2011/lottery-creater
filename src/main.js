window.QUERYSTRING = (function () {
    let params = {},
        pair   = (window.location.search.substr(1)).split('&');

    if (pair[0]) {
        for (let i = 0; i < pair.length; i++) {
            let pos = pair[i].split('=');

            params[pos[0]] = decodeURIComponent(pos[1]);
        }
    }

    return params;
})();

window.DEV_MODE = !!window.QUERYSTRING.dev

$(function () {
    FastClick.attach(document.body)
})


require('babel-polyfill')

import Vue from 'vue'
import ElementUI from 'element-ui'
import store from './store'
import App from './App.vue'
import './directives'

import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI)
new Vue({
    el    : '#app',
    store,
    render: h => h(App)
})