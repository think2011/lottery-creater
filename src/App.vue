<template>
    <div id="app">
        <render v-if="!DEV_MODE"/>
        <editor v-if="DEV_MODE"/>
    </div>
</template>

<script type="text/ecmascript-6">
    import components from './components'
    import {mapActions, mapGetters} from 'vuex'

    let modules = [
        {
            type : 'pic',
            alias: '背景',
            style: {},
            data : {
                src: 'https://img.alicdn.com/imgextra/i3/92779311/TB2SLQmbxaJ.eBjSsziXXaJ_XXa-92779311.png'
            }
        },
        {
            type : 'toShop',
            alias: '去店铺',
            style: {
                width : '80px',
                height: '50px',
            },
            data : {}
        },
        {
            type : 'pic',
            alias: '标题',
            style: {
                top: '100px',
            },
            data : {
                src: 'https://img.alicdn.com/imgextra/i2/92779311/TB22cQobCiJ.eBjSspoXXcpMFXa-92779311.png'
            }
        },
        {
            type : 'dial',
            alias: '转盘',
            style: {
                top: '100px',
            },
            data : {
                src        : '//img.alicdn.com/imgextra/i1/26914588/TB2CvXsXF95V1Bjy0FfXXXvlFXa-26914588.png',
                prizes     : [
                    {
                        index: 0,
                        deg  : 44,
                    },
                    {
                        index: 0,
                        deg  : 89,
                    },
                ],
                emptyPrizes: [
                    {
                        deg: 359,
                    }
                ]
            }
        },
        {
            type : 'drawTotal',
            alias: '抽奖次数',
            style: {
                width : '400px',
                height: '300px',
                left  : '100px',
                top   : '100px',
            },
            data : {}
        },
        {
            type : 'myPrize',
            alias: '我的奖品',
            style: {
                width : '80px',
                height: '50px',
            },
            data : {}
        },
        {
            type    : 'tasks',
            alias   : '抽奖任务',
            children: [
                {
                    type : 'shopping',
                    alias: '加购',
                    style: {
                        width : '180px',
                        height: '150px',
                        top   : '420px',
                        left  : '230px'
                    },
                    data : {}
                },
                {
                    type : 'collect',
                    alias: '收藏',
                    style: {
                        width : '80px',
                        height: '50px',
                        top   : '320px',
                        left  : '130px'
                    },
                    data : {}
                },
                {
                    type : '分享',
                    alias: '收藏',
                    style: {
                        width : '180px',
                        height: '50px',
                        top   : '320px',
                        left  : '130px'
                    },
                    data : {}
                },
            ]
        },
        {
            type : 'luckyList',
            alias: '中奖名单',
            style: {
                width : '80px',
                height: '50px',
                top   : '320px',
                left  : '130px'
            },
            data : {
                type: 1
            }
        },
        {
            type : 'rule',
            alias: '游戏规则',
            style: {
                width : '80px',
                height: '50px',
                left  : '200px',
            },
            data : {
                type: 1,
            }
        }
    ]


    export default {
        components,

        data() {
            return {
                DEV_MODE: window.DEV_MODE
            }
        },

        created() {
            this.initModule(modules)
        },

        methods: {
            ...mapActions([
                'initModule',
            ])
        },
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    #app {
    }
</style>
