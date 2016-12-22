<template>
    <header>
        <h1>模板编辑器</h1>

        <div class="actions">
            <a v-if="psdPath" :href="psdPath" target="_blank" class="el-button el-button--warning">
                <i class="el-icon-picture"></i>
                下载素材
            </a>

            <div class="line vertical"></div>

            <el-popover
                    placement="bottom"
                    width="350"
                    trigger="hover">
                <div class="text-center m-b-10">
                    <el-switch
                            :width="90"
                            :value="isShowLabel"
                            @change="SHOW_LABEL(!isShowLabel)"
                            on-color="#20A0FF"
                            on-text="显示标签"
                            off-text="显示标签">
                    </el-switch>
                </div>

                <div class="line"></div>

                <module-list></module-list>

                <el-button
                        slot="reference"
                        type="primary"
                        icon="setting">组件管理
                </el-button>
            </el-popover>

            <el-popover
                    placement="bottom"
                    width="350"
                    trigger="hover">
                <el-form label-position="top">
                    <div class="el-form-item">
                        <label class="el-form-item__label">
                            背景图片
                            <el-tooltip>
                                <div slot="content">
                                    <ul>
                                        <li>
                                            淘宝规定仅能使用 图片空间 的地址
                                        </li>
                                    </ul>
                                </div>

                                <i class="fa fa-question-circle-o"></i>
                            </el-tooltip>
                        </label>

                        <div class="el-form-item__content">
                            <el-input v-model="bg.src"></el-input>
                        </div>
                    </div>

                    <div class="el-form-item">
                        <label class="el-form-item__label">
                            页面高度
                        </label>

                        <div class="el-form-item__content">
                            <el-col :span="8">
                                <el-input v-model="bg.style.height"></el-input>
                            </el-col>
                        </div>
                    </div>

                    <div class="el-form-item">
                        <label class="el-form-item__label">
                            背景颜色
                            <el-tooltip>
                                <div slot="content">
                                    <ul>
                                        <li>以下情况需要背景底色</li>
                                        <li>
                                            1. 刚进入页面，素材可能还没下载好
                                        </li>
                                        <li>
                                            2. 有些设备上可能不足一屏显示(如图)
                                        </li>
                                        <li>
                                            <br>
                                            <img src="../assets/img/tips-1.png" alt="">
                                        </li>
                                    </ul>
                                </div>
                                <i class="fa fa-question-circle-o"></i>
                            </el-tooltip>
                        </label>

                        <div class="el-form-item__content">
                            <color-picker v-model="bg.style.backgroundColor"></color-picker>
                        </div>
                    </div>
                </el-form>


                <el-button
                        slot="reference"
                        type="primary"
                        icon="picture">更换背景
                </el-button>
            </el-popover>

            <div class="line vertical"></div>

            <el-button icon="document" @click="showSave" type="success">保存模板</el-button>

            <el-popover
                    class="del"
                    placement="bottom"
                    width="120"
                    v-model="exit"
                    trigger="click">
                <p>数据将不会保存，确定吗？</p>
                <div class="text-right">
                    <el-button type="text" size="mini"
                               @click="exit = false">取消
                    </el-button>
                    <el-button type="primary" size="mini"
                               @click="close">确定
                    </el-button>
                </div>
                <el-button slot="reference" type="text">退出编辑器</el-button>
            </el-popover>
        </div>


        <el-dialog title="保存模板" v-model="isShowSave" v-if="isShowSave" size="tiny">
            <el-form label-position="top" ref="model" :rules="rules" :model="model">
                <el-form-item prop="name" label="模板名称">
                    <el-input autofocus v-model="model.name"></el-input>
                </el-form-item>
            </el-form>

            <div slot="footer" class="dialog-footer">
                <el-button @click="isShowSave = false">取消</el-button>
                <el-button type="primary" :loading="loading" @click="save">立即保存</el-button>
            </div>
        </el-dialog>
    </header>

</template>

<script type="text/ecmascript-6">
    import modules from '../modules'
    import editors from '../editors'
    import {mapActions, mapMutations, mapState, mapGetters} from 'vuex'
    import moduleList from './ModuleList.vue'
    import ColorPicker from './ColorPicker.vue'

    export default {
        components: {...modules, moduleList, ColorPicker},

        data () {
            return {
                isShowSave: false,
                model     : {
                    name: ''
                },
                rules     : {
                    name: [
                        {required: true, message: '请输入模板名称', trigger: 'blur'}
                    ]
                },
                loading   : false,
                exit      : false
            }
        },

        computed: {
            ...mapState([
                'modules',
                'curModule',
                'psdPath',
                'bg',
                'name',
                'isShowLabel'
            ]),
            ...mapGetters([
                'viewType'
            ])
        },

        methods: {
            showSave() {
                this.isShowSave = true
                this.loading    = false
                this.model.name = this.name || '我的自定义模板'

                // 防止回车默认提交
                setTimeout(() => {
                    this.$refs.model.$el.setAttribute('action', 'javascript:')
                }, 0)
            },

            save() {
                this.$refs.model.validate((valid) => {
                    if (!valid) return

                    let data = {
                        type   : this.viewType,
                        name   : this.model.name,
                        bg     : this.bg,
                        psdPath: this.psdPath,
                        modules: clear(JSON.parse(JSON.stringify(this.modules)))
                    }

                    console.log(JSON.stringify(data))

                    this.loading = true
                    window.parent.opener.postMessage({
                        type: 'save',
                        data: JSON.parse(JSON.stringify(data))  // 父窗口修改了这个数据会报错
                    }, '*')
                })

                function clear(items) {
                    items.forEach((item) => {
                        for (let p in item) {
                            if (!item.hasOwnProperty(p)) continue;

                            if (p[0] === '_') delete item[p]
                        }

                        if (item.children) item.children = clear(item.children)

                    })

                    return items
                }
            },

            close() {
                window.parent.opener.postMessage({type: 'close'}, '*')
            },

            ...mapMutations([
                'SHOW_LABEL'
            ]),

            ...mapActions([
                'updateModule',
                'activeModule',
                'stopPropagation'
            ])
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    @import "../assets/styles/common";

    header {
        width: 100%;
        padding: 15px 40px;
        display: flex;
        background: rgba(255, 255, 255, 0.95);
        position: fixed;
        z-index: 1000;
        box-shadow: 0 0 10px #999;

        h1 {
            color: #8492A6;
        }

        .actions {
            flex: auto;
            text-align: right;

            .el-button {
                margin: 0 5px;
            }
        }
    }
</style>
