<template>
    <div class="render-container"
         :style="{height: countHeight + 'px'}">
        <component class="module"
                   v-for="(item,index) in modules"
                   :module="item"
                   :p-style="item.style"
                   :style="item.style"
                   :data="item.data"
                   :is="item.type">
        </component>
    </div>
</template>

<script type="text/ecmascript-6">
    import modules from '../modules'
    import {mapActions, mapState} from 'vuex'
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
        },

        methods: {},

        updated() {
            let heights = [].map.call(this.$el.querySelectorAll('.module'), (item) => {
                return item.offsetHeight || 0
            })

            this.countHeight = Math.max.apply(null, heights)
        },
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
