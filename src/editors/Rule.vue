<template>
    <el-form label-position="top">
        <el-form-item label="显示方式">
            <el-radio-group v-model="data.type">
                <el-radio :label="1">点击显示</el-radio>
                <el-radio :label="2">直接显示</el-radio>
            </el-radio-group>
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

        methods: {},
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    @import "../assets/styles/common";
</style>
