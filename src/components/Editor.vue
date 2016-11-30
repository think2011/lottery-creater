<template>
    <div class="render-container"
         :style="{height: countHeight + 'px'}">

        <div class="modules-container">
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
            </resize>
        </div>

        <resize v-show="editorsMap[curModule.type + 'Editor']"
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

            <div v-if="editorsMap[curModule.type + 'Editor']" class="body">
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
    import {mapActions, mapState, mapGetters} from 'vuex'
    import resize from './Resize.vue'

    const editorsMap = {}
    for (let p in editors) {
        if (!editors.hasOwnProperty(p)) continue;

        editorsMap[`${p[0].toLowerCase()}${p.substr(1)}Editor`] = editors[p]
    }

    export default {
        components: {...modules, resize, ...editorsMap},

        data () {
            return {
                editorsMap,
                countHeight: 0
            }
        },

        computed: {
            ...mapState([
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

    /* 开发环境屏蔽检测 */
    body, body.m-body {
        zoom: 1;
        position: relative;
        max-width: initial !important;
        height: auto;
        margin: 0 auto;
        font-size: 16px;
    }

    .qrcode-dialog.active.modal-container,
    .ui-overlay-a.poup {
        display: none !important;
    }

    .render-container {
        width: px2rem(750);
        height: 100%;
        margin: 0 auto;
        background: #F9FAFC;
        position: relative;
    }

    .modules-container {
        .lc-resize {
            position: absolute;
            display: inline-block;
            overflow: hidden;
            border: 2px solid transparent;

            &:hover {
                border: 2px solid #58B7FF;

                &:before {
                    content: '';
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    top: 0;
                    left: 0;
                    background: rgba(88, 183, 255, 0.1);
                }
            }

            .module {
                pointer-events: none;
            }
        }
    }

    .editor-container {
        width: 450px;
        background: rgba(255, 255, 255, 0.95);
        padding: 0;
        border-radius: 5px;
        position: fixed;
        left: 25%;
        top: 45%;

        &:hover {
            &:before {
                content: initial;
            }
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
