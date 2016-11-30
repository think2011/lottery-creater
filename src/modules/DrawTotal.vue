<template>
    <div class="flex-center">
        您还有<span>{{gameData.drawTotal}}</span>次抽奖机会
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

        methods: {},
    }
</script>

<style lang="scss" rel="stylesheet/scss">

</style>
