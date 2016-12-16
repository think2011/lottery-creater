<template>
    <div style="overflow: auto">
        <div :style="pStyle" @click="showRule" v-if="data.type === 1">
        </div>
        <div :style="data.textStyle"
             v-if="data.type === 2">
            <pre>{{gameData.rule}}</pre>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import {mapGetters, mapActions} from 'vuex'
    import mixin from './mixin'

    export default {
        mixins: [mixin],

        /**
         * data.type {Number}
         *  1, 浮层按钮
         *  2, 直接展示的块
         */
        props: {},

        data () {
            return {}
        },

        methods: {
            showRule() {
                if (this.data.type !== 1) return

                window.GameDialog.lotteryRule(this.sellerId, this.activityId);
            },
            ...mapActions([
                'fetchRule'
            ])
        },

        updated() {
            if (this.data.type === 2) {
                this.fetchRule()
            }
        },

        created() {
            if (this.data.type === 2) {
                this.fetchRule()
            }
        }
    }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
    @import "../assets/styles/common";

    pre {
        word-wrap: break-word;
        white-space: pre-wrap;
        font-family: "Helvetica Neue Light", HelveticaNeue-Light, "Helvetica Neue", Calibri, Helvetica, Arial, 'Microsoft YaHei';
    }
</style>
