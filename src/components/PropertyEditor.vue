<template>
    <resize @click="stopPropagation"
            class="property-container"
            handle=".title"
            v-show="curModuleInfo.data"
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
                'curModule'
            ]),
            ...mapGetters([
                'builtModules'
            ])
        },

        methods: {
            closeEditor() {
                this.activeModule({module: {}})
            },

            ...mapActions([
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
        background: rgba(255, 255, 255, 0.95);
        padding: 0;
        position: fixed;
        left: 70%;
        top: 30%;
        z-index: 4;
        box-shadow: 0 0 5px #999;

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
