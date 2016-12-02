<template>
    <div ref="drag"
         :style="dragStyle"
         @click="bindClick"
         class="lc-resize">
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
            pStyle     : Object,
            className  : String,
            restriction: String,
            handle     : String,
        },

        data () {
            return {}
        },

        computed: {
            dragStyle() {
                return {
                    ...this.pStyle,
                    opacity: 1
                }
            }
        },

        methods: {
            bindClick() {
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

            let dragInstance = interact(this.$refs.drag)
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
                        let target = event.target
                        let style  = target.getBoundingClientRect()
                        let parent = target.offsetParent || {offsetLeft: 0, offsetTop: 0}
                        let x      = (parseFloat(target.getAttribute('data-x')) || (style.left - parent.offsetLeft))
                        let y      = (parseFloat(target.getAttribute('data-y')) || style.top - -parent.offsetTop)

                        // 没有宽高时, 要设置宽高
                        if (that.pStyle && (!that.pStyle.width || !that.pStyle.height)) {
                            let childStyle = target.childNodes[0].getBoundingClientRect()

                            target.style.width  = `${childStyle.width}px`
                            target.style.height = `${childStyle.height}px`
                        }

                        x += event.dx
                        y += event.dy

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

                    onmove: function (event) {
                        let target = event.target
                        let style  = target.getBoundingClientRect()
                        let parent = target.offsetParent || {offsetLeft: 0, offsetTop: 0}
                        let x      = (parseFloat(target.getAttribute('data-x')) || (style.left - parent.offsetLeft))
                        let y      = (parseFloat(target.getAttribute('data-y')) || style.top - -parent.offsetTop)

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

                    onend: function (event) {
                        that.$emit('update', that.getPosition(event))
                    }
                })

            if (that.handle) dragInstance.allowFrom(that.handle)
        },
    }
</script>

<style lang="scss" rel="stylesheet/scss">
</style>
