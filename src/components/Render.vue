<template>
    <div class="render-container"
         :style="{height: countHeight + 'px'}">
        <resize
                v-for="item in modules"
                @update="updateStyle(item,$event)"
                :style="item.style"
                :disabled="!item.resize">
            <component class="module"
                       :module="item"
                       :p-style="item.style"
                       :data="item.data"
                       :is="item.type">
            </component>
        </resize>
    </div>
</template>

<script type="text/ecmascript-6">
    import modules from '../modules'
    import {mapMutations} from 'vuex'
    import resize from './Resize.vue'

    export default {
        components: {...modules, resize},

        data () {
            return {
                countHeight: 0
            }
        },

        computed: {
            modules () {
                return this.$store.state.modules
            }
        },

        updated() {
            let heights = [].map.call(this.$el.childNodes, (item) => {
                return item.offsetHeight
            })

            this.countHeight = Math.max.apply(null, heights)
        },

        methods: {
            updateStyle(module, position) {
                this.updateModule({
                    module,
                    style: {
                        ...module.style,
                        ...position
                    }
                })
            },
            ...mapMutations([
                'updateModule'
            ])
        }
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
    }
</style>
