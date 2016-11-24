<template>
    <div class="render-container">
        <div v-for="item in modules" class="module">
            <component v-layer
                       :module="item"
                       :p-style="item.style"
                       :data="item.data"
                       :is="item.type">
            </component>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import modules from '../modules'

    export default {
        components: modules,

        data () {
            return {}
        },
        computed: {
            modules () {
                return this.$store.state.modules
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    @import "../assets/styles/common";

    .render-container {
        width: px2rem(750);
        height: 100vh;
        margin: 0 auto;
        background: #F9FAFC;
        position: relative;

        .module {
            position: absolute;
            top: 0;
            left: 0;
            display: inline-block;
        }
    }
</style>
