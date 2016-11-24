<template>
    <div class="lc-layer">
        <slot></slot>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data () {
            return {}
        }
    }
</script>

<style lang="sass" rel="stylesheet/scss">
    .lc-layer {
        display: inline-block;
    }
</style>
