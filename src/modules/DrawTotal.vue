<template>
    <div class="draw-total flex-center">
        <span :style="data.descStyle">
            您还有<span :style="data.timeStyle">{{gameData.drawTotal}}</span>次抽奖机会
        </span>
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

        created() {
        },

        methods: {},
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    .draw-total {
        white-space: nowrap;
    }
</style>
