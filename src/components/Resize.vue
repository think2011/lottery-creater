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
            drag        : Boolean,
            resize      : Boolean,
            pStyle      : Object,
            className   : String,
            allowKeyMove: Boolean,
            restriction : String,
            handle      : String,
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
            },

            setPosition(el, type, value) {
                let typeMap = {
                    left: ['left', 'data-x'],
                    top : ['top', 'data-y']
                }
                let curMap  = typeMap[type]

                el.style[curMap[0]] = `${value}px`
                el.setAttribute(curMap[1], value)
            },

            getPositionStyle(target) {
                let style = null

                if (getComputedStyle(target).position === 'fixed') {
                    style = target.getBoundingClientRect()
                } else {
                    style = $(target).position()
                }

                return style
            },

            movePosition(direction, value = 1) {
                let target = this.$refs.drag
                let style  = this.getPositionStyle(target)

                switch (direction) {
                    case 't':
                        this.setPosition(target, 'top', style.top -= 1)
                        break;

                    case 'r':
                        this.setPosition(target, 'left', style.left += 1)
                        break;

                    case 'b':
                        this.setPosition(target, 'top', style.top += 1)
                        break;

                    case 'l':
                        this.setPosition(target, 'left', style.left -= 1)
                        break;

                    default:
                    //
                }
            },
        },

        created() {
            let keyMap = {
                38: 't',
                39: 'r',
                40: 'b',
                37: 'l'
            }

            $(document).on('keydown', (event) => {
                if (!this.allowKeyMove || !keyMap[event.keyCode]) return

                this.movePosition(keyMap[event.keyCode])
                this.$emit('update', this.getPosition({target: this.$refs.drag}))
                event.preventDefault()
            })
        },

        mounted() {
            let that = this

            let dragInstance = interact(this.$refs.drag)
                .draggable({
                    autoScroll: true,
                    enabled   : !!this.drag,
                    restrict  : {
                        restriction: that.restriction,
                        endOnly    : true,
                        elementRect: {top: 0, left: 0, bottom: 1, right: 1}
                    },

                    // call this function on every dragmove event
                    onmove: function dragMoveListener(event) {
                        let target = event.target
                        let style  = that.getPositionStyle(target)

                        let x = (parseFloat(target.getAttribute('data-x')) || style.left)
                        let y = (parseFloat(target.getAttribute('data-y')) || style.top)

                        // 没有宽高时, 要设置宽高
                        if (that.pStyle && (!that.pStyle.width || !that.pStyle.height)) {
                            let childStyle = target.childNodes[0].getBoundingClientRect()

                            target.style.width  = `${childStyle.width}px`
                            target.style.height = `${childStyle.height}px`
                        }

                        that.setPosition(target, 'left', x += event.dx)
                        that.setPosition(target, 'top', y += event.dy)
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
                        let style  = $(target).position()
                        let x      = (parseFloat(target.getAttribute('data-x')) || style.left)
                        let y      = (parseFloat(target.getAttribute('data-y')) || style.top)

                        if (event.rect.width <= 50) event.rect.width = 50
                        if (event.rect.height <= 50) event.rect.height = 50

                        // update the element's style
                        target.style.width  = event.rect.width + 'px';
                        target.style.height = event.rect.height + 'px';


                        that.setPosition(target, 'left', x += event.deltaRect.left)
                        that.setPosition(target, 'top', y += event.deltaRect.top)

                        that.$emit('update', that.getPosition(event))
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
