<template>
    <component v-layer :style="module.style" is="toShop"></component>
</template>

<script type="text/ecmascript-6">
    import modules from '../modules'

    export default {
        components: modules,
        props     : {
            module: Object
        },
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<style lang="sass" rel="stylesheet/scss">
</style>
