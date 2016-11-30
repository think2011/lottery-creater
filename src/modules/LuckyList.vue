<template>
    <ul class="list" :class="['type' + data.type]"></ul>
</template>

<script type="text/ecmascript-6">
    import {mapGetters, mapActions} from 'vuex'
    import mixin from './mixin'

    export default {
        mixins: [mixin],

        /**
         * data.type {Number}
         * 1, 单行,由左往右
         * 2, 多行,由下往上滚动
         */
        props: {},

        data () {
            return {}
        },

        computed: {
            direction() {
                let map = {
                    1: 'left',
                    2: 'top'
                }

                return map[this.data.type]
            }
        },

        methods: {
            render() {
                let that  = this
                let $list = $(this.$el)

                $list.empty()
                if (this.gameData.luckyList.length) {
                    this.gameData.luckyList.forEach(function (item) {
                        let html = null

                        if (that.direction === 'left') {
                            html = '<li>恭喜${buyerNick}**获得${giftName}</li>'.render({
                                buyerNick: item.buyerNick[0],
                                giftName : item.giftName
                            })
                        } else {
                            html = '<li>${time}　${buyerNick}**获得${giftName}</li>'.render({
                                time     : item.drawTime,
                                buyerNick: item.buyerNick[0],
                                giftName : item.giftName
                            })
                        }
                        $list.append(html)
                    })

                    $list.marquee({
                        direction: that.direction
                    })
                } else {
                    $list.append('<li>暂时无人中奖</li>')
                }
            }
        },

        mounted(){
            this.render()
        },

        updated() {
            this.render()
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    @import "../assets/styles/common";

    .module.list {
        overflow: hidden;

        &.type1 {
            display: inline-flex;

            li {
                margin-right: px2rem(10);
                white-space: nowrap;
            }
        }

        &.type2 {

        }

    }
</style>
