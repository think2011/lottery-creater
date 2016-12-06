<template>
    <div>
        <div class="actions">
            <div v-if="psdPath">
                <a :href="psdPath" target="_blank" class="el-button el-button--success el-button--large">下载PSD</a>
                <div class="line"></div>
            </div>

            <el-button @click="isShowSave=true;loading=false" type="primary" size="large">保存模板</el-button>

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
    </div>
</template>

<script type="text/ecmascript-6">
    import modules from '../modules'
    import editors from '../editors'
    import {mapActions, mapMutations, mapState, mapGetters} from 'vuex'

    export default {
        components: {...modules},

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
                'name',
            ]),
            ...mapGetters([
                'builtModules'
            ])
        },

        created() {
            this.model.name = this.name || '我的自定义模板'
        },

        methods: {
            save() {
                this.$refs.model.validate((valid) => {
                    if (!valid) return

                    let modules = clear(JSON.parse(JSON.stringify(this.modules)))

                    this.loading = true
                    window.parent.opener.postMessage({
                        type: 'create', data: {
                            name: this.model.name,
                            bg  : this.bg,
                            modules
                        }
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

            ...mapActions([
                'updateModule',
                'activeModule',
            ])
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    @import "../assets/styles/common";

    .actions {
        background: #fff;
        box-shadow: 0 0 10px #999;
        padding: 10px;
        position: absolute;
        left: 55%;
        top: 0;
        transform: translate(375px, 0);

        .tag {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 10px;
        }

        .el-button {
            width: 100%;
            text-align: center;
            display: block;
            margin: 0 0 10px 0 !important;

            &:last-child {
                margin: 0 !important;
            }
        }
    }
</style>
