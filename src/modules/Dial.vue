<template>
    <div class="module-dial">
        <div :style="degStyle" class="bg" v-if="type ==='bg'">
            <pic :module="module"
                 :p-style="module.style"
                 :data="module.data"></pic>
        </div>
        <div @click="draw" v-if="type === 'pointer'">
            <pic :module="module"
                 :p-style="module.style"
                 :data="module.data"></pic>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import {mapGetters, mapState, mapActions} from 'vuex'
    import mixin from './mixin'
    import pic from './Pic.vue'

    export default {
        mixins: [mixin],

        components: {pic},

        props: {},

        computed: {
            degStyle() {
                return {
                    transition: 'transform 0.3s ease',
                    transform : `rotate(${this.temp.prize.deg}deg)`,
                }
            },
            ...mapState([
                'temp'
            ])
        },

        data () {
            return {}
        },

        methods: {
            draw() {
                alert('wawaaw')
            }
        },
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    @import "../assets/styles/common";

    .module-dial {
    }
</style>
