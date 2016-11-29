<template>
    <div>
        <img :src="this.data.src" alt="">
    </div>
</template>

<script type="text/ecmascript-6">
    import {mapActions} from 'vuex'
    import mixin from './mixin'

    export default {
        mixins: [mixin],

        props: {},

        data () {
            return {
                img: new Image()
            }
        },

        computed: {},

        mounted() {
            this.img.src = this.data.src
        },

        created() {
            this.img.onload = () => {
                this.updateModule({
                    module: this.module,
                    style : {
                        ...this.pStyle,
                        width : `${this.img.naturalWidth}px`,
                        height: `${this.img.naturalHeight}px`,
                    }
                })
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">

</style>
