<template>
    <div>
        游戏规则
    </div>
</template>

<script type="text/ecmascript-6">
    import {mapActions} from 'vuex'

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
            ...mapActions([
                'updateModule'
            ])
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">

</style>
