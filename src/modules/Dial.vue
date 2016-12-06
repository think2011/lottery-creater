<template>
    <div class="module-dial">
        <div :style="degStyle" class="bg" v-if="type ==='bg'">
            <pic :module="module"
                 :style="tweenStyle"
                 :p-style="module.style"
                 :data="module.data"></pic>
        </div>

        <div @click="draw" v-if="type === 'pointer'">
            <pic :module="module"
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

            ...mapState([
                'dialData'
            ])
        },

        data () {
            return {
                prizeId: null
            }
        },

        methods: {
            draw() {
                this.getPrizeDeg()

                if (this.drawing) return
                if (!this.checkTicket()) return

                this.drawing  = true
                let drawTween = this.drawTween

                drawTween.start(({value}) => {
                    this.SET_CUR_TWEEN_VALUE(value)
                })

                this.drawLottery().then((data) => {
                    let prizeDeg = this.getPrizeDeg()

                    if (this.prizeDeg) {
                        this.drawTween.stop(prizeDeg, () => {
                            this.showLotteryResult(data)
                            this.drawing = false
                        })
                    } else {
                        alert('慢慢转啊')
                        this.showLotteryResult(data)
                        this.drawing = false
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
            ])
        },

        created() {
            this.drawTween = new DrawTween({
                    multipleValue: 360,
                    startValue   : 0,
                    endValue     : 360,
                    startSpeed   : 1500,
                    loopSpeed    : 1500 * 0.3,
                    endSpeed     : 2500,
                    minTime      : 3500,
                    startEasing  : TWEEN.Easing.Quartic.In,
                    loopEasing   : TWEEN.Easing.Linear.None,
                    endEasing    : TWEEN.Easing.Quartic.Out,
                }
            )
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    @import "../assets/styles/common";

    .module-dial {
    }
</style>
