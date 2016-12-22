<template>
    <el-form label-position="top">
        <div class="el-form-item">
            <label class="el-form-item__label">
                图片地址
                <el-tooltip>
                    <div slot="content">
                        淘宝规定仅能使用 图片空间 的地址
                    </div>

                    <i class="fa fa-question-circle-o"></i>
                </el-tooltip>
            </label>

            <div class="el-form-item__content">
                <el-input size="small" v-model="data.src"></el-input>
            </div>
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

        computed: {},

        methods: {}
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    @import "../assets/styles/common";
</style>
