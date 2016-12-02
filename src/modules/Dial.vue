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
            return {}
        },

        methods: {
            draw() {
                if (this.drawing) return
                if (!this.checkTicket()) return

                this.drawing  = true
                let drawTween = this.drawTween

                drawTween.start(({value}) => {
                    this.SET_CUR_TWEEN_VALUE(value)
                })

                this.drawLottery().then((data) => {
                    // 根据id设置deg

                    drawTween.stop(89, () => {
                        this.showLotteryResult(data)
                        this.drawing = false
                    })
                })
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
