<template>
    <div>
        <el-input v-model="curModule.data.src"></el-input>
    </div>
</template>

<script type="text/ecmascript-6">
    import {mapActions, mapGetters} from 'vuex'
    import mixin from './mixin'

    export default {
        mixins: [mixin],

        props: {},

        data () {
            return {}
        },

        computed: {},

        methods: {}
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    @import "../assets/styles/common";
</style>
