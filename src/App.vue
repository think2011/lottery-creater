<template>
    <div id="app">
        <render v-if="!DEV_MODE"/>
        <editor v-if="DEV_MODE"/>
    </div>
</template>

<script type="text/ecmascript-6">
    import components from './components'
    import {mapActions, mapState, mapGetters} from 'vuex'

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
                this.initLottery(require(`../templates/tpl-${window.QUERYSTRING.tpl}.js`))
            }
            // 用户编辑
            else if (window.parent.opener) {
                window.addEventListener('message', () => {
                    let res = window.event.data

                    switch (res.type) {
                        case 'model':
                            this.initLottery(res.data)
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
                    this.initLottery(window.lotteryConfig)
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
    @import "./assets/styles/common";

    .more-draw-time {
        .tasks {
            text-align: center;
            margin: 0 0 px2rem(20) 0;

            li {
                margin: px2rem(20) 0;
                line-height: px2rem(49);
                display: inline-block;

                &:last-child {
                    i {
                        border-right: none !important;
                    }
                }
                i {
                    margin-left: px2rem(40);
                    width: px2rem(127);
                    height: px2rem(49);
                    text-indent: -99999px;
                    background-size: cover;
                    background-repeat: no-repeat;
                    display: inline-block;

                    &.shopping {
                        background-image: url("//img.alicdn.com/imgextra/i2/92779311/TB2c7iKb9iK.eBjSZFyXXaS4pXa-92779311.png");
                    }

                    &.collect {
                        width: px2rem(128);
                        background-image: url("//img.alicdn.com/imgextra/i3/92779311/TB2Uz.pbCKI.eBjy1zcXXXIOpXa-92779311.png");
                    }

                    &.share {
                        background-image: url("//img.alicdn.com/imgextra/i2/92779311/TB2w8GDb8yN.eBjSZFgXXXmGXXa-92779311.png");
                    }
                }
            }
        }
    }
</style>
