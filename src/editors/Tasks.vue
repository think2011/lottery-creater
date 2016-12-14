<template>
    <el-form label-position="top">
        <el-form-item label="排列方式">
            <el-radio-group v-model="cModule.data.position">
                <el-tooltip content="根据活动的设置自动展示和排列任务" placement="top">
                    <el-radio style="margin-right: 10px;" label="auto">自动</el-radio>
                </el-tooltip>

                <el-tooltip content="点击对应区域做对应任务" placement="top">
                    <el-radio label="manual">自定义</el-radio>
                </el-tooltip>

            </el-radio-group>
        </el-form-item>


        <el-form-item v-if="isAuto" label="对齐方式">
            <el-radio-group v-model="data.align">
                <el-radio-button label="left">左</el-radio-button>
                <el-radio-button label="center">中</el-radio-button>
                <el-radio-button label="right">右</el-radio-button>
            </el-radio-group>
        </el-form-item>


        <el-form-item label="任务图标">
            <div class="tasks-settings" v-for="item in (cModule.data.children || cModule.children)">
                {{item.alias}}

                <el-input
                        placeholder="图片地址"
                        v-model="item.data.src">
                </el-input>
            </div>
        </el-form-item>


    </el-form>

</template>

<script type="text/ecmascript-6">
    import {mapActions, mapGetters} from 'vuex'
    import mixin from './mixin'

    export default {
        mixins: [mixin],

        props: {},

        data () {
            return {}
        },

        computed: {
            cModule(){
                return this.parentModule || this.module
            },
            isAuto() {
                return !!this.cModule.data.children
            }
        },

        watch: {
            'cModule.data.position'(newVal) {
                if (newVal === 'auto') {
                    this.parentModule.data.children = this.parentModule.children
                    this.parentModule.children      = null

                    this.activeModule({
                        module      : this.parentModule,
                        parentModule: null
                    })
                } else {
                    this.module.children      = this.module.data.children
                    this.module.data.children = null

                    this.activeModule({
                        module      : this.module.children[0],
                        parentModule: this.module
                    })
                }
            }
        },

        methods: {
            ...mapActions([
                'updateModule',
            ])
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    @import "../assets/styles/common";

    .tasks-settings {
        display: flex;

        .el-input {
            flex: auto;
            margin-left: 15px;
        }
    }
</style>
