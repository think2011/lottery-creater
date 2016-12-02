<template>
    <div class="editor-container">
        <div :style="bgStyle" class="render-container">
            <div class="modules-container">
                <resize
                        v-for="(item,index) in builtModules"
                        @update="updateStyle(item,$event)"
                        @click="activeModule({module:item})"
                        restriction=".render-container"
                        :p-style="item.style"
                        :drag="false"
                        :resize="false">
                    <component class="module"
                               :module="item"
                               :style="item.style"
                               :p-style="item.style"
                               :data="item.data"
                               :is="item._isChild ? item._getParent().type : item.type">
                    </component>
                </resize>
            </div>

            <!--   <resize v-show="editorsMap[curModuleInfo._editor]"
                       class="editor-container"
                       handle=".title"
                       :drag="true">
                   <div class="close pull-right">
                       <el-button @click="closeEditor" type="text">
                           <i class="el-dialog__close el-icon el-icon-close"></i>
                       </el-button>
                   </div>

                   <h1 class="title">
                       {{curModuleInfo._alias}}
                   </h1>

                   <div v-if="editorsMap[curModuleInfo._editor]" class="body">
                       <component :module="curModuleInfo"
                                  :p-style="curModuleInfo.style"
                                  :data="curModuleInfo.data"
                                  :is="curModuleInfo._editor">
                       </component>
                   </div>
               </resize>-->
        </div>

        <div class="property-container">
            <div v-if="editorsMap[curModuleInfo._editor]" class="body">
                <component :module="curModuleInfo"
                           :p-style="curModuleInfo.style"
                           :data="curModuleInfo.data"
                           :is="curModuleInfo._editor">
                </component>
            </div>
        </div>

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
            curModuleInfo() {
                let curModule = this.curModule
                if (!curModule) return {}

                let isChild = curModule._isChild
                return {
                    ...curModule,
                    _alias : isChild ? `${curModule._getParent().alias}-${curModule.alias}` : curModule.alias,
                    _editor: isChild ? `${curModule._getParent().type}Editor` : `${curModule.type}Editor`
                }
            },

            ...mapState([
                'modules',
                'curModule',
            ]),
            ...mapGetters([
                'builtModules',
                'bgStyle'
            ])
        },

        methods: {
            save() {
                console.log(this.modules)
            },

            updateStyle(module, position) {
                module.style = {
                    ...module.style,
                    ...position
                }

                this.updateModule({module})
            },

            closeEditor() {
                this.activeModule({module: {}})
            },

            ...mapActions([
                'updateModule',
                'activeModule',
            ])
        }
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

    .editor-container {
        display: flex;
    }

    .property-container {
        background: seagreen;
        flex: 1;
    }

    .render-container {
        flex: 0 0 750px;
        height: 100%;
        margin: 0 auto;
        background: #F9FAFC;
        position: relative;
    }

    .modules-container {
        * {
            box-sizing: content-box;
        }

        .lc-resize {
            position: absolute;
            display: inline-block;
            border: 2px solid transparent;
            overflow: hidden;

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

    /* .editor-container {
         width: 450px;
         background: rgba(255, 255, 255, 0.98);
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
     }*/

</style>
