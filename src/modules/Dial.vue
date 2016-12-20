<template>
    <div class="module-dial">
        <div :style="degStyle"
             class="bg"
             v-if="type ==='bg'">
            <pic :module="module"
                 :style="tweenStyle"
                 :p-style="module.style"
                 :data="module.data"></pic>
        </div>

        <div @click="draw" v-if="type === 'pointer'">
            <pic :module="module"
                 class="pointer"
                 :style="tweenStyle"
                 :p-style="module.style"
                 :data="module.data"></pic>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import {mapGetters, mapState, mapMutations, mapActions} from 'vuex'
    import mixin from './mixin'
    import pic from './Pic.vue'
    import DrawTween from '../assets/js/DrawTween'

    const TWEEN = window.TWEEN

    export default {
        mixins: [mixin],

        components: {pic},

        props: {},

        computed: {
            degStyle() {
                if (!this.gameData.curPrize) return

                let transform = `rotate(${this.gameData.curPrize.deg}deg) translate3d(0,0,0)`

                return {
                    transition         : 'transform 0.3s linear',
                    'will-change'      : 'transform',
                    '-webkit-transform': transform,
                    transform,
                }
            },

            tweenStyle() {
                if (this.parentModule.data.rotateType !== this.type) return

                let transform = `rotate(${this.gameData.tweenValue}deg) translate3d(0,0,0)`

                return {
                    'will-change'      : 'transform',
                    '-webkit-transform': transform,
                    transform,
                }
            },

            drawing() {
                return this.gameData.drawing
            },

            ...mapState([
                'dialData',
                'gameData'
            ])
        },

        data () {
            return {
                prizeId  : null,
                drawTween: null
            }
        },

        methods: {
            draw() {
                if (this.drawing) return

                this.checkTicket().then(() => {
                    let drawTween = this.drawTween
                    let that      = this

                    this.SET_DRAW_STATE(true)
                    drawTween.start(({value}) => {
                        this.SET_CUR_TWEEN_VALUE(value)
                    })

                    this.drawLottery()
                        .then((data) => {
                            let prizeDeg = this.getPrizeDeg(data.giftId)

                            if (prizeDeg !== null) {
                                stopWithPrize(prizeDeg, data)
                            } else {
                                stopWithoutPrize(data)
                            }
                        })
                        .catch(() => {
                            stopWithoutPrize()
                        })

                    function stopWithPrize(deg, data) {
                        that.drawTween.stop(deg, () => {
                            that.showLotteryResult(data)
                            that.SET_DRAW_STATE(false)
                            drawTween.startSlowLoop()
                        })
                    }

                    function stopWithoutPrize(data) {
                        that.drawTween.stop(0,
                            () => {
                                that.SET_DRAW_STATE(false)
                                drawTween.startSlowLoop()
                            },
                            () => {
                                if (data) {
                                    data && that.showLotteryResult(data)
                                } else {
                                    $.alert('系统繁忙, 请稍后重试')
                                }
                            })
                    }
                })
            },

            getPrizeDeg(id) {
                let that     = this
                let degCheck = {
                    win() {
                        let deg = null

                        // 奖品角度对应关系：this.prizes[N] = data.prizes[N].deg
                        that.prizes.forEach((item, index) => {
                            if (item.id === id) {
                                let degItem = that.parentModule.data.prizes[index]

                                deg = degItem && degItem.deg
                            }
                        })

                        return deg
                    },
                    miss() {
                        return that.parentModule.data.emptyPrizes
                            .map((item) => item.deg)
                            .sort(() => Math.random() < 0.5)
                            [0]
                    }
                }

                return degCheck.win() || degCheck.miss() || null
            },

            ...mapActions([]),

            ...mapMutations([
                'SET_CUR_TWEEN_VALUE',
                'SET_DRAW_STATE'
            ])
        },

        created() {
            this.drawTween = new DrawTween({
                    slowLoopFn   : DEV_MODE ? false : ({value}) => {
                        this.SET_CUR_TWEEN_VALUE(value)
                    },
                    multipleValue: 360,
                    startSpeed   : 1500,
                    loopSpeed    : 1500 * 0.3,
                    endSpeed     : 2500,
                    minTime      : 3500,
                    startEasing  : TWEEN.Easing.Quartic.In,
                    loopEasing   : TWEEN.Easing.Linear.None,
                    endEasing    : TWEEN.Easing.Quartic.Out,
                }
            )

            this.drawTween.startSlowLoop()

            window.drawTween = this.drawTween
            window.dialTest  = () => {
                this.drawTween.start(({value}) => {
                    this.SET_CUR_TWEEN_VALUE(value)
                })

                setTimeout(() => {
                    this.drawTween.stop(0,
                        () => {
                            this.drawTween.startSlowLoop()
                        },
                        () => {
                            layer.open({content: '错误错误'})
                        })
                }, 0)
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    @import "../assets/styles/common";

    .module-dial {
    }

    .pointer {
        cursor: pointer;
    }
</style>
