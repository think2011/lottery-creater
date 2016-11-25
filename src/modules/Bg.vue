<template>
    <div>
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

        data () {
            return {}
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
            img.src    = this.data.src

            this.updateModule({
                module,
                style: {
                    ...this.pStyle,
                    backgroundImage: `url(${this.data.src})`,
                    backgroundSize : `cover`
                }
            })
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
