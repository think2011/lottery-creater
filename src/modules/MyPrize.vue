<template>
    <div @click="show" class="flex-center">
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
            show() {
                window.GameDialog.openWinRecord(this.nick, this.sellerId, this.activityId);
            }
        },
    }
</script>

<style lang="scss" rel="stylesheet/scss">

</style>
