<template>
    <div>
        <img :style="hidden" :src="this.data.src" alt="">
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

        computed: {
            hidden() {
                return {
                    visibility: this.data.type === 2 ? 'hidden' : 'visible'
                }
            }
        },

        mounted() {
            this.img.src = this.data.src
        },

        created() {
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    img {
        width: 100%;
    }
</style>
