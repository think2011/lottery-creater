<template>
    <div>
        <el-form label-position="top">
            <el-form-item label="描述样式">
                <style-editor v-model="data.descStyle"></style-editor>
            </el-form-item>

            <el-form-item label="次数样式">
                <style-editor v-model="data.timeStyle"></style-editor>
            </el-form-item>
        </el-form>
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
