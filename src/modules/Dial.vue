<template>
    <div class="module-dial" :class="[type === 'pointer' && activityStatus.class]">
        <div :style="degStyle"
             class="bg"
             v-if="type ==='bg'">

            <pic :module="module"
                 :style="tweenStyle"
                 :p-style="module.style"
                 :data="module.data">
            </pic>
        </div>

        <div v-if="type === 'canvas' && dialType === 'auto'">
            <dial-canvas :config="dialCanvasConfig"></dial-canvas>
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
    import DialCanvas from '../components/DialCanvas.vue'

    const TWEEN = window.TWEEN

    export default {
        mixins: [mixin],

        components: {pic, DialCanvas},

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
                if (this.parentModule.data.customConfig.rotateType !== this.type) return

                let transform = `rotate(${this.gameData.tweenValue}deg) translate3d(0,0,0)`

                return {
                    'will-change'      : 'transform',
                    '-webkit-transform': transform,
                    transform,
                }
            },

            dialCanvasConfig() {
                let {data, children} = this.parentModule

                if (data.type !== 'auto') return null

                return Object.assign({}, data.autoConfig, {
                    dialSrc   : children[0].data.src,
                    pointerSrc: children[1].data.src,
                    prizes    : this.prizes
                })
            },

            dialType() {
                return this.parentModule.data.type
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
                    if (this.dialType === 'auto') {
                        this.autoDraw()
                    } else {
                        this.customDraw()
                    }
                })
            },

            autoDraw() {
                const that = this

                this.SET_DRAW_STATE(true)

                // 先转起来
                var rotateInstance = window.dialInstace.rotate(2)

                this.drawLottery()
                    .then((data) => {
                        // 停止转动
                        rotateInstance(data.giftId, function () {
                            that.SET_DRAW_STATE(false)
                            that.showLotteryResult(data)
                        })
                    })
                    .catch((err) => {
                        rotateInstance(-1, function () {
                            that.SET_DRAW_STATE(false)

                            $.alert(err || '系统繁忙, 请稍后重试')
                        })
                    })
            },

            customDraw() {
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
            },

            customStart() {
                this.drawTween = new DrawTween({
                        slowLoopFn   : window.DEV_MODE ? false : ({value}) => {
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
                window.dialTest = () => {
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
            if (this.dialType === 'custom') {
                this.customStart()
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    @import "../assets/styles/common";

    .module-dial {
        &.end {
            pointer-events: auto;

            &:before {
                width: 100%;
                height: 100%;
                border-radius: 50%;
                content: '活动已结束';
                background: rgba(0, 0, 0, 0.5);
                position: absolute;
                top: 0;
                left: 0;
                color: #fff;
                z-index: 2;
                display: inline-flex;
                justify-content: center;
                align-items: center;
            }
        }

        &.waiting {
            pointer-events: auto;

            &:before {
                width: 100%;
                height: 100%;
                border-radius: 50%;
                content: '活动未开始';
                background: rgba(0, 0, 0, 0.5);
                position: absolute;
                top: 0;
                left: 0;
                color: #fff;
                z-index: 2;
                display: inline-flex;
                justify-content: center;
                align-items: center;
            }
        }
    }

    .pointer {
        cursor: pointer;
    }
</style>
