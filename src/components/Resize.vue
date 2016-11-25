<template>
    <div ref="drag"
         @click="click"
         :class="className"
         class="lc-resize">
        <div class="t handle"></div>
        <div class="r handle"></div>
        <div class="b handle"></div>
        <div class="l handle"></div>
        <slot></slot>
    </div>
</template>

<script type="text/ecmascript-6">
    import modules from '../modules'
    import interact from 'interact.js'

    window.interact = interact
    export default {
        components: modules,

        props: {
            drag       : Boolean,
            resize     : Boolean,
            className  : String,
            restriction: String,
        },

        data () {
            return {}
        },

        computed: {},

        methods: {
            click() {
                this.$emit('click')
            },

            getPosition(event) {
                let style = event.target.style

                return {
                    width : style.width,
                    height: style.height,
                    top   : style.top,
                    left  : style.left
                }
            }
        },

        mounted() {
            let that = this

            interact(this.$refs.drag)
                .draggable({
                    enabled : !!this.drag,
                    inertia : true,
                    restrict: {
                        restriction: that.restriction,
                        endOnly    : true,
                        elementRect: {top: 0, left: 0, bottom: 1, right: 1}
                    },

                    // call this function on every dragmove event
                    onmove: function dragMoveListener(event) {
                        let target = event.target,
                            // keep the dragged position in the data-x/data-y attributes
                            x      = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
                            y      = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

                        // translate the element
                        target.style.left = `${x}px`
                        target.style.top  = `${y}px`

                        // update the posiion attributes
                        target.setAttribute('data-x', x);
                        target.setAttribute('data-y', y);
                    },
                    // call this function on every dragend event
                    onend : function (event) {
                        that.$emit('update', that.getPosition(event))
                    }
                })
                .resizable({
                    enabled            : !!this.resize,
                    preserveAspectRatio: false,
                    invert             : 'reposition',
                    edges              : {
                        left  : true,
                        right : true,
                        bottom: true,
                        top   : true
                    },
                    onmove             : function (event) {
                        let target = event.target,
                            x      = (parseFloat(target.getAttribute('data-x')) || 0),
                            y      = (parseFloat(target.getAttribute('data-y')) || 0);

                        if (event.rect.width <= 30) event.rect.width = 30
                        if (event.rect.height <= 30) event.rect.height = 30

                        // update the element's style
                        target.style.width  = event.rect.width + 'px';
                        target.style.height = event.rect.height + 'px';

                        // translate when resizing from top or left edges
                        x += event.deltaRect.left;
                        y += event.deltaRect.top;

                        // translate the element
                        target.style.left = `${x}px`
                        target.style.top  = `${y}px`

                        // update the position attributes
                        target.setAttribute('data-x', x);
                        target.setAttribute('data-y', y);
                    },
                    onend              : function (event) {
                        that.$emit('update', that.getPosition(event))
                    }
                })
        },
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    .lc-resize {
        position: absolute;
        display: inline-block;

        &:hover {
            box-shadow: 0 0 5px rgba(0, 0, 0, 1);
        }

        &.active {
            .handle {
                border-color: #1D8CE0 !important;
                position: absolute;

                &.t {
                    width: 100%;
                    border-bottom: 2px dashed;
                    top: 2px;
                }

                &.r {
                    height: 100%;
                    border-right: 2px dashed;
                    right: 2px;
                }

                &.b {
                    width: 100%;
                    border-bottom: 2px dashed;
                    bottom: 2px;
                }

                &.l {
                    height: 100%;
                    border-left: 2px dashed;
                    left: 2px;
                }
            }
        }

        .module {
            pointer-events: none;
        }
    }
</style>
