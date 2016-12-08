<template>
    <el-form label-position="top">
        <el-form-item label="滚动方式">
            <el-radio-group v-model="data.type">
                <el-radio :label="1">往右滚动</el-radio>
                <el-radio :label="2">往上滚动</el-radio>
            </el-radio-group>
        </el-form-item>

        <el-form-item label="样式">
            <style-editor v-model="data.textStyle"></style-editor>
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
