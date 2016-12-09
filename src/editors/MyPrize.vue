<template>
    <div class="click-tips">
        <el-alert
                title="提示：点击了此区域会【弹出】我的奖品"
                :closable="false"
                show-icon>
        </el-alert>
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

        methods: {}
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    @import "../assets/styles/common";
</style>
