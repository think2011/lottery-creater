<template>
    <div>
        <div v-if="data.type === 1">
            <div @click="show"  :style="pStyle">
            </div>
        </div>
        <div style="overflow: auto;height: 100%;">
            <div :style="data.textStyle"
                 v-if="data.type === 2">
                <pre>{{gameData.rule}}</pre>
            </div>
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
            show() {
                if (this.data.type !== 1) return

                window.GameDialog.lotteryRule(this.sellerId, this.activityId);
            },
            ...mapActions([
            ])
        },

        updated() {
        },

        created() {
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
