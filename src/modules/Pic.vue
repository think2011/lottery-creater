<template>
    <div :style="curStyle">
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

        data () {
            return {
                img: new Image()
            }
        },

        computed: {
            curStyle() {
                return {
                    ...this.pStyle,
                    backgroundImage: `url(${this.data.src})`,
                    backgroundSize : `cover`
                }
            }
        },

        watch: {
            'data.src'(newVal) {
                this.img.src = newVal
            }
        },

        created() {
            const {module} = this

            this.img.onload = () => {
                this.updateModule({
                    module,
                    style: {
                        ...this.pStyle,
                        width : `${this.img.naturalWidth}px`,
                        height: `${this.img.naturalHeight}px`,
                    }
                })
            }
            this.img.src    = this.data.src
        },

        methods: {
            ...mapActions([
                'updateModule'
            ])
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">

</style>
