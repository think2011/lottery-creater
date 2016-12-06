<template>
    <div>
    </div>
</template>

<script type="text/ecmascript-6">
    import {mapActions, mapMutations, mapGetters} from 'vuex'
    import ColorPicker from '../components/ColorPicker.vue'
    import mixin from './mixin'

    export default {
        mixins: [mixin],

        components: {ColorPicker},

        props: {},

        data () {
            return {}
        },

        methods: {},
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    @import "../assets/styles/common";
</style>
