<template>
    <div id="app">
        <render v-if="!DEV_MODE"/>
        <editor v-if="DEV_MODE"/>
    </div>
</template>

<script type="text/ecmascript-6">
    import components from './components'
    import {mapActions, mapState, mapGetters} from 'vuex'
    import {Loading} from 'element-ui'

    export default {
        components,

        data() {
            return {
                DEV_MODE: window.DEV_MODE
            }
        },

        created() {
            // 临时开发
            if (window.QUERYSTRING.tpl) {
                require([`../templates/tpl-${window.QUERYSTRING.tpl}.js`], (config) => {
                    this.initLottery({...config})
                })
            }
            // 用户编辑
            else if (window.parent.opener) {
                let loading = Loading.service({fullscreen: true, text: '正在加载编辑器..'})

                window.addEventListener('message', () => {
                    let res = window.event.data

                    switch (res.type) {
                        case 'model':
                            this.initLottery({...res.data})
                            loading.close()
                            break;

                        default:
                        //
                    }
                })

                window.parent.opener.postMessage({type: 'init'}, '*')
            }
            // 正式使用
            else {
                try {
                    this.initLottery({...window.lotteryConfig})
                } catch (err) {
                    console.error('初始化失败，没有找到【lotteryConfig】字段')
                }
            }
        },

        methods: {
            ...mapActions([
                'initLottery',
            ])
        },
    }
</script>

<style lang="scss" rel="stylesheet/scss">
</style>
