<template>
    <el-form label-position="top">
        <el-form-item label="显示方式">
            <el-radio-group v-model="data.type">
                <el-radio :label="1" style="margin-right: 15px">点击显示</el-radio>
                <el-radio :label="2">直接显示</el-radio>
            </el-radio-group>
        </el-form-item>

        <el-form-item v-show="data.type === 2" label="样式">
            <style-editor v-model="data.textStyle"></style-editor>
        </el-form-item>

        <div class="click-tips has-prev" v-show="data.type === 1">
            <el-alert
                    title="提示：点击了此区域会【弹出】活动规则"
                    :closable="false"
                    show-icon>
            </el-alert>
        </div>
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
