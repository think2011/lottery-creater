<template>
    <div id="app">
        <!--<render/>-->
        <editor/>
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
                width  : '80px',
                height : '50px',
                opacity: 1,
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
            data : {}
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
                width  : '80px',
                height : '50px',
                opacity: 1,
            },
            data : {}
        },
        {
            type : 'tasks',
            alias: '抽奖任务',
            style: {
                width  : '80px',
                height : '50px',
                opacity: 1,
            },
            data : {}
        },
        {
            type : 'luckyList',
            alias: '中奖名单',
            style: {
                width  : '80px',
                height : '50px',
                opacity: 1,
            },
            data : {}
        },
        {
            type : 'rule',
            alias: '游戏规则',
            style: {
                width  : '80px',
                height : '50px',
                left   : '200px',
                opacity: 1,
            },
            data : {
                type: 1,
            }
        }
    ]


    export default {
        components,

        data() {
            return {}
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
