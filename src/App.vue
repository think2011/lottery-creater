<template>
    <div id="app">
        <!--<render/>-->
        <editor/>
    </div>
</template>

<script type="text/ecmascript-6">
    import components from './components'
    import {mapActions, mapGetters} from 'vuex'

    export default {
        components,

        data() {
            return {}
        },

        created() {
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
