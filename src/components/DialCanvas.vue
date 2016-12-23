<template>
    <div class="dial-canvas">
    </div>
</template>

<script type="text/ecmascript-6">
    import DrawTween from '../assets/js/DrawTween'

    export default {
        components: {},

        props: ['config'],

        data(){
            return {}
        },

        computed: {
            adaptConfig() {
                if (!this.config) return

                return Object.assign({}, this.config, {
                    rotateType: 2,
                    bitmap    : {
                        dial   : this.config.dialSrc,
                        pointer: this.config.pointerSrc,
                        prizes : this.config.prizesSrc,
                    },
                })
            }
        },

        watch: {
            'config': {
                deep   : true,
                handler: function (val, oldVal) {
                    if (!val) return

                    this.init()
                }
            }
        },

        mounted() {
            this.init()
        },

        methods: {
            init() {
                if (!this.config) return

                // TODO ZH 12/23/16 临时改

                const that   = this
                var instance = new Dial(this.adaptConfig)

                window.dialInstace = instance

                instance
                    .on('init:done', function (canvas) {
                        $(that.$el).append(canvas)

                        if (DEV_MODE) return

                        // 缓缓转起来
                        if (that.config.rotateType === 2) {
                            var $canvasWrap = canvas.find('.canvas-wrap')
                            var drawTween   = window.drawTween = new DrawTween({
                                    slowLoopFn   : function (params) {
                                        var transform = 'rotate(${value}deg) translate3d(0,0,0)'.render({value: params.value})
                                        $canvasWrap.css({
                                            transform          : transform,
                                            "-webkit-transform": transform
                                        })
                                    },
                                    multipleValue: 360,
                                    startSpeed   : 1500,
                                    loopSpeed    : 1500 * 0.3,
                                    endSpeed     : 2500,
                                    minTime      : 3500,
                                    startEasing  : TWEEN.Easing.Quartic.In,
                                    loopEasing   : TWEEN.Easing.Linear.None,
                                    endEasing    : TWEEN.Easing.Quartic.Out
                                }
                            )
                            drawTween.startSlowLoop()
                        }
                    })
            }
        },
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    .dial-canvas {
        ._pointer, ._bg {
            display: none;
        }
        ._dial {
            position: static;
        }

        canvas {
            transform: scale(1) !important;
        }
    }
</style>
