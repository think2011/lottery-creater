<template>
    <resize @mousedown="stopPropagation"
            class="property-container"
            handle=".title"
            restriction="body"
            v-show="curModule.module.type"
            :drag="true">
        <div class="close pull-right">
            <el-button @click="closeEditor" type="text">
                <i class="el-dialog__close el-icon el-icon-close"></i>
            </el-button>
        </div>

        <div v-if="curModule.parentModule">
            <h1 class="title">
                {{curModule.parentModule.alias + '-' + curModule.module.alias}}
            </h1>
            <div v-if="curModule.parentModule.type" class="body">
                <component
                        :parentModule="curModule.parentModule"
                        :module="curModule.item"
                        :p-style="curModule.parentModule.style"
                        :data="curModule.parentModule.data"
                        :is="curModule.parentModule.type + 'Editor'">
                </component>

                <div class="line"></div>

                <div class="footer">
                    <div id="tour__zIndex" class="m-t-5">
                        <el-tooltip content="上移一层" placement="top">
                            <el-button @click="changeIndex(1)" :plain="true" size="small">
                                <i class="fa fa-chevron-up" aria-hidden="true"></i>
                            </el-button>
                        </el-tooltip>
                        <el-tooltip content="下移一层" placement="top">
                            <el-button @click="changeIndex(-1)"
                                       :disabled="curModule.module.style.zIndex <= 0"
                                       :plain="true" size="small">
                                <i class="fa fa-chevron-down" aria-hidden="true"></i>
                            </el-button>
                        </el-tooltip>
                    </div>

                    <el-button class="m-b-10"
                               @click="delModule({module:curModule.module,parentModule:curModule.parentModule})"
                               icon="delete"
                               :plain="true"
                               type="danger">
                        删除
                    </el-button>
                </div>
            </div>
        </div>
        <div v-else>
            <h1 class="title">
                {{curModule.module.alias}}
            </h1>

            <div v-if="curModule.module.type" class="body">
                <component :module="curModule.module"
                           :p-style="curModule.module.style"
                           :data="curModule.module.data"
                           :is="curModule.module.type + 'Editor'">
                </component>
                <div class="line"></div>

                <div class="footer">
                    <div class="m-t-5">
                        <el-tooltip content="上移一层" placement="top">
                            <el-button @click="changeIndex(1)" :plain="true" size="small">
                                <i class="fa fa-chevron-up" aria-hidden="true"></i>
                            </el-button>
                        </el-tooltip>
                        <el-tooltip content="下移一层" placement="top">
                            <el-button @click="changeIndex(-1)"
                                       :disabled="curModule.module.style.zIndex <= 0"
                                       :plain="true" size="small">
                                <i class="fa fa-chevron-down" aria-hidden="true"></i>
                            </el-button>
                        </el-tooltip>
                    </div>

                    <el-button class="m-b-10"
                               @click="delModule({module:curModule.module})"
                               icon="delete"
                               :plain="true"
                               type="danger">
                        删除
                    </el-button>
                </div>
            </div>
        </div>


    </resize>
</template>

<script type="text/ecmascript-6">
    import modules from '../modules'
    import editors from '../editors'
    import {mapActions, mapMutations, mapState, mapGetters} from 'vuex'
    import resize from './Resize.vue'
    import moduleList from './ModuleList.vue'
    import actionsNav from './ActionsNav.vue'

    const editorsMap = {}
    for (let p in editors) {
        if (!editors.hasOwnProperty(p)) continue;

        editorsMap[`${p[0].toLowerCase()}${p.substr(1)}Editor`] = editors[p]
    }

    export default {
        components: {...modules, resize, ...editorsMap, moduleList, actionsNav},

        data () {
            return {}
        },

        computed: {
            ...mapState([
                'modules',
                'curModule'
            ]),
            ...mapGetters([
                'nextIndex'
            ])
        },

        methods: {
            changeIndex(value) {
                let zIndex = this.curModule.module.style.zIndex || 0

                zIndex += value

                if (zIndex < 0) {
                    zIndex = 0
                }

                this.$set(this.curModule.module.style, 'zIndex', zIndex)
                this.$forceUpdate()
            },

            closeEditor() {
                this.activeModule({module: {}})
            },

            ...mapActions([
                'delModule',
                'updateModule',
                'activeModule',
                'stopPropagation',
            ])
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    @import "../assets/styles/common";

    .property-container {
        width: 400px;
        background: rgba(255, 255, 255, 0.98);
        padding: 0;
        position: fixed;
        left: 70%;
        top: 30%;
        z-index: 4;
        box-shadow: 0 0 10px #777;

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

        .footer {
            display: flex;
            justify-content: space-between;
        }
    }


</style>
