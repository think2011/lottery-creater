<template>
    <el-form label-width="80px">
        <el-form-item label="图片地址">
            <el-input v-model="curModule.data.src"></el-input>
        </el-form-item>
    </el-form>
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
