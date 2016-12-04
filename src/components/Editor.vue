<template>
    <div @click="mapActiveModule({module:{}})" class="editor-container">
        <section class="container">
            <module-list></module-list>

            <div :style="bgStyle" class="main">
                <resize
                        :class="{active:curModule === item}"
                        v-for="(item,index) in builtModules"
                        @update="updateStyle(item,$event)"
                        @click="mapActiveModule({module:item})"
                        restriction=".main"
                        :p-style="item.style"
                        :drag="true"
                        :resize="true">
                    <component class="module"
                               :module="item"
                               :style="item.style"
                               :p-style="item.style"
                               :data="item.data"
                               :is="item._isChild ? item._getParent().type : item.type">
                    </component>
                    <div class="handle">
                        <div class="dot t"></div>
                        <div class="dot r"></div>
                        <div class="dot b"></div>
                        <div class="dot l"></div>
                        <div class="dot c-t"></div>
                        <div class="dot c-r"></div>
                        <div class="dot c-b"></div>
                        <div class="dot c-l"></div>
                    </div>
                </resize>
            </div>

            <actions-nav></actions-nav>
        </section>

        <property-editor></property-editor>
    </div>
</template>

<script type="text/ecmascript-6">
    import modules from '../modules'
    import editors from '../editors'
    import {mapActions, mapMutations, mapState, mapGetters} from 'vuex'
    import resize from './Resize.vue'
    import moduleList from './ModuleList.vue'
    import actionsNav from './ActionsNav.vue'
    import PropertyEditor from './PropertyEditor.vue'

    const editorsMap = {}
    for (let p in editors) {
        if (!editors.hasOwnProperty(p)) continue;

        editorsMap[`${p[0].toLowerCase()}${p.substr(1)}Editor`] = editors[p]
    }

    export default {
        components: {...modules, resize, ...editorsMap, PropertyEditor, moduleList, actionsNav},

        data () {
            return {
                editorsMap,
                test: false
            }
        },

        computed: {
            ...mapState([
                'modules',
                'curModule',
                'temp'
            ]),
            ...mapGetters([
                'builtModules',
                'bgStyle'
            ])
        },

        methods: {
            updateStyle(module, position) {
                module.style = {
                    ...module.style,
                    ...position
                }

                this.updateModule({module})
            },

            mapActiveModule(params){
                window.event.stopPropagation()
                this.activeModule(params)
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

    html {
        cursor: default !important;
    }

    body {
        background: #ddd !important;
    }

    .editor-container {
        .container {
            display: flex;
            justify-content: center;

            .main {
                width: 750px;
                flex: 0 0 750px;
                background: #fff;
                box-shadow: 0 0 10px #999;
                position: relative;
                z-index: 3;

                .lc-resize {
                    position: absolute;
                    cursor: pointer;
                    overflow: hidden;

                    &:hover, &.active {
                        .handle {
                            opacity: 1;
                        }
                    }

                    &.active {
                        cursor: move;
                    }

                    > :first-child {
                        pointer-events: none;
                    }

                    .el-tag {
                        position: absolute;
                        top: 0;
                        right: 0;
                        opacity: .9;
                    }

                    .handle {
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        top: 0;
                        left: 0;
                        border: 2px solid #4DAEFF;
                        background: rgba(77, 174, 255, 0.1);
                        opacity: 0;
                        transition: opacity .3s;

                        .dot {
                            width: 9px;
                            height: 9px;
                            border: 1px solid #4DAEFF;
                            border-radius: 50%;
                            background: #fff;
                            position: absolute;
                            display: block;

                            &.t {
                                top: -1px;
                                left: -1px;
                                cursor: nw-resize;
                            }

                            &.r {
                                top: -1px;
                                right: -1px;
                                cursor: ne-resize;
                            }

                            &.b {
                                bottom: -1px;
                                right: -1px;
                                cursor: se-resize;
                            }

                            &.l {
                                bottom: -1px;
                                left: -1px;
                                cursor: sw-resize;
                            }

                            &.c-t {
                                top: -1px;
                                left: 50%;
                                transform: translate(-50%, 0);
                                cursor: ns-resize;
                            }

                            &.c-r {
                                top: 50%;
                                right: -1px;
                                transform: translate(0, -50%);
                                cursor: ew-resize;
                            }

                            &.c-b {
                                bottom: -1px;
                                left: 50%;
                                transform: translate(-50%, 0);
                                cursor: ns-resize;
                            }

                            &.c-l {
                                top: 50%;
                                left: -1px;
                                transform: translate(0, -50%);
                                cursor: ew-resize;
                            }
                        }
                    }
                }
            }
        }
    }

</style>
