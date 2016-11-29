<template>
    <div class="render-container"
         :style="{height: countHeight + 'px'}">

        <resize
                v-for="(item,index) in modules"
                @update="updateStyle(item,$event)"
                @click="activeModule({module:item})"
                restriction=".render-container"
                :drag="true"
                :p-style="item.style"
                :resize="true">
            <component class="module"
                       :module="item"
                       :style="item.style"
                       :p-style="item.style"
                       :data="item.data"
                       :is="item.type">
            </component>
            <div v-show="!item.style">{{item.style}}</div> <!-- 强制触发style更新 -->
        </resize>

        <resize v-show="curModule.type"
                class="editor-container"
                handle=".title"
                :drag="true">
            <div class="close pull-right">
                <el-button @click="closeEditor" type="text">
                    <i class="el-dialog__close el-icon el-icon-close"></i>
                </el-button>
            </div>

            <h1 class="title">
                {{curModule.alias}}
            </h1>

            <div v-if="curModule.type" class="body">
                <component :module="curModule"
                           :p-style="curModule.style"
                           :data="curModule.data"
                           :is="curModule.type + 'Editor'">
                </component>
            </div>
        </resize>
    </div>
</template>

<script type="text/ecmascript-6">
    import modules from '../modules'
    import editors from '../editors'
    import {mapActions, mapGetters} from 'vuex'
    import resize from './Resize.vue'

    const editorsMap = {}
    for (let p in editors) {
        if (!editors.hasOwnProperty(p)) continue;

        editorsMap[`${p}Editor`] = editors[p]
    }

    export default {
        components: {...modules, resize, ...editorsMap},

        data () {
            return {
                countHeight: 0
            }
        },

        computed: {
            ...mapGetters([
                'modules',
                'curModule',
            ])
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

            closeEditor() {
                this.activeModule({module: {}})
            },

            ...mapActions([
                'updateModule',
                'activeModule',
            ])
        },

        updated() {
            let heights = [].map.call(this.$el.querySelectorAll('.lc-resize'), (item) => {
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
    }

    .editor-container {
        width: 450px;
        background: #fff;
        padding: 0;
        border-radius: 5px;
        position: fixed;
        left: 25%;
        top: 45%;

        &:hover {
            box-shadow: none;
        }

        .close {
            margin: 5px 20px 0 0;
        }

        h1 {
            font-size: 18px;
            padding: 12px 20px;
            color: #1f2f3d;
            margin: 0;
            text-align: center;
            cursor: move;
        }

        .body {
            padding: 0 20px;
        }
    }

</style>
