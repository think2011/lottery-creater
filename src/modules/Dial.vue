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
                    transition         : 'transform 0.3s ease',
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
                drawTween: new DrawTween({
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
        },

        methods: {
            draw() {
                if (!this.checkTicket() || this.drawing) return

                let drawTween = this.drawTween

                drawTween.start(({value}) => {
                    this.SET_CUR_TWEEN_VALUE(value)
                })

                drawTween.stop(89, () => {
                    console.log('end')
                })

                return


                this.drawing   = true
                const that     = this
                let startTween = this.startTween = new TWEEN.Tween({value: this.startDeg, isStart: true})
                    .easing(TWEEN.Easing.Quartic.In)
                    .to({value: this.endDeg}, 1500)
                    .onUpdate(function () {
                        that.tweenUpdate(this)
                    })

                let loopTween = this.loopTween = new TWEEN.Tween({value: this.startDeg, isLoop: true})
                    .easing(TWEEN.Easing.Linear.None)
                    .to({value: this.endDeg}, 1500 * 0.3)
                    .repeat(Infinity)
                    .onUpdate(function () {
                        that.tweenUpdate(this)
                    })

                this.startTime = Date.now()
                startTween.chain(loopTween)
                startTween.start()


                ;
                // 启动动画
                (function loop() {
                    that.loopTimer = requestAnimationFrame(loop)
                    TWEEN.update()
                })()
            },

            doDraw({startValue, startSpeed, loopSpeed, endValue}){

            },

            tweenUpdate({isStart, isLoop, value}) {

                if (isLoop && stopInfo.id !== null && (Date.now() - stopInfo.startTime > 3500)) {
                    var prize = that.prizes
                        .concat()
                        .sort(function () {
                            return Math.random() > 0.5
                        })
                        .filter(function (item) {
                            return item.id === stopInfo.id
                        })[0]
                    var angle = shuffleAngle(prize ? prize.angle : 0)

                    loopTween.stop()
                    currentType.end(this.value, angle, prize.angle)
                }
            },

            tweenClear() {
                cancelAnimationFrame(this.loopTimer)
                TWEEN.removeAll()
            },

            updateDialData(data) {
                this.SET_DIAL_DATA({...this.dialData, data})
            },

            ...mapActions([
                'drawLottery',
                'checkTicket',
            ]),

            ...mapMutations([
                'SET_CUR_TWEEN_VALUE',
            ])
        },
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    @import "../assets/styles/common";

    .module-dial {
    }
</style>
