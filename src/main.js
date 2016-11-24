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