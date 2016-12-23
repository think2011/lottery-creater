<template>
    <el-form class="editor-dial" label-position="top">
        <el-form-item label="奖品填充方式">
            <el-radio-group v-model="curModule.parentModule.data.type">
                <el-tooltip content="根据活动的设置的奖品自动生成" placement="top">
                    <el-radio style="margin-right: 10px;" label="auto">自动</el-radio>
                </el-tooltip>

                <el-tooltip content="自己设计奖品素材并设定中奖角度" placement="top">
                    <el-radio label="custom">手动</el-radio>
                </el-tooltip>

            </el-radio-group>
        </el-form-item>

        <div v-if="parentModule.children[2]" class="el-form-item">
            <label class="el-form-item__label">
                指针素材
                <el-tooltip placement="top">
                    <div slot="content">
                        淘宝规定仅能使用 图片空间 的地址
                    </div>

                    <i class="fa fa-question-circle-o"></i>
                </el-tooltip>
            </label>

            <div class="el-form-item__content">
                <el-input size="small" v-model="parentModule.children[2].data.src"></el-input>
            </div>
        </div>

        <div v-if="parentModule.data.type === 'auto'" class="el-form-item">
            <label class="el-form-item__label">
                奖品素材
                <el-tooltip placement="top">
                    <div slot="content">
                        淘宝规定仅能使用 图片空间 的地址
                    </div>

                    <i class="fa fa-question-circle-o"></i>
                </el-tooltip>
            </label>

            <div class="el-form-item__content">
                <el-input size="small" v-model="parentModule.data.autoConfig.prizesSrc"></el-input>
            </div>
        </div>

        <div v-if="parentModule.children[0]" class="el-form-item">
            <label class="el-form-item__label">
                转盘素材
                <el-tooltip placement="top">
                    <div slot="content">
                        淘宝规定仅能使用 图片空间 的地址
                    </div>

                    <i class="fa fa-question-circle-o"></i>
                </el-tooltip>
            </label>

            <div class="el-form-item__content">
                <el-input size="small" v-model="parentModule.children[0].data.src"></el-input>
            </div>
        </div>

        <div v-if="parentModule.data.type === 'custom'">
            <div class="el-form-item">
                <label class="el-form-item__label">
                    中奖位置
                    <el-tooltip placement="left">
                        <div slot="content">
                            <ul>
                                <li>
                                    每个奖品的位置与要用的活动的【奖品】是【一一对应】的
                                </li>
                                <li>
                                    例如截图中的
                                    <ul>
                                        <li>
                                            【流量包】=【奖品1】
                                        </li>
                                        <li>
                                            【优惠券】=【奖品2】
                                        </li>
                                        <li>
                                            【实　物】=【奖品3】
                                        </li>
                                        <li>
                                            ...
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    请务必核实清楚
                                </li>
                                <li>
                                    <br>
                                    <img style="width: 550px;" src="../assets/img/tips-2.png" alt="">
                                </li>
                            </ul>
                        </div>

                        <i class="fa fa-question-circle-o"></i>
                    </el-tooltip>
                </label>

                <div class="el-form-item__content">
                    <el-popover
                            v-for="(item,index) in prizes"
                            placement="top-start"
                            width="300"
                            trigger="click">
                        <el-slider
                                :show-input="true"
                                :min="0"
                                :max="360"
                                v-model="item.deg">
                        </el-slider>

                        <span @click="SET_CUR_PRIZE(item)" slot="reference">
                        <el-tag
                                :closable="true"
                                type="danger"
                                :close-transition="true"
                                @close="removeDeg(item,prizes)"
                        >
                            奖品{{index+1}}
                        </el-tag>
                    </span>
                    </el-popover>

                    <el-button @click="addDeg(prizes)"
                               type="primary"
                               :disabled="prizes.length >= 10"
                               size="mini">添加
                    </el-button>
                </div>
            </div>

            <div class="el-form-item">
                <label class="el-form-item__label">
                    没有中奖位置
                    <el-tooltip placement="top">
                        <div slot="content">
                            如果没有中奖，随机停在下面任意一个位置
                        </div>

                        <i class="fa fa-question-circle-o"></i>
                    </el-tooltip>
                </label>

                <div class="el-form-item__content">
                    <el-popover
                            v-for="(item,index) in emptyPrizes"
                            placement="top-start"
                            width="300"
                            trigger="click">
                        <el-slider
                                :show-input="true"
                                :min="0"
                                :max="360"
                                v-model="item.deg">
                        </el-slider>

                        <span @click="SET_CUR_PRIZE(item)" slot="reference">
                        <el-tag
                                :closable="true"
                                type="gray"
                                :close-transition="true"
                                @close="removeDeg(item,emptyPrizes)"
                        >
                            {{item.deg}}度
                        </el-tag>
                    </span>
                    </el-popover>

                    <el-button @click="addDeg(emptyPrizes)"
                               type="primary"
                               :disabled="emptyPrizes.length > 6"
                               size="mini">添加
                    </el-button>
                </div>
            </div>
        </div>

        <div v-if="parentModule.data.type === 'auto'">
            <div class="el-form-item">
                <label class="el-form-item__label">
                    转盘颜色
                </label>

                <div class="el-form-item__content">
                    <el-col :span="6">
                        <el-input size="small" v-model="parentModule.data.autoConfig.dialColors[0]"></el-input>
                    </el-col>
                    <el-col :span="6" :offset="1">
                        <el-input size="small" v-model="parentModule.data.autoConfig.dialColors[1]"></el-input>
                    </el-col>
                </div>
            </div>

            <div class="el-form-item">
                <label class="el-form-item__label">
                    字体颜色
                </label>

                <div class="el-form-item__content">
                    <el-col :span="6">
                        <el-input size="small" v-model="parentModule.data.autoConfig.fontColor[0]"></el-input>
                    </el-col>
                    <el-col :span="6" :offset="1">
                        <el-input size="small" v-model="parentModule.data.autoConfig.fontColor[1]"></el-input>
                    </el-col>
                </div>
            </div>
        </div>
    </el-form>
</template>

<script type="text/ecmascript-6">
    import {mapActions, mapState, mapMutations, mapGetters} from 'vuex'
    import mixin from './mixin'

    export default {
        mixins: [mixin],

        props: {},

        data () {
            return {}
        },

        computed: {
            prizes() {
                return this.parentModule.data.customConfig.prizes
            },
            emptyPrizes() {
                return this.parentModule.data.customConfig.emptyPrizes
            },

            ...mapState([
                'curModule'
            ])
        },

        methods: {
            addDeg(items) {
                items.push({deg: 0})
            },

            removeDeg(deg, items){
                items.splice(items.indexOf(deg), 1)
            },

            ...mapMutations([
                'SET_CUR_PRIZE',
            ])
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    @import "../assets/styles/common";

    .editor-dial {
        .el-tag {
            margin-right: 5px;
            cursor: pointer;
        }
    }
</style>
