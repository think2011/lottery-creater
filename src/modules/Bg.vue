<template>
    <div :style="pStyle">
    </div>
</template>

<script type="text/ecmascript-6">
    import {mapMutations} from 'vuex'

    export default {
        props: {
            module: Object,
            pStyle: Object,
            data  : Object,
        },

        created() {
            const {module} = this

            let img = new Image()

            img.onload = () => {
                this.updateModule({
                    module,
                    style: {
                        ...this.pStyle,
                        width : `${img.naturalWidth}px`,
                        height: `${img.naturalHeight}px`,
                    }
                })
            }
            img.src    = this.data.bg

            this.updateModule({
                module,
                style: {
                    ...this.pStyle,
                    backgroundImage: `url(${this.data.bg})`,
                    backgroundSize : `cover`
                }
            })
        },

        data () {
            return {}
        },

        methods: {
            ...mapMutations([
                'updateModule'
            ])
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">

</style>
