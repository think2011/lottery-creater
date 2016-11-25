<template>
    <div>
        游戏规则
    </div>
</template>

<script type="text/ecmascript-6">
    import {mapMutations} from 'vuex'

    export default {
        props: {
            module: Object,
            pStyle: Object,
            data  : Object,
        },

        created() {
            const {module} = this
        },

        data () {
            return {}
        },

        methods: {
            ...mapMutations([
                'updateModule'
            ])
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">

</style>
