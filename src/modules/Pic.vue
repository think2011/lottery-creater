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
                this.module.style = {
                    ...this.module.style,
                    width : `${this.img.naturalWidth}px`,
                    height: `${this.img.naturalHeight}px`,
                }

                this.updateModule({module: this.module})
            }
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    img {
        width: 100%;
    }
</style>
