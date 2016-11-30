<template>
    <div>
        <div @click="show" v-if="data.type === 1">
            游戏规则
        </div>
        <div v-if="data.type === 2">
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
            show() {
                if (this.data.type !== 1) return

                window.GameDialog.lotteryRule(this.sellerId, this.activityId);
            },
            ...mapActions([
                'fetchRule'
            ])
        },

        mounted() {
            if (this.data.type === 2) {
                this.fetchRule()
            }
        }
    }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
    @import "../assets/styles/common";

    pre {
        line-height: px2rem(35);
        word-wrap: break-word;
        white-space: pre-wrap;
    }
</style>
