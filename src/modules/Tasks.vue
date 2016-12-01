<template>
    <div @click="doTask(type)">
    </div>
</template>

<script type="text/ecmascript-6">
    import {mapGetters, mapActions} from 'vuex'
    import mixin from './mixin'

    export default {
        mixins: [mixin],

        props: {},

        data () {
            return {}
        },

        methods: {
            ...mapActions([
                'doTask'
            ])
        },
    }
</script>

<style lang="scss" rel="stylesheet/scss">

</style>
