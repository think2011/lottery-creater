<template>
    <resize @click="stopPropagation"
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
                <div class="text-right">
                    </el-button>
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
                <div class="text-right">
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
            ...mapGetters([])
        },

        methods: {
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
    }


</style>
