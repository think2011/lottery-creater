<template>
    <div>
        中奖名单列表
        <ul>
            <li v-for="item in items">
                .....
            </li>
        </ul>
    </div>
</template>

<script type="text/ecmascript-6">
    import {mapActions} from 'vuex'

    export default {
        props: {
            module: Object,
            pStyle: Object,
            data  : Object,
        },

        created() {
            const {module} = this
        },

        data () {
            return {}
        },

        methods: {
            fetch() {
                $.doAjax({
                    url     : "act-data",
                    data : {
                        needWinner : true
                    },
                    mask    : false
                })
                    .then(function (res) {
                        if (!res.success) return

                        $list.empty()
                        if (res.data && res.data.winners && res.data.winners.length) {
                            res.data.winners.forEach(function (item) {
                                var html = null

                                if (direction === 'left') {
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
                                direction: direction
                            })
                        } else {
                            $list.append('<li>暂时无人中奖</li>')
                        }
                    })

            },

            ...mapActions([
                'updateModule'
            ])
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">

</style>
