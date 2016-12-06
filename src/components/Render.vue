<template>
    <div :style="bgStyle" class="render-container">
        <component class="module"
                   v-for="(item,index) in builtModules"
                   :module="item"
                   :p-style="item.style"
                   :style="item.style"
                   :data="item.data"
                   :is="item._isChild ? item._parentType : item.type">
        </component>
    </div>
</template>

<script type="text/ecmascript-6">
    import modules from '../modules'
    import {mapActions, mapGetters, mapState} from 'vuex'

    export default {
        components: {...modules},

        data () {
            return {
                countHeight: 0
            }
        },

        created() {
            $('body').css('background', this.bgStyle.backgroundColor)
        },

        computed: {
            ...mapState([
                'modules'
            ]),
            ...mapGetters([
                'builtModules',
                'bgStyle'
            ])
        },

        methods: {},
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    @import "../assets/styles/common";

    .render-container {
        width: px2rem(750);
        height: 100%;
        margin: 0 auto;
        background: #F9FAFC;
        position: relative;
        font-size: px2rem(16);

        .module {
            position: absolute;
        }
    }
</style>
