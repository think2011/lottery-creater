<template>
    <div class="render-container">
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
    import resize from './Resize.vue'

    export default {
        components: {...modules, resize},

        data () {
            return {
                countHeight: 0
            }
        },

        computed: {
            ...mapState([
                'modules'
            ]),
            ...mapGetters([
                'builtModules'
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
