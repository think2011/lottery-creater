<template>
    <div @click="doTask">
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

        methods: {
            doTask() {
                let that       = this
                let type       = this.module.type
                let act        = this.act
                let gameDialog = window.gameDialog

                switch (type) {
                    case 'shopping':
                    case 'collect':
                        let params = $.extend({
                            id     : act.id,
                            bizType: act.bizType || 'Lottery'
                        }, type === 'shopping' ? act.extraCount.itemCartConfig : act.extraCount.itemFavorConfig)

                        gameDialog.doTask(type, params, function (res) {
                            if (res.data.appendCount) {
                                $.toast("成功增加" + res.data.appendCount + "次抽奖机会");
                                that.SET_DRAW_TOTAL(that.drawTotal + res.data.appendCount)
                            } else if (res.data.maxLimit && res.data.maxCount) {
                                $.toast("对不起, 最多只能奖励" + res.data.maxCount + "次抽奖机会");
                            }
                        })
                        break;

                    case 'share':
                        gameDialog.share(act.actUrl, act.extraCount.shareConfig)
                        break;

                    default:
                    //
                }
            }
        },
    }
</script>

<style lang="scss" rel="stylesheet/scss">

</style>
