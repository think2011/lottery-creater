<template>
    <div @click="stopPropagation" class="module-list">
        <ul>
            <li class="actions">
                <div>
                    <el-popover
                            ref="popover1"
                            placement="right"
                            width="350"
                            trigger="hover">

                        <el-form label-position="top">

                            <div class="el-form-item">
                                <label class="el-form-item__label">
                                    背景图片
                                    <el-tooltip>
                                        <div slot="content">
                                            淘宝规定仅能使用 图片空间 的地址
                                        </div>

                                        <i class="el-icon-information"></i>
                                    </el-tooltip>
                                </label>

                                <div class="el-form-item__content">
                                    <el-col :span="16">
                                        <el-input v-model="bg.src"></el-input>
                                    </el-col>
                                    <el-col :offset="1" :span="7">
                                        <el-input v-model="bg.height">
                                            <template slot="append">px</template>
                                        </el-input>
                                    </el-col>
                                </div>
                            </div>
                        </el-form>

                        <el-button
                                slot="reference"
                                :plain="true"
                                type="primary"
                                icon="picture">更换背景
                        </el-button>
                    </el-popover>
                </div>

                <el-popover
                        ref="popover1"
                        placement="right"
                        width="350"
                        trigger="hover">
                    <el-button
                            slot="reference"
                            type="primary" icon="plus">添加模块
                    </el-button>
                </el-popover>
            </li>
            <li v-for="item in modules">
                <a @mouseover="mapActiveModule(item)"
                   :class="{'has-children':item.children, active:mapCurModule === item}"
                   href="javascript:">
                    {{item.alias}}

                    <el-popover
                            class="del"
                            placement="top"
                            width="120"
                            v-model="item._del"
                            trigger="manual">
                        <p>真的要删除吗？</p>
                        <div class="text-right">
                            <el-button type="text" size="mini"
                                       @click="toggleDel(item,false)">取消
                            </el-button>
                            <el-button type="primary" size="mini"
                                       @click="toggleDel(item,false);delModule(item)">确定
                            </el-button>
                        </div>
                        <el-button
                                @click="toggleDel(item,true)"
                                slot="reference"
                                size="mini"
                                type="text"
                                icon="delete">
                        </el-button>
                    </el-popover>
                </a>

                <ul>
                    <li v-for="childItem in item.children">
                        <a @mouseover="mapActiveModule(childItem)"
                           :class="{active:mapCurModule === childItem}"
                           href="javascript:">
                            {{childItem.alias}}

                            <el-popover
                                    class="del"
                                    placement="top"
                                    width="120"
                                    v-model="childItem._del"
                                    trigger="manual">
                                <p>真的要删除吗？</p>
                                <div class="text-right">
                                    <el-button type="text" size="mini"
                                               @click="toggleDel(childItem,false)">取消
                                    </el-button>
                                    <el-button type="primary" size="mini"
                                               @click="toggleDel(childItem,false);delModule(childItem)">确定
                                    </el-button>
                                </div>
                                <el-button
                                        @click="toggleDel(childItem,true)"
                                        slot="reference"
                                        size="mini"
                                        type="text"
                                        icon="delete">
                                </el-button>
                            </el-popover>
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script type="text/ecmascript-6">
    import modules from '../modules'
    import editors from '../editors'
    import {mapActions, mapState, mapGetters} from 'vuex'

    export default {
        components: {...modules},

        data () {
            return {}
        },

        computed: {
            mapCurModule() {
                let module    = null
                let curModule = this.curModule

                this.modules.forEach((item) => {
                    if (this.curModule._isChild) {
                        let parent = curModule._getParent()

                        if (item.type === parent.type) {
                            parent.children.forEach((childItem) => {
                                if (childItem.type === curModule.type) module = childItem
                            })
                        }
                    } else {
                        if (item.type === curModule.type) module = item
                    }
                })

                return module
            },

            ...mapState([
                'modules',
                'curModule',
                'bg'
            ]),
            ...mapGetters([
                'builtModules',
                'bgStyle'
            ])
        },

        methods: {
            toggleDel(item, state) {
                item._del = state
                if (!item._isChild) this.modules[this.modules.indexOf(item)]._del = state
                this.$forceUpdate()
            },

            mapActiveModule(item) {
                if (!item) return

                this.activeModule({
                    module: this.builtModules.filter((builtItem) => builtItem.type === item.type)[0] || {}
                })
            },

            ...mapActions([
                'delModule',
                'activeModule',
                'stopPropagation'
            ])
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    @import "../assets/styles/common";

    .module-list {
        min-width: 180px;
        background: #fff;
        border-right: none;
        box-shadow: 0 0 10px #ccc;
        position: fixed;
        left: 50%;
        top: 0;
        transform: translate(-375 - 180px, 0);

        .actions {
            text-align: center;
            padding: 5px 0;
            border-bottom: 1px solid #eee;

            button {
                margin: 5px 0;
            }
        }

        ul {

            li {
                a {
                    font-size: 15px;
                    color: #475669;
                    padding: 12px 15px;
                    display: block;
                    font-weight: bold;
                    position: relative;

                    &.has-children {
                        color: #999;

                        .del {
                            display: none !important;
                        }
                    }

                    &:hover, &.active {
                        background: #D3DCE6;

                        &.has-children {
                            background: none;
                            cursor: default;
                        }

                        .del {
                            display: inline-block;
                        }
                    }

                    .del {
                        display: none;
                        position: absolute;
                        right: 15px;
                        top: 50%;
                        transform: translate(0, -50%);
                    }
                }

                ul {

                    li {
                        a {
                            padding: 10px 15px 10px 30px;
                            font-weight: normal;
                            font-size: 14px;
                        }
                    }
                }
            }
        }
    }
</style>
