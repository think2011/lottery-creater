<template>
    <div>
        <img :src="this.data.src" alt="">
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
