<template>
    <div class="editor-container">
        <section class="container">
            <div class="module-list">
                <ul>
                    <li v-for="item in modules">
                        <a :class="{'has-children':item.children}"
                           href="javascript:">
                            {{item.alias}}
                        </a>

                        <ul>
                            <li v-for="childItem in item.children">
                                <a href="javascript:">
                                    {{childItem.alias}}
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div :style="bgStyle" class="main">
                <resize
                        v-for="(item,index) in builtModules"
                        @update="updateStyle(item,$event)"
                        @click="activeModule({module:item})"
                        restriction=".main"
                        :p-style="item.style"
                        :drag="item._drag"
                        :resize="item._resize">
                    <component class="module"
                               :module="item"
                               :style="item.style"
                               :p-style="item.style"
                               :data="item.data"
                               :is="item._isChild ? item._getParent().type : item.type">
                    </component>
                </resize>
            </div>

            <div class="actions">
                <el-button :plain="true" type="success" size="large">更换背景</el-button>
                <el-button type="primary" size="large">保存模板</el-button>
                <el-button type="text">退出编辑器</el-button>
            </div>
        </section>


        <!--       <div :style="bgStyle" class="render-container">
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

                   <resize v-show="editorsMap[curModuleInfo._editor]"
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
                   </resize>
               </div>

               <div class="property-container">
                   <div v-if="editorsMap[curModuleInfo._editor]" class="body">
                       <component :module="curModuleInfo"
                                  :p-style="curModuleInfo.style"
                                  :data="curModuleInfo.data"
                                  :is="curModuleInfo._editor">
                       </component>
                   </div>
               </div>-->

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
                test: false
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

    body {
        background: #ddd !important;
    }

    .editor-container {
        .container {
            display: flex;
            justify-content: center;

            .module-list {
                min-width: 180px;
                background: #fff;
                border-right: none;
                box-shadow: 0 0 10px #ccc;
                position: fixed;
                left: 50%;
                top: 0;
                transform: translate(-375 - 180px, 0);

                ul {

                    li {
                        a {
                            font-size: 15px;
                            color: #475669;
                            padding: 12px 15px;
                            display: block;
                            font-weight: bold;

                            &.has-children {
                                color: #999;
                            }

                            &:hover {
                                background: #D3DCE6;

                                &.has-children {
                                    background: none;
                                    cursor: default;
                                }
                            }
                        }

                        ul {

                            li {
                                a {
                                    padding: 10px 15px;
                                    font-weight: normal;
                                    font-size: 14px;
                                    margin-left: 15px;
                                }
                            }
                        }
                    }
                }
            }

            .main {
                width: 750px;
                flex: 0 0 750px;
                background: #fff;
                box-shadow: 0 0 10px #999;
                position: relative;
                z-index: 3;

                .lc-resize {
                    position: absolute;

                    > * {
                        pointer-events: none;
                    }
                }
            }

            .actions {
                background: #fff;
                box-shadow: 0 0 10px #999;
                padding: 10px;
                position: absolute;
                left: 50%;
                top: 0;
                transform: translate(375px, 0);

                button {
                    width: 100%;
                    text-align: center;
                    display: block;
                    margin: 0 0 10px 0;

                    &:last-child {
                        margin: 0;
                    }
                }
            }
        }
    }

</style>
